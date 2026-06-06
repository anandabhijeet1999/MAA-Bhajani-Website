import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { testimonials } from "@/components/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Client Voices"
          title="What our clients say."
          subtitle="Long-term partnerships are built on consistent delivery. Here's what working with us looks like."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <FadeIn key={t.author} delay={index * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-shadow hover:shadow-xl">
                <Quote className="h-8 w-8 text-brand" strokeWidth={2} />
                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-bold text-foreground">{t.author}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
