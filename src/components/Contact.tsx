"use client";

import { useI18n } from "@/lib/i18n";

export default function Contact() {
  const { locale, t } = useI18n();

  return (
    <section
      id="contact"
      className="border-t border-white/5 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1450px] px-10">
        <div className="flex flex-col items-center gap-8 text-center md:gap-10">
          {/* Label */}
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t.contact.label[locale]}
          </span>

          {/* Heading */}
          <h2 className="max-w-[800px] font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t.contact.heading1[locale]}
            <span className="text-[#09f]">{t.contact.headingAccent[locale]}</span>?
          </h2>

          {/* Description */}
          <p className="max-w-[560px] text-[15px] leading-relaxed text-white/80">
            {t.contact.description[locale]}
          </p>

          {/* CTA Button */}
          <a
            href="mailto:hello@alastudios.com"
            className="rounded-md bg-white px-8 py-3 text-[13px] font-medium text-black transition-colors duration-300 hover:bg-white/90"
          >
            {t.contact.cta[locale]}
          </a>

          {/* Contact Info */}
          <div className="mt-4 flex flex-col gap-4 text-sm text-white/60 md:flex-row md:gap-12">
            <a
              href="mailto:hello@alastudios.com"
              className="transition-colors hover:text-white/90"
            >
              hello@alastudios.com
            </a>
            <span className="hidden md:block">|</span>
            <a
              href="https://instagram.com/alastudios"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white/90"
            >
              @alastudios
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
