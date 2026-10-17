"use client";

import { LazyMotion, MotionConfig, m, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const loadFeatures = () => import("./motion-features").then((r) => r.default);

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;
const viewport = { once: true, margin: "0px 0px -10% 0px" } as const;

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

type Tag = "div" | "ul" | "ol" | "li";

// data-reveal: the <noscript> style in the layout shows these when JavaScript is off.

/** Fades its content in once it scrolls into view. */
export function Reveal({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: Tag }) {
  const M = m[as];
  return (
    <M data-reveal="" className={className} variants={item} initial="hidden" whileInView="show" viewport={viewport}>
      {children}
    </M>
  );
}

/** Fades its <StaggerItem> children in one after another. */
export function Stagger({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: Tag }) {
  const M = m[as];
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
    >
      {children}
    </M>
  );
}

export function StaggerItem({ children, className, as = "div" }: { children: ReactNode; className?: string; as?: Tag }) {
  const M = m[as];
  return (
    <M data-reveal="" className={className} variants={item}>
      {children}
    </M>
  );
}
