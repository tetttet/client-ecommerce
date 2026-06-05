"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const handleMouseEnter = () => {
    if (product.images.length > 1) setCurrentImageIndex(1);
  };

  const handleMouseLeave = () => setCurrentImageIndex(0);

  const goTo = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const openProduct = () => {
    router.push(`/products/${product.id}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProduct();
    }
  };

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label={`Open ${product.name} details`}
      onClick={openProduct}
      onKeyDown={handleKeyDown}
      className="group bg-white border border-black/[0.08] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 hover:border-black/20 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#f05a16]/40 focus:ring-offset-2"
    >
      {/* Image */}
      <div
        className="relative w-full h-60 bg-neutral-50 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Badge & Favorite */}
        <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-start justify-between">
          {discount > 0 ? (
            <span className="bg-[#f05a16] text-white text-[10px] font-medium tracking-wide uppercase px-2 py-1 rounded">
              -{discount}%
            </span>
          ) : (
            <span className="bg-[#f05a16] text-white text-[10px] font-medium tracking-wide uppercase px-2 py-1 rounded">
              New
            </span>
          )}

          <button
            aria-label="Add to favorites"
            className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-neutral-600 hover:text-red-500 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </button>
        </div>

        <Image
          src={product.images[currentImageIndex]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Dot navigation */}
        {product.images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => goTo(e, i)}
                aria-label={`Image ${i + 1}`}
                className={`h-[5px] rounded-full bg-white transition-all duration-200 ${
                  i === currentImageIndex
                    ? "w-3.5 opacity-100"
                    : "w-[5px] opacity-50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="px-4 pt-3.5 pb-4">
        <p className="text-[10px] tracking-[0.12em] uppercase text-neutral-400 mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-medium text-neutral-900 leading-snug mb-2.5 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-amber-400 text-xs tracking-widest">
            {"★".repeat(Math.floor(product.rating))}
            {"☆".repeat(5 - Math.floor(product.rating))}
          </span>
          <span className="text-[11px] text-neutral-400">
            {product.rating} ({product.commentsCount})
          </span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[17px] font-medium text-neutral-900">
              {product.currency}
              {product.price.toFixed(0)}
            </span>
            {product.oldPrice && (
              <span className="text-xs text-neutral-400 line-through">
                {product.currency}
                {product.oldPrice.toFixed(0)}
              </span>
            )}
          </div>

          <button
            aria-label="Add to cart"
            className="w-[30px] h-[30px] rounded-full border border-neutral-200 flex items-center justify-center text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition-all duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 5v14M5 12h14"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
