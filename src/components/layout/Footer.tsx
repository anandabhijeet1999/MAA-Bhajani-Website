import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { navLinks, company } from "@/components/data/nav";
import { services } from "@/components/data/services";
import { Container } from "@/components/ui/Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-surface-dark text-zinc-300">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label={company.name} className="flex items-center gap-3">
              <span className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/logo.png"
                  alt={`${company.name} logo`}
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </span>
              <span className="font-display text-lg text-white">{company.short}</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed">
              {company.name} delivers residential, commercial, and industrial projects
              with precision engineering and an obsession for on-time handover.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                aria-label="Facebook"
                href={company.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-zinc-200 transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                aria-label="Instagram"
                href={company.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-zinc-200 transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                aria-label="LinkedIn"
                href={company.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-zinc-200 transition-colors hover:border-brand hover:bg-brand hover:text-brand-foreground"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href="/services" className="transition-colors hover:text-brand">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                <span>{company.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand" />
                <a href={`tel:${company.phone}`} className="hover:text-brand">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-brand" />
                <a href={`mailto:${company.email}`} className="hover:text-brand">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-zinc-400 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {company.name} Pvt. Ltd. All rights reserved.
          </p>
          <p>{company.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
