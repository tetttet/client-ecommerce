"use client";

import React from "react";
import { ProductCard } from "./product-card";
import { products } from "@/data/products";

export const ProductTable: React.FC = () => {
  return (
    <section className="py-12 px-4">
      <div className="max-w-350 mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600">
            Discover our best deals and trending items
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
