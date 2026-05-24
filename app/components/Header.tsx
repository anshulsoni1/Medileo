"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "PRODUCTS", href: "/products" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-(--color-navy-deep) text-(--color-surface-white) py-2 px-6 w-full">
        <div
          className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center"
          style={{
            fontFamily: "var(--font-jakarta)",
            fontSize: "12px",
            fontWeight: "700",
            letterSpacing: "0.1em",
          }}
        >
          <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
            <span aria-hidden="true">✉</span>
            <a
              href="mailto:medileohealthcare@gmail.com"
              className="hover:underline"
            >
              medileohealthcare@gmail.com
            </a>
          </div>
          <div className="hidden sm:block font-bold tracking-[0.2em] mt-1 sm:mt-0">
            MEDILEO HEALTHCARE PVT. LTD.
          </div>
          <div className="bg-(--color-status-success) text-white px-3 py-1 rounded mt-2 sm:mt-0 font-bold pulse-badge">
            WHO-GMP CERTIFIED
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-(--color-surface-white)/90 backdrop-blur-[12px] sticky top-0 z-[1000] border-b border-(--color-outline-variant)/15 shadow-sm transition-all duration-300 ease-in-out">
        <div className="max-w-[1280px] mx-auto flex justify-between items-center px-6 py-4 min-h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Medileo Healthcare Home"
          >
            <div className="w-10 h-10 bg-(--color-navy-deep) rounded-lg flex items-center justify-center text-white group-hover:bg-(--color-secondary) transition-colors duration-300">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M10.5 2.25a7.5 7.5 0 0 0-7.5 7.5c0 5.625 7.5 12 7.5 12s7.5-6.375 7.5-12a7.5 7.5 0 0 0-7.5-7.5Zm0 10.5a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
              </svg>
            </div>
            <span
              className="font-bold tracking-tight text-(--color-navy-deep)"
              style={{ fontFamily: "var(--font-manrope)", fontSize: "24px" }}
            >
              MEDILEO
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-[var(--space-4)] nav-link-underline transition-colors duration-200 ${
                    isActive
                      ? "text-(--color-secondary) border-b-2 border-(--color-secondary) pb-0.5"
                      : "text-(--color-on-surface-variant) hover:text-(--color-secondary)"
                  }`}
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-(--color-on-surface) p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav
            className="md:hidden bg-(--color-surface-white) border-t border-(--color-outline-variant) px-6 py-4 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {navLinks.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 transition-colors duration-200 ${
                    isActive
                      ? "text-(--color-secondary) font-semibold"
                      : "text-(--color-on-surface-variant)"
                  }`}
                  style={{
                    fontFamily: "var(--font-jakarta)",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        )}
      </header>
    </>
  );
}
