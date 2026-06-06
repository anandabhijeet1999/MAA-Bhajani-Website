import Image from "next/image";
import { Target, Eye, Award, Users, Building, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata = {
  title: "About — MAA Bhajani Construction",
  description:
    "Learn about MAA Bhajani Construction's 16+ year journey, our team, and the values driving every project we deliver.",
};

const values = [
  {
    icon: Award,
    title: "Quality First",
    body: "Every material, every weld, every finish is checked against published standards before sign-off.",
  },
  {
    icon: ShieldCheck,
    title: "Site Safety",
    body: "Audited safety systems, certified equipment, and zero-tolerance protocols keep our crews protected.",
  },
  {
    icon: Building,
    title: "On-Time Delivery",
    body: "Milestone tracking, weekly client reviews, and contingency planning keep timelines honest.",
  },
  {
    icon: Users,
    title: "Skilled Crews",
    body: "A core team of engineers, supervisors, and tradespeople who've worked together for years.",
  },
];

const team = [
  { name: "Rajesh Bhajani", role: "Managing Director", initials: "RB" },
  { name: "Priya Bhajani", role: "Director of Operations", initials: "PB" },
  { name: "Amit Singh", role: "Chief Engineer", initials: "AS" },
  { name: "Neha Kumari", role: "Project Manager", initials: "NK" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Sixteen years of building Bihar."
        subtitle="MAA Bhajani Construction Private Limited has grown from a small civil-works outfit into one of the region's most trusted full-service construction firms."
      />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/about.jpg"
                  alt="On site"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="Founded on craftsmanship. Scaled on trust."
                subtitle="What began in 2008 as a civil-works partnership has grown into a 120+ person operation delivering complex residential, commercial, and industrial builds across Bihar and beyond. Through every phase of growth, the founding principle has stayed the same: build what we&apos;d be proud to live or work in ourselves."
              />
              <FadeIn delay={0.1}>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Today, the company brings together licensed civil engineers, MEP
                  specialists, finishing crews, and a dedicated quality team — operating
                  as a single unit so clients have one accountable point of contact from
                  groundbreaking to handover.
                </p>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-2xl border border-border bg-background p-10">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-brand-foreground">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-6 text-3xl">Our Mission</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To deliver construction projects that exceed expectations on quality,
                  safety, and schedule — building lasting value for clients, communities,
                  and the people who work with us.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="h-full rounded-2xl border border-border bg-background p-10">
                <div className="grid h-12 w-12 place-items-center rounded-lg bg-brand text-brand-foreground">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-display mt-6 text-3xl">Our Vision</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To be the most trusted construction partner in eastern India — known
                  for engineering excellence, ethical practice, and an obsession with
                  honoring our commitments.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title="The values behind every build."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.05}>
                <div className="h-full rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-xl">
                  <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-5 text-lg font-bold">{value.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Leadership"
            title="The people running the show."
            subtitle="Our leadership combines decades of on-site execution with modern project management — and they&apos;re still the people you&apos;ll meet on project day one."
            align="center"
          />
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.05}>
                <div className="text-center">
                  <div className="mx-auto grid aspect-square max-w-[180px] place-items-center rounded-2xl bg-gradient-to-br from-brand to-amber-700 text-brand-foreground">
                    <span className="font-display text-5xl">{member.initials}</span>
                  </div>
                  <p className="mt-4 text-base font-bold text-foreground">{member.name}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
