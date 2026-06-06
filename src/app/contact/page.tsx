"use client";

import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { company } from "@/components/data/nav";

const initial = { name: "", email: "", phone: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(initial);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's start your project."
        subtitle="Tell us about what you want to build. We'll be in touch within 24 hours with next steps."
      />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            <FadeIn>
              <div className="rounded-2xl border border-border bg-background p-6 sm:p-10">
                <h2 className="font-display text-3xl">Send us a message</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Required fields are marked with an asterisk.
                </p>

                {submitted ? (
                  <div className="mt-8 flex items-start gap-3 rounded-xl border-2 border-brand bg-brand/10 p-5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand" />
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        Thanks — message received.
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : null}

                <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Name *"
                      name="name"
                      value={form.name}
                      onChange={(value) => setForm({ ...form, name: value })}
                      required
                    />
                    <Field
                      label="Email *"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={(value) => setForm({ ...form, email: value })}
                      required
                    />
                  </div>
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(value) => setForm({ ...form, phone: value })}
                  />
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(event) =>
                        setForm({ ...form, message: event.target.value })
                      }
                      placeholder="Tell us about your project — type, location, scope, timeline."
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
                    />
                  </div>
                  <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto sm:self-start">
                    Send Message <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </FadeIn>

            <div className="space-y-6">
              <FadeIn delay={0.05}>
                <div className="rounded-2xl border border-border bg-muted p-6 sm:p-8">
                  <h3 className="font-display text-2xl">Get in touch directly.</h3>
                  <ul className="mt-6 space-y-5 text-sm">
                    <ContactRow icon={MapPin} title="Office">
                      {company.address}
                    </ContactRow>
                    <ContactRow icon={Phone} title="Phone" href={`tel:${company.phone}`}>
                      {company.phone}
                    </ContactRow>
                    <ContactRow icon={Mail} title="Email" href={`mailto:${company.email}`}>
                      {company.email}
                    </ContactRow>
                    <ContactRow icon={Clock} title="Hours">
                      {company.hours}
                    </ContactRow>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="overflow-hidden rounded-2xl border border-border">
                  <iframe
                    title="MAA Bhajani Construction office location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7029013257953!2d85.13855967520698!3d25.611111977384403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed580ee7e74f6f%3A0x4059f39a1ac82f9!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000"
                    width="100%"
                    height="320"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  required?: boolean;
  onChange: (value: string) => void;
};

function Field({ label, name, type = "text", value, required, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-12 w-full rounded-lg border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
      />
    </div>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
  href,
}: {
  icon: typeof Phone;
  title: string;
  children: React.ReactNode;
  href?: string;
}) {
  const content = (
    <>
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-brand text-brand-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
          {title}
        </p>
        <p className="mt-1 text-sm text-foreground">{children}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="flex items-start gap-4 transition-opacity hover:opacity-80">
          {content}
        </a>
      </li>
    );
  }
  return <li className="flex items-start gap-4">{content}</li>;
}
