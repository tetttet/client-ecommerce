"use client";

import Image from "next/image";
import type { FC } from "react";
import { useEffect, useState } from "react";

interface ProductGalleryProps {
  discount: number;
  images: string[];
  productName: string;
}

export const ProductGallery: FC<ProductGalleryProps> = ({
  discount,
  images,
  productName,
}) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    if (!isZoomOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsZoomOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isZoomOpen]);

  return (
    <>
      <div className="grid gap-3">
        <button
          type="button"
          aria-label={`Open larger image of ${productName}`}
          onClick={() => setIsZoomOpen(true)}
          className="group relative aspect-[4/5] overflow-hidden rounded-xl outline-none ring-offset-2 ring-offset-[#fbfaf8] transition-transform focus-visible:ring-2 focus-visible:ring-neutral-950 lg:aspect-[5/6]"
        >
          <Image
            src={selectedImage}
            alt={productName}
            fill
            priority
            sizes="(min-width: 1024px) 56vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute left-4 top-4 flex gap-2">
            <span className="rounded-full bg-neutral-950/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-white backdrop-blur">
              {discount > 0 ? `-${discount}%` : "New"}
            </span>
            <span className="rounded-full bg-[#f05a16] px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
              In stock
            </span>
          </div>
        </button>

        <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">
          {images.map((image, index) => {
            const isSelected = image === selectedImage;

            return (
              <button
                type="button"
                key={image}
                aria-label={`Show ${productName} view ${index + 1}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square overflow-hidden rounded-lg outline-none ring-offset-2 ring-offset-[#fbfaf8] transition focus-visible:ring-2 focus-visible:ring-neutral-950 ${
                  isSelected
                    ? "ring-2 ring-neutral-950"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                <Image
                  src={image}
                  alt={`${productName} view ${index + 1}`}
                  fill
                  sizes="(min-width: 640px) 120px, 25vw"
                  className="object-cover"
                />
              </button>
            );
          })}
        </div>
      </div>

      {isZoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Larger image of ${productName}`}
          className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            type="button"
            aria-label="Close larger image"
            onClick={() => setIsZoomOpen(false)}
            className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-neutral-950/80 text-lg font-semibold text-white transition hover:bg-neutral-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            X
          </button>

          <div
            className="relative h-[86vh] w-full max-w-5xl overflow-hidden rounded-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={productName}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};
