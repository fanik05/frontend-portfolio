"use client";

import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <Reveal>
        <div className="flex items-center gap-3">
          <span className="font-mono text-sm text-primary">{index}.</span>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {eyebrow}
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 text-[clamp(2rem,5vw,3.2rem)] font-extrabold leading-[1.05] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
