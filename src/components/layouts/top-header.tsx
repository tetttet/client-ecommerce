import { NAVIGATION_LINKS } from "@/constants/header-links";
import React from "react";

const TopHeader: React.FC = () => {
  return (
    <div className="flex justify-end items-center py-2 px-5 gap-6">
      {NAVIGATION_LINKS.map(({ id, label, href, icon }) => (
        <a
          key={id}
          href={href}
          className="text-[12px] text-gray-700 hover:text-black transition-colors flex items-center gap-1 font-sans no-underline"
        >
          {icon && icon}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};

export default TopHeader;
