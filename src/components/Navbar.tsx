"use client";

import { useState } from "react";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

  const navLinks = [
    { label: t.nav.about[locale], href: "/#about" },
    { label: t.nav.services[locale], href: "/#services" },
    { label: t.nav.work[locale], href: "/work" },
    { label: t.nav.process[locale], href: "/#process" },
    { label: t.nav.contact[locale], href: "/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <nav className="mx-auto flex max-w-[1450px] items-center justify-between px-10 py-5">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/assets/logo.avif"
            alt="Ala Studios"
            width={200}
            height={70}
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Lang toggle + CTA */}
        <div className="hidden items-center gap-4 md:flex">
          <button
            onClick={() => setLocale(locale === "es" ? "en" : "es")}
            className="rounded-md border border-white/10 px-5 py-2 text-[13px] font-medium uppercase tracking-wider text-white/60 transition-colors duration-300 hover:border-white/20 hover:text-white"
          >
            {locale === "es" ? "EN" : "ES"}
          </button>
          <a
            href="/#contact"
            className="rounded-md bg-white px-5 py-2 text-[13px] font-medium text-black transition-colors duration-300 hover:bg-white/90"
          >
            {t.nav.cta[locale]}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/5 bg-black/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-white/70 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={() => {
                  setLocale(locale === "es" ? "en" : "es");
                  setMenuOpen(false);
                }}
                className="rounded-md border border-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white/60"
              >
                {locale === "es" ? "English" : "Espanol"}
              </button>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-md bg-white px-6 py-2.5 text-sm font-medium text-black"
              >
                {t.nav.cta[locale]}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
