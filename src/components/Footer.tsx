"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { locale, t } = useI18n();

  return (
    <footer className="border-t border-white/5 py-12 md:py-16">
      <div className="mx-auto max-w-[1450px] px-6 md:px-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & Name */}
          <div className="flex items-center">
            <Image
              src="/assets/logo.avif"
              alt="Ala Studios"
              width={160}
              height={56}
              className="h-7 w-auto"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-white/60">
            <a href="/#about" className="transition-colors hover:text-white/80">
              {t.nav.about[locale]}
            </a>
            <a href="/#services" className="transition-colors hover:text-white/80">
              {t.nav.services[locale]}
            </a>
            <a href="/work" className="transition-colors hover:text-white/80">
              {t.nav.work[locale]}
            </a>
            <a href="/#contact" className="transition-colors hover:text-white/80">
              {t.nav.contact[locale]}
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} {t.footer.copyright[locale]}
          </p>
        </div>
      </div>
    </footer>
  );
}
