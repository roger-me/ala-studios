"use client";

import { useI18n } from "@/lib/i18n";

const icons = ["01", "02", "03", "04", "05", "06"];

export default function Services() {
  const { locale, t } = useI18n();

  return (
    <section
      id="services"
      className="border-t border-white/5 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1450px] px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {t.services.label[locale]}
            </span>
            <h2 className="max-w-[600px] font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              {t.services.heading1[locale]}
              <span className="text-[#09f]">{t.services.headingAccent[locale]}</span>.
            </h2>
          </div>
          <p className="max-w-[420px] text-base leading-relaxed text-white/80">
            {t.services.description[locale]}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className="group flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] md:p-10"
            >
              <span className="font-[family-name:var(--font-manrope)] text-3xl font-bold text-white/40 transition-colors duration-300 group-hover:text-[#09f]/60">
                {icons[i]}
              </span>
              <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold tracking-tight">
                {service.title[locale]}
              </h3>
              <p className="text-sm leading-relaxed text-white/70">
                {service.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
