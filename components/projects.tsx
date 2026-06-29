"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Github } from "lucide-react";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Projects"
          title="Things I've built."
          description="Full-stack side projects where I own the whole system — from data pipeline and API to the interface."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 transition-colors hover:border-primary/30"
            >
              <a
                href={project.demo ?? project.repo}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name}`}
                className="relative block aspect-[16/10] overflow-hidden border-b border-border bg-secondary/30"
              >
                <Image
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </a>

              <div className="flex flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{project.name}</h3>
                  <p className="mt-1 font-mono text-xs text-primary">{project.tagline}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.name} source on GitHub`}
                    className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    <Github className="size-4" />
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.name} live demo`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

              <ul className="mt-5 space-y-2.5">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-4">
                {project.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
