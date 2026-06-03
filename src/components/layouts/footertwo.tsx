import React from "react";

const footerSections = [
  {
    title: "Trendyol",
    links: [
      "Who we are",
      "Careers",
      "Contact us",
      "Security at Trendyol",
      "Product recalls",
    ],
  },
  {
    title: "Campaigns",
    links: [
      "Campaigns",
      "Shopping loans",
      "Elite membership",
      "Gift ideas",
    ],
  },
  {
    title: "Sellers",
    links: [
      "Sell on Trendyol",
      "Basic concepts",
      "Trendyol Academy",
    ],
  },
  {
    title: "Help",
    links: [
      "Frequently asked questions",
      "Live support",
      "How to return products",
      "Quick guide",
    ],
  },
];

const bottomLinks = [
  "Cookie preferences",
  "Terms of Use",
  "DSM Group",
  "Personal data protection",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="black"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" stroke="black" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="black" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 3v10.5a3.5 3.5 0 1 1-3.5-3.5h1V7h-1A6.5 6.5 0 1 0 17 13.5V8.3c1.2.9 2.7 1.4 4 1.5V6.7c-2-.2-4-1.8-4.8-3.7H14z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23 12s0-3.4-.4-5c-.2-.9-.9-1.6-1.8-1.8C19.2 5 12 5 12 5s-7.2 0-8.8.2c-.9.2-1.6.9-1.8 1.8C1 8.6 1 12 1 12s0 3.4.4 5c.2.9.9 1.6 1.8 1.8C4.8 19 12 19 12 19s7.2 0 8.8-.2c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-5 .4-5z" />
        <path d="M10 15.5L16 12L10 8.5V15.5Z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 3H22l-6.8 7.7L23 21h-6.3l-5-6.2L6.2 21H3l7.3-8.3L1 3h6.4l4.5 5.7L18.9 3z" />
      </svg>
    ),
  },
];

const FooterTwo = () => {
  return (
    <footer className="mt-12 sm:mt-20">
      {/* TOP */}
      <div className="bg-[#f2f2f2]">
        <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 sm:py-14">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-[20px] font-bold text-[#333] sm:mb-6 sm:text-[28px]">
                  {section.title}
                </h3>

                <ul className="space-y-2 sm:space-y-4">
                  {section.links.map((link) => (
                    <li
                      key={link}
                      className="cursor-pointer text-[14px] text-[#555] transition hover:text-black sm:text-[18px]"
                    >
                      {link}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Country */}
            <div>
              <h3 className="mb-4 text-[20px] font-bold text-[#333] sm:mb-6 sm:text-[28px]">
                Change country
              </h3>

              <button className="flex w-full items-center gap-3 rounded-md border border-gray-300 bg-white px-4 py-3 text-[14px] font-medium sm:text-[16px]">
                <span className="text-xl">🇹🇷</span>

                <span>Select country</span>

                <svg
                  className="ml-auto"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="mt-8 sm:mt-12">
                <h4 className="mb-3 text-[18px] font-semibold text-[#333] sm:text-xl">
                  Secure shopping
                </h4>

                <p className="text-sm text-gray-500">
                  Payment providers will be added later
                </p>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 text-xl font-semibold text-[#333]">
                  Security certificate
                </h4>

                <p className="text-sm text-gray-500">
                  Certificates will be added later
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="bg-[#171717]">
        <div className="mx-auto max-w-[1400px] px-5 py-7 sm:px-8 sm:py-10">
          <div className="flex items-center gap-3 sm:gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white transition hover:scale-105 sm:h-12 sm:w-12"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
            <p className="text-[12px] text-gray-400 sm:text-sm">
              ©2026 DSM Group Danışmanlık İletişim ve Satış Tic. A.Ş. All rights
              reserved.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              {bottomLinks.map((link) => (
                <span
                  key={link}
                  className="cursor-pointer text-[14px] text-gray-400 transition hover:text-white"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
