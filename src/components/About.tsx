"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { locale, t } = useI18n();

  const stats = [
    { value: "50+", label: t.about.stats.projects[locale] },
    { value: "30+", label: t.about.stats.clients[locale] },
    { value: "5+", label: t.about.stats.years[locale] },
    { value: "100%", label: t.about.stats.passion[locale] },
  ];

  return (
    <section
      id="about"
      className="border-t border-white/5 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1450px] px-10">
        <div className="flex flex-col items-center gap-12 text-center md:gap-20">
          {/* Section Label */}
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t.about.label[locale]}
          </span>

          {/* Main Heading */}
          <h2 className="max-w-[930px] font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {t.about.heading1[locale]}
            <span className="text-[#09f]">{t.about.headingAccent[locale]}</span>
            {t.about.heading2[locale]}
          </h2>

          {/* Description */}
          <p className="max-w-[680px] text-base leading-relaxed text-white/80 md:text-lg">
            {t.about.description[locale]}
          </p>

          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-2xl">
            <Image
              src="/assets/hero-image.avif"
              alt="Ala Studios creative work"
              width={1400}
              height={600}
              className="h-[300px] w-full object-cover md:h-[500px] lg:h-[600px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Stats */}
          <div className="grid w-full max-w-[800px] grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="font-[family-name:var(--font-manrope)] text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </span>
                <span className="text-sm text-white/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
