import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} | Ala Studios`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      {/* Back Link */}
      <div className="pt-28 md:pt-36">
        <div className="mx-auto max-w-[1450px] px-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Work
          </Link>
        </div>
      </div>

      {/* Project Header */}
      <section className="pb-8 pt-8 md:pb-12 md:pt-12">
        <div className="mx-auto max-w-[1450px] px-10">
          <div className="flex flex-col gap-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {project.category}
            </span>
            <h1 className="max-w-[800px] font-[family-name:var(--font-manrope)] text-3xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Video or Image */}
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-[1450px] px-10">
          <div className="overflow-hidden rounded-2xl">
            {project.youtubeId ? (
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube.com/embed/${project.youtubeId}?rel=0`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  style={{ border: 0 }}
                />
              </div>
            ) : (
              <Image
                src={project.image}
                alt={project.title}
                width={1400}
                height={788}
                className="aspect-video w-full object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[1450px] px-10">
          <div className="flex flex-col gap-12 md:flex-row md:gap-20">
            {/* Description */}
            <div className="flex-1">
              <h2 className="mb-6 font-[family-name:var(--font-manrope)] text-xl font-bold tracking-tight md:text-2xl">
                About the project
              </h2>
              <p className="max-w-[640px] text-[15px] leading-relaxed text-white/80">
                {project.description}
              </p>
            </div>

            {/* Metadata */}
            <div className="flex shrink-0 flex-col gap-6 md:w-[240px]">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  Client
                </span>
                <p className="mt-1.5 text-sm text-white/80">{project.client}</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  Year
                </span>
                <p className="mt-1.5 text-sm text-white/80">{project.year}</p>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
                  Role
                </span>
                <p className="mt-1.5 text-sm text-white/80">{project.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="border-t border-white/5 py-16 md:py-20">
        <div className="mx-auto max-w-[1450px] px-10">
          <h2 className="mb-10 text-center font-[family-name:var(--font-manrope)] text-xl font-bold tracking-tight md:text-2xl">
            Other projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((p) => p.slug !== project.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  {p.youtubeId ? (
                    <Image
                      src={`https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`}
                      alt={p.title}
                      width={700}
                      height={400}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={p.image}
                      alt={p.title}
                      width={700}
                      height={400}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 p-6 opacity-100 md:translate-y-4 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
                      {p.category}
                    </span>
                    <h3 className="font-[family-name:var(--font-manrope)] text-lg font-bold">
                      {p.title}
                    </h3>
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
