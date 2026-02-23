export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover grayscale-[30%]"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay absolute inset-0 z-[1]" />

      {/* Content */}
      <div className="relative z-[2] mx-auto w-full max-w-[1450px] px-10 pb-28 pt-48 md:pb-36 md:pt-[200px]">
        <div className="flex max-w-[690px] flex-col gap-10">
          <h1 className="animate-fade-in-up font-[family-name:var(--font-manrope)] text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            We craft stories
            <br />
            that{" "}
            <span className="text-[#09f]">move</span> people.
          </h1>

          <p className="animate-fade-in-up animate-delay-1 max-w-[480px] text-[15px] leading-relaxed text-white/80">
            Ala Studios is a creative video production studio specializing in
            cinematic storytelling, brand films, and visual content that connects
            with audiences.
          </p>

          <div className="animate-fade-in-up animate-delay-2 flex items-center gap-3">
            <a
              href="#showcase"
              className="rounded-md bg-white px-6 py-2.5 text-[13px] font-medium text-black transition-colors duration-300 hover:bg-white/90"
            >
              View Our Work
            </a>
            <a
              href="#about"
              className="rounded-md border border-white/15 px-6 py-2.5 text-[13px] font-medium text-white transition-colors duration-300 hover:bg-white/5"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
