import { Hero } from "@/components/sections/Hero";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CompanyIntro />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
