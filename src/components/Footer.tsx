import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 md:py-16">
      <div className="mx-auto max-w-[1450px] px-6 md:px-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="/assets/logo.avif"
              alt="Ala Studios"
              width={28}
              height={28}
              className="h-7 w-auto"
            />
            <span className="font-[family-name:var(--font-manrope)] text-sm font-semibold tracking-tight">
              Ala Studios
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-white/40">
            <a href="#about" className="transition-colors hover:text-white/70">
              About
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-white/70"
            >
              Services
            </a>
            <a
              href="#showcase"
              className="transition-colors hover:text-white/70"
            >
              Work
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-white/70"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Ala Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
