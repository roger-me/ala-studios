export interface Project {
  slug: string;
  title: string;
  category: string;
  image: string;
  youtubeId?: string;
  description: string;
  client: string;
  year: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "som-la-resistencia",
    title: "Som la resistència",
    category: "Brand Film",
    image: "/assets/hero-image.avif",
    youtubeId: "Yzk7oRw-2CE",
    description:
      "A cinematic brand film produced for CE Europa capturing the spirit, passion, and resilience of the club. Shot on location with a focus on authentic storytelling and emotional connection, this piece brings the identity of the club to life through powerful visuals and narrative.",
    client: "CE Europa",
    year: "2024",
    role: "Full Production",
  },
  {
    slug: "visual-story",
    title: "Visual Story",
    category: "Commercial",
    image: "/assets/hero-image.avif",
    description:
      "A visually driven commercial piece designed to showcase product identity through cinematic composition and color grading. Every frame was crafted to communicate brand values without a single word spoken.",
    client: "Studio Client",
    year: "2024",
    role: "Direction & Edit",
  },
  {
    slug: "live-session",
    title: "Live Session",
    category: "Music Video",
    image: "/assets/hero-image.avif",
    description:
      "An intimate live session captured in a single take, blending raw musical performance with carefully designed lighting and camera movement. The result is an authentic, immersive experience that puts the viewer in the room.",
    client: "Independent Artist",
    year: "2023",
    role: "Cinematography & Edit",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
