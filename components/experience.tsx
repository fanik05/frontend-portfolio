"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Experience"
          title="Where I've worked."
          description="A path from QA and test automation into full frontend systems ownership, across FinTech and B2B platforms."
        />

        <ol className="relative ml-1 space-y-10 border-l border-border">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.org}-${i}`}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -8% 0px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-8"
            >
              <span className="absolute -left-[6.5px] top-2 h-3 w-3 rounded-full border-2 border-background bg-primary" />

              <div className="rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/30 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="font-mono text-xs text-primary">{item.period}</span>
                  <Badge variant="outline" className="text-[0.62rem]">
                    {item.track}
                  </Badge>
                </div>

                <h3 className="mt-3 text-xl font-bold tracking-tight">
                  {item.role} <span className="text-muted-foreground">· {item.org}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {item.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-sm leading-relaxed text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
                  {item.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
