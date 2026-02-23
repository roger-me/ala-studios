"use client";

import { useI18n } from "@/lib/i18n";

const numbers = ["01", "02", "03", "04"];

export default function Process() {
  const { locale, t } = useI18n();

  return (
    <section
      id="process"
      className="border-t border-white/5 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1450px] px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-6 text-center md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t.process.label[locale]}
          </span>
          <h2 className="max-w-[600px] font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {t.process.heading1[locale]}
            <span className="text-[#09f]">{t.process.headingAccent[locale]}</span>.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col gap-6 border-l border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.02] md:p-10"
            >
              {/* Number */}
              <span className="font-[family-name:var(--font-manrope)] text-5xl font-bold text-white/30 transition-colors duration-300 group-hover:text-[#09f]/50">
                {numbers[i]}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold tracking-tight">
                  {step.title[locale]}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description[locale]}
                </p>
              </div>

              {/* Top accent line on hover */}
              <div className="absolute left-0 top-0 h-0.5 w-0 bg-[#09f] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
