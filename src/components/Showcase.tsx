import Image from "next/image";

const projects = [
  {
    title: "Brand Campaign",
    category: "Brand Film",
    image: "/assets/hero-image.avif",
  },
  {
    title: "Visual Story",
    category: "Commercial",
    image: "/assets/hero-image.avif",
  },
  {
    title: "Live Session",
    category: "Music Video",
    image: "/assets/hero-image.avif",
  },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      className="border-t border-white/5 py-20 md:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1450px] px-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-6 text-center md:mb-24">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
            Selected Work
          </span>
          <h2 className="max-w-[700px] font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Projects that speak for{" "}
            <span className="text-[#09f]">themselves</span>.
          </h2>
        </div>

        {/* Featured Video */}
        <div className="mb-12 overflow-hidden rounded-2xl md:mb-16">
          <div className="relative aspect-video w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            >
              <source src="/assets/hero-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                Featured
              </span>
              <h3 className="font-[family-name:var(--font-manrope)] text-2xl font-bold md:text-3xl">
                Ala Studios Reel
              </h3>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 opacity-100 md:translate-y-4 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
                  {project.category}
                </span>
                <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
