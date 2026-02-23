const services = [
  {
    title: "Brand Films",
    description:
      "Cinematic brand stories that capture your identity and connect emotionally with your audience. We transform your vision into compelling visual narratives.",
    icon: "01",
  },
  {
    title: "Commercial Production",
    description:
      "High-impact commercials crafted for digital and broadcast. From concept development through post-production, we deliver content that converts.",
    icon: "02",
  },
  {
    title: "Music Videos",
    description:
      "Visually striking music videos that amplify your sound. We bring creative direction and cinematic execution to every project.",
    icon: "03",
  },
  {
    title: "Social Content",
    description:
      "Scroll-stopping content designed for modern platforms. Short-form, reels, and campaign assets built for engagement and reach.",
    icon: "04",
  },
  {
    title: "Event Coverage",
    description:
      "Dynamic event documentation that captures the energy and essence of your occasions. From corporate events to live performances.",
    icon: "05",
  },
  {
    title: "Creative Direction",
    description:
      "End-to-end creative strategy and visual identity development. We help define and refine the look and feel of your brand's visual presence.",
    icon: "06",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1450px] px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              What We Do
            </span>
            <h2 className="max-w-[600px] font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Services built for{" "}
              <span className="text-[#09f]">impact</span>.
            </h2>
          </div>
          <p className="max-w-[420px] text-base leading-relaxed text-white/60">
            Every project gets our full creative energy. We tailor our approach
            to match your goals and deliver results that stand out.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] md:p-10"
            >
              <span className="font-[family-name:var(--font-manrope)] text-3xl font-bold text-white/20 transition-colors duration-300 group-hover:text-[#09f]/40">
                {service.icon}
              </span>
              <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/50">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
