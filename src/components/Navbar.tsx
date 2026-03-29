// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Case Studies", href: "#cases" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm py-3"
            : "bg-white/0 border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <LogoIcon />
            <span
              className="font-[family-name:var(--font-heading)] text-xl font-800 text-navy-900"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Scale<span className="text-blue-500">Upward</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy-800 transition-colors no-underline"
              style={{ backgroundColor: "var(--color-navy-900)" }}
            >
              Get Started
              <ArrowRight />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 px-6 md:hidden">
          <ul className="list-none flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg font-semibold text-neutral-800 py-3 border-b border-neutral-100 no-underline"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-8 w-full flex items-center justify-center gap-2 bg-navy-900 text-white text-sm font-semibold px-5 py-4 rounded-xl no-underline"
            style={{ backgroundColor: "var(--color-navy-900)" }}
          >
            Get Started →
          </a>
        </div>
      )}
    </>
  );
}

function LogoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="20" width="8" height="14" rx="2" fill="var(--color-navy-900)" />
      <rect x="14" y="14" width="8" height="20" rx="2" fill="var(--color-navy-900)" />
      <rect x="26" y="6" width="8" height="28" rx="2" fill="var(--color-navy-900)" />
      <path d="M6 18 L18 10 L30 4" stroke="var(--color-blue-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 4 L30 4 L30 7" stroke="var(--color-blue-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7h10M7 2l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
