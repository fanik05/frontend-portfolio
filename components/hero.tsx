"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState, type ComponentType } from "react";
import { profile, socials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { HeroBackground } from "@/components/hero-background";
import { WordReveal } from "@/components/motion/word-reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

const socialIcon: Record<string, ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
};

function RoleRotator({ roles }: { roles: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-flex h-[1.25em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-70%", opacity: 0 }}
          transition={{ duration: 0.45, ease: EASE }}
          className="text-gradient whitespace-nowrap"
        >
          {roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <HeroBackground />
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -right-24 top-10 h-[440px] w-[440px] rounded-full opacity-[0.22] blur-[130px]"
        style={{ background: "hsl(var(--primary))" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full opacity-[0.12] blur-[130px]"
        style={{ background: "hsl(var(--violet))" }}
      />

      <div className="container relative flex min-h-[100svh] flex-col justify-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[0.72rem] text-muted-foreground">{profile.available}</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-4 font-mono text-sm text-primary"
        >
          {"// hi, my name is"}
        </motion.p>

        <h1 className="max-w-4xl text-[clamp(2.6rem,8vw,5.6rem)] font-extrabold leading-[0.98] tracking-tight">
          <WordReveal text="Fatin Noor Anik" className="block" delay={0.18} />
        </h1>
        <p className="mt-3 text-[clamp(1.6rem,4.5vw,3rem)] font-bold leading-tight tracking-tight text-muted-foreground">
          <RoleRotator roles={profile.roles} />
        </p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.7 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.82 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Button asChild size="lg" className="group">
            <a href="#experience">
              View Experience
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Get in Touch</a>
          </Button>

          <div className="ml-1 flex items-center gap-1">
            {socials.map((s) => {
              const Icon = socialIcon[s.label] ?? Mail;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="size-[18px]" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute inset-x-0 bottom-6 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 text-muted-foreground"
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em]">Scroll</span>
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
