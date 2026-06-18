import { marqueeStack, skillGroups } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Marquee } from "@/components/motion/marquee";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-24 py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Toolkit"
          title="Technologies I work with."
          description="Deep in the React / TypeScript ecosystem, comfortable across the full delivery pipeline — from component architecture to Dockerized deploys."
        />
      </div>

      {/* Tech marquee */}
      <Reveal className="my-6">
        <Marquee duration={28} className="py-3">
          {marqueeStack.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-5 text-xl font-semibold text-muted-foreground/70 sm:text-2xl"
            >
              {tech}
              <span className="text-sm text-primary/50">●</span>
            </span>
          ))}
        </Marquee>
      </Reveal>

      <div className="container mt-10">
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <StaggerItem
              key={group.label}
              className="ring-hover rounded-2xl border border-border bg-card p-7"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                {group.label}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
