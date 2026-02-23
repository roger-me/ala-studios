const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your brand, your audience, and your goals. Every great project begins with a clear creative brief and aligned vision.",
  },
  {
    number: "02",
    title: "Concept & Direction",
    description:
      "Our team develops creative concepts, mood boards, and storyboards that bring the vision to life before we ever pick up a camera.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Lights, camera, action. We handle all aspects of production with professional equipment, experienced crew, and meticulous attention to detail.",
  },
  {
    number: "04",
    title: "Post & Delivery",
    description:
      "Color grading, sound design, and editing that polishes your content to perfection. We deliver in all formats needed for your platforms.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="border-t border-white/5 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1450px] px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-6 text-center md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            How We Work
          </span>
          <h2 className="max-w-[600px] font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            A proven process, every{" "}
            <span className="text-[#09f]">time</span>.
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-px md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className="group relative flex flex-col gap-6 border-l border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.02] md:p-10"
            >
              {/* Number */}
              <span className="font-[family-name:var(--font-manrope)] text-5xl font-bold text-white/15 transition-colors duration-300 group-hover:text-[#09f]/30">
                {step.number}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {step.description}
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
