import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductGallery } from "@/components/sections/product-gallery";
import { products } from "@/data/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const getProduct = (id: string) => products.find((product) => product.id === id);

const categoryDetails: Record<
  string,
  {
    description: string;
    features: string[];
    specs: string[];
  }
> = {
  Electronics: {
    description:
      "A polished everyday tech pick with a clean look, reliable performance, and the kind of practical details that make it easy to use from day one.",
    features: ["Modern build", "Fast setup", "Daily-ready performance"],
    specs: ["Warranty: 12 months", "Condition: New", "Support: Online help"],
  },
  Accessories: {
    description:
      "Designed to keep daily essentials organized without adding bulk, with a balanced shape that fits work, travel, and casual use.",
    features: ["Lightweight feel", "Organized storage", "Everyday comfort"],
    specs: ["Material: Premium fabric", "Use: Daily carry", "Care: Easy clean"],
  },
  "Home & Kitchen": {
    description:
      "A tasteful home upgrade made for repeat use, combining practical function with a compact design that feels right on the counter.",
    features: ["Compact footprint", "Simple controls", "Home-friendly design"],
    specs: ["Warranty: 12 months", "Use: Indoor", "Care: Wipe clean"],
  },
  Sports: {
    description:
      "Built for active routines with a comfortable feel, dependable finish, and enough versatility for training, travel, or recovery days.",
    features: ["Comfort fit", "Durable finish", "Training-ready design"],
    specs: ["Use: Active lifestyle", "Condition: New", "Care: Low maintenance"],
  },
  "Home & Office": {
    description:
      "A focused workspace essential with a calm visual profile, made to support long sessions without taking over the room.",
    features: ["Desk-friendly size", "Soft visual style", "Practical daily use"],
    specs: ["Use: Office and home", "Warranty: 12 months", "Setup: Quick start"],
  },
};

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return {
      title: "Product not found | bazaar",
    };
  }

  return {
    title: `${product.name} | bazaar`,
    description: `Shop ${product.name} in ${product.category} for ${product.currency}${product.price}.`,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    notFound();
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;
  const details = categoryDetails[product.category] ?? categoryDetails.Accessories;
  const ratingWidth = `${(product.rating / 5) * 100}%`;

  return (
    <main className="bg-[#fbfaf8]">
      <section className="mx-auto max-w-350 px-4 py-8 md:py-12">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
        >
          <span aria-hidden>←</span>
          Back to products
        </Link>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start">
          <ProductGallery
            discount={discount}
            images={product.images}
            productName={product.name}
          />

          <div className="p-0 md:p-2">
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-[#f05a16]">
              {product.category}
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-neutral-950 md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="relative h-4 w-[92px] text-neutral-200">
                <span className="absolute inset-0">★★★★★</span>
                <span
                  className="absolute inset-y-0 left-0 overflow-hidden text-amber-400"
                  style={{ width: ratingWidth }}
                >
                  ★★★★★
                </span>
              </div>
              <span className="text-sm text-neutral-500">
                {product.rating} rating · {product.commentsCount} reviews
              </span>
            </div>

            <p className="mt-6 text-base leading-7 text-neutral-600">
              {details.description}
            </p>

            <div className="mt-7 flex items-end gap-3">
              <span className="text-4xl font-semibold text-neutral-950">
                {product.currency}
                {product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="pb-1 text-lg text-neutral-400 line-through">
                  {product.currency}
                  {product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <button className="rounded-lg bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800">
                Add to cart
              </button>
              <button className="rounded-lg bg-neutral-100 px-5 py-3 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-200">
                Add to favorites
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {details.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-lg bg-[#f2f0ec] px-4 py-3"
                >
                  <p className="text-sm font-medium text-neutral-900">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6">
              <h2 className="text-lg font-semibold text-neutral-950">
                Product details
              </h2>
              <dl className="mt-4 grid gap-3 text-sm text-neutral-600">
                <div className="flex justify-between gap-4">
                  <dt>Category</dt>
                  <dd className="text-right font-medium text-neutral-900">
                    {product.category}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Product code</dt>
                  <dd className="text-right font-medium text-neutral-900">
                    BZ-{product.id.padStart(4, "0")}
                  </dd>
                </div>
                {details.specs.map((spec) => {
                  const [label, value] = spec.split(": ");

                  return (
                    <div key={spec} className="flex justify-between gap-4">
                      <dt>{label}</dt>
                      <dd className="text-right font-medium text-neutral-900">
                        {value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
