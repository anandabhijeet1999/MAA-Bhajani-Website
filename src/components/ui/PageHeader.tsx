import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "./Container";
import { FadeIn } from "./FadeIn";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-surface-dark text-white">
      <div className="absolute -right-24 -top-24 -z-0 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />
      <div className="absolute -left-32 bottom-0 -z-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />

      <Container className="relative z-10 py-20 sm:py-28">
        <FadeIn>
          <nav className="flex items-center gap-1 text-xs uppercase tracking-widest text-zinc-400">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-brand">{eyebrow ?? title}</span>
          </nav>
          <h1 className="font-display mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-5 max-w-2xl text-base text-zinc-300 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </FadeIn>
      </Container>
    </section>
  );
}
