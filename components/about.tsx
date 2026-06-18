"use client";

import { about, quickFacts } from "@/lib/data";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading index="02" eyebrow="About" title="A bit about me." />

        <div className="grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          {/* Bio */}
          <Reveal className="space-y-5">
            {about.map((para, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </Reveal>

          {/* Quick facts card */}
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl border border-border p-6">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Quick facts
              </p>
              <dl className="divide-y divide-border">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between gap-4 py-3">
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="text-right text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
