import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { company } from "@/components/data/nav";

export function ContactCTA() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-surface-dark p-10 text-white sm:p-14 lg:p-20">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand/35 blur-3xl" />
            <div className="absolute -left-16 -bottom-24 h-72 w-72 rounded-full bg-brand/15 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand">
                  Ready to build?
                </span>
                <h2 className="font-display mt-3 text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Let&apos;s talk about your next project.
                </h2>
                <p className="mt-5 max-w-xl text-base text-zinc-300 sm:text-lg">
                  Share your brief and we&apos;ll come back within 24 hours with a
                  feasibility note and indicative budget.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Button href="/contact" size="lg" className="w-full">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={`tel:${company.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-white/30 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                >
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
