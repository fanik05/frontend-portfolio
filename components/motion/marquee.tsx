"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  /** Seconds per loop. */
  duration?: number;
}

/**
 * Seamless infinite marquee: the track is duplicated and translated -50%,
 * so the second copy slides exactly into the first's starting position.
 */
export function Marquee({ children, className, reverse = false, duration = 32 }: MarqueeProps) {
  return (
    <div className={cn("marquee-mask group flex overflow-hidden", className)}>
      <div
        className="flex shrink-0 animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
      <div
        aria-hidden
        className="flex shrink-0 animate-marquee items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}
