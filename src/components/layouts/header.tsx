"use client";
import { Categories } from "@/constants/header-links";
import { Category } from "@/types/header-types";
import React, { useState } from "react";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  return (
    <header
      className="relative w-full border-b border-gray-100 bg-white"
      onMouseLeave={() => setActiveCategory(null)}
    >
      {/* Main Header */}
      <div className="mx-auto flex h-16 items-center justify-between px-12">
        {/* Logo */}
        <div className="cursor-pointer text-3xl font-bold text-black">
          Bazaar
        </div>

        {/* Categories */}
        <nav className="flex items-center gap-10">
          {Categories.map((category) => (
            <button
              key={category.id}
              onMouseEnter={() => setActiveCategory(category)}
              className="relative uppercase text-[16px] font-bold text-black transition hover:text-[#ff6200]"
            >
              {category.name}
            </button>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Search */}
          <button className="transition hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          {/* Account */}
          <button className="transition hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21a8 8 0 0 0-16 0" />
              <circle cx="12" cy="8" r="4" />
            </svg>
          </button>

          {/* Wishlist */}
          <button className="transition hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19.5 13.572 12 21l-7.5-7.428a5 5 0 1 1 7.071-7.072L12 6.93l.429-.43a5 5 0 1 1 7.071 7.072Z" />
            </svg>
          </button>

          {/* Cart */}
          <button className="transition hover:opacity-70">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M3 4h2l2.6 10.39a1 1 0 0 0 .97.76h9.72a1 1 0 0 0 .97-.76L21 8H7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mega Menu */}
      {activeCategory && (
        <div
          className="absolute left-0 top-full z-50 w-full border-t border-gray-200 bg-white shadow-lg"
          onMouseEnter={() => setActiveCategory(activeCategory)}
        >
          <div className="mx-auto max-w-7xl px-8 py-8">
            <h3 className="mb-6 text-xl font-semibold">
              {activeCategory.name}
            </h3>

            <div className="grid grid-cols-4 gap-6">
              {activeCategory.subcategories.map((subcategory) => (
                <button
                  key={subcategory}
                  className="text-left text-gray-600 transition hover:text-black"
                >
                  {subcategory}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
