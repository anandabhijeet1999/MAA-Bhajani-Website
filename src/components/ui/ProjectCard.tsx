import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/components/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-muted">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/90 via-[#0b1120]/30 to-transparent opacity-95" />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-foreground">
          {project.category}
        </span>
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <p className="text-xs font-medium uppercase tracking-widest text-zinc-300">
            {project.location} · {project.year}
          </p>
          <h3 className="mt-2 text-2xl font-bold leading-tight">{project.title}</h3>
          <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-zinc-200 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
            {project.summary}
          </p>
        </div>
        <div className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </article>
  );
}
