import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { profile, socials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";

const socialIcon: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden border-t border-border py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[560px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[140px]"
        style={{ background: "hsl(var(--primary))" }}
      />

      <div className="container relative text-center">
        <Reveal>
          <p className="font-mono text-sm text-primary">{"// what's next"}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.4rem,6.5vw,4.6rem)] font-extrabold leading-[1.0] tracking-tight">
            Let&apos;s build something <span className="text-gradient">great</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
            I&apos;m open to frontend and full-stack roles. Have a project or a position in mind?
            My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col items-center gap-6">
            <Button asChild size="lg" className="group">
              <a href={`mailto:${profile.email}`}>
                Say hello
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <div className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = socialIcon[s.label] ?? Mail;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={s.label}
                    className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <span className="text-sm font-semibold">Fatin Noor Anik</span>
          <span className="font-mono text-xs text-muted-foreground">
            Designed &amp; built with Next.js · Tailwind · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
