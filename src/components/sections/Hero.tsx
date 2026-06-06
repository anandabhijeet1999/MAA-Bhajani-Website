import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-surface-dark text-white">
      <Image
        src="/images/hero.jpg"
        alt="Construction site at dusk"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover opacity-60"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1120] via-[#0b1120]/85 to-[#0b1120]/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent" />
      <div className="pointer-events-none absolute right-[-10%] top-[-10%] -z-10 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[120px]" />

      <Container className="py-24 sm:py-28 lg:py-36">
        <FadeIn className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-zinc-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand" />
            Trusted Since 2008
          </span>

          <h1 className="font-display mt-6 text-5xl leading-[0.95] sm:text-7xl lg:text-[88px]">
            Building <span className="text-brand">Tomorrow</span>,
            <br className="hidden sm:block" /> Today.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            From precision-engineered residential towers to large-scale industrial
            developments — we deliver projects that stand the test of time, on schedule
            and on budget.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
            <Button href="/projects" size="lg">
              View Our Work <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" size="lg" variant="secondary" className="border-white text-white hover:bg-white hover:text-black">
              <PlayCircle className="h-4 w-4" /> Start a Project
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-16 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:mt-20 sm:grid-cols-4">
          {[
            { value: "180+", label: "Projects Delivered" },
            { value: "16", label: "Years of Experience" },
            { value: "95%", label: "On-Time Handover" },
            { value: "24/7", label: "Site Safety Cover" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl text-brand sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </FadeIn>
      </Container>
    </section>
  );
}
