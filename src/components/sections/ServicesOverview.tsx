import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { services } from "@/components/data/services";
import { ArrowRight } from "lucide-react";

export function ServicesOverview() {
  return (
    <section className="bg-muted py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Services built around your project."
            subtitle="A full-stack construction practice — from feasibility and civil works through to interior fit-out and post-handover support."
          />
          <FadeIn>
            <Button href="/services" variant="secondary">
              All Services <ArrowRight className="h-4 w-4" />
            </Button>
          </FadeIn>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}
