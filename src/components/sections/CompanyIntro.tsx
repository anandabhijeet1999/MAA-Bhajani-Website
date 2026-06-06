import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const points = [
  "Licensed civil engineers leading every project",
  "ISO-aligned quality control on materials & finish",
  "Transparent milestone-based billing",
  "Site safety culture audited every fortnight",
];

export function CompanyIntro() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="/images/about.jpg"
                alt="MAA Bhajani team on site"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-brand p-6 text-brand-foreground shadow-xl sm:block lg:-right-8">
              <p className="font-display text-5xl leading-none">16+</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-widest">
                Years of Excellence
              </p>
            </div>
          </FadeIn>

          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A construction partner you can rely on."
              subtitle="MAA Bhajani Construction Private Limited has spent over a decade and a half delivering complex builds across Bihar — combining traditional craftsmanship with modern engineering to create structures that perform for generations."
            />

            <FadeIn delay={0.1}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                    <span className="text-sm text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2} className="mt-10">
              <Button href="/about" size="md">
                Learn More About Us
              </Button>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
