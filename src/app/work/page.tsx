import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Work | Ala Studios",
  description: "Explore our portfolio of cinematic video production, brand films, commercials, and music videos.",
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Header */}
      <section className="pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="mx-auto max-w-[1450px] px-10">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Portfolio
            </span>
            <h1 className="max-w-[800px] font-[family-name:var(--font-manrope)] text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Our <span className="text-[#09f]">work</span>.
            </h1>
            <p className="max-w-[520px] text-[15px] leading-relaxed text-white/80">
              A selection of projects where vision met execution. Each piece
              tells a unique story through cinematic craft.
            </p>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1450px] px-10">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group relative overflow-hidden rounded-2xl"
              >
                {/* Thumbnail */}
                {project.youtubeId ? (
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6 opacity-100 md:translate-y-4 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100 lg:p-8">
                  <div>
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                      {project.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-manrope)] text-xl font-bold md:text-2xl">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-white/60">
                    {project.year}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
