"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { projects, projectCategories } from "@/components/data/projects";

export default function ProjectsPage() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Work that speaks for itself."
        subtitle="A selection of recent residential, commercial, industrial, and interior projects."
      />

      <section className="bg-background py-20 sm:py-28">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            {projectCategories.map((category) => {
              const isActive = active === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all ${
                    isActive
                      ? "border-brand bg-brand text-brand-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                </button>
              );
            })}
            <span className="ml-auto text-xs uppercase tracking-widest text-muted-foreground">
              {filtered.length} project{filtered.length === 1 ? "" : "s"}
            </span>
          </div>

          <motion.div layout className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 ? (
            <p className="mt-16 text-center text-muted-foreground">
              No projects in this category yet.
            </p>
          ) : null}
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}
