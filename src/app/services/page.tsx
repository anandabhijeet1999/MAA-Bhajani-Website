import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/components/data/services";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = {
  title: "Services — MAA Bhajani Construction",
  description:
    "Residential, commercial, civil, renovation, interior fit-out, and project consulting — full-service construction from MAA Bhajani.",
};

const process = [
  {
    step: "01",
    title: "Consult",
    body: "We sit down with you to understand the project, the constraints, and the outcome you're after.",
  },
  {
    step: "02",
    title: "Plan & Estimate",
    body: "Detailed scope, materials specification, transparent estimate, and a realistic timeline.",
  },
  {
    step: "03",
    title: "Build",
    body: "Site execution with weekly client reviews, milestone billing, and audited quality checks.",
  },
  {
    step: "04",
    title: "Handover",
    body: "Snag-list closure, documentation, warranties, and post-handover support for every project.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-service construction, end to end."
        subtitle="One team, one accountable point of contact — from feasibility through finishing."
      />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="How We Work"
            title="A clear, four-step process."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, index) => (
              <FadeIn key={p.step} delay={index * 0.05}>
                <div className="relative h-full rounded-2xl border border-border bg-background p-8">
                  <span className="font-display absolute right-6 top-6 text-5xl text-brand/20">
                    {p.step}
                  </span>
                  <div className="h-1 w-10 bg-brand" />
                  <h4 className="mt-5 text-xl font-bold">{p.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-14 text-center">
            <Button href="/contact" size="lg">
              Discuss Your Project <ArrowRight className="h-4 w-4" />
            </Button>
          </FadeIn>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
