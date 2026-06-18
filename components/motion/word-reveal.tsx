"use client";

import { motion, type Variants } from "framer-motion";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const container: Variants = {
  hidden: {},
  show: (delay: number = 0) => ({
    transition: { staggerChildren: 0.08, delayChildren: delay },
  }),
};

const word: Variants = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { type: "spring", damping: 14, stiffness: 130 },
  },
};

/**
 * Splits a headline into words and reveals each with a spring rise,
 * each word masked by an overflow-hidden wrapper for a clean wipe.
 */
export function WordReveal({ text, className, delay = 0 }: WordRevealProps) {
  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      custom={delay}
      aria-label={text}
    >
      {text.split(" ").map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span variants={word} className="inline-block">
            {w}
            {i < text.split(" ").length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
