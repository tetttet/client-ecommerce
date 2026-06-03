"use client";
import { Categories } from "@/constants/header-links";
import { Category } from "@/types/header-types";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className="relative w-full border-b border-gray-100 bg-white"
      onMouseLeave={() => setActiveCategory(null)}
    >
      {/* Main Header */}
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-12">
        {/* Logo */}
        <div className="cursor-pointer text-2xl font-bold text-black sm:text-3xl">
          Bazaar
        </div>

        {/* Categories */}
        <nav className="hidden items-center gap-10 md:flex">
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
        <div className="flex items-center gap-3 sm:gap-5">
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
          <button className="hidden transition hover:opacity-70 sm:block">
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
          <button className="hidden transition hover:opacity-70 sm:block">
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

          {/* Mobile Menu */}
          <button
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition hover:border-[#ff6200] md:hidden"
          >
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-black transition duration-300 ${
                isMobileMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-black transition duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 rounded-full bg-black transition duration-300 ${
                isMobileMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
              }`}
            />
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

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-black/35 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`ml-auto flex h-full w-[40%] min-w-[260px] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex h-16 items-center justify-between border-b border-gray-100 px-5">
            <span className="text-2xl font-bold text-black">Bazaar</span>

            <button
              aria-label="Close menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200"
            >
              <span className="absolute h-0.5 w-5 rotate-45 rounded-full bg-black" />
              <span className="absolute h-0.5 w-5 -rotate-45 rounded-full bg-black" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6">
            <div className="mb-6 grid grid-cols-2 gap-3">
              {["Search", "Account", "Wishlist", "Cart"].map((item) => (
                <button
                  key={item}
                  className="rounded-md border border-gray-200 px-4 py-3 text-left text-sm font-semibold text-black transition hover:border-[#ff6200] hover:text-[#ff6200]"
                >
                  {item}
                </button>
              ))}
            </div>

            <nav className="space-y-5">
              {Categories.map((category) => (
                <div key={category.id} className="border-b border-gray-100 pb-5">
                  <button className="flex w-full items-center justify-between text-left text-[18px] font-bold uppercase text-black">
                    {category.name}
                    <span className="text-[#ff6200]">+</span>
                  </button>

                  <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                    {category.subcategories.map((subcategory) => (
                      <button
                        key={subcategory}
                        className="text-left text-sm text-gray-600 transition hover:text-black"
                      >
                        {subcategory}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
