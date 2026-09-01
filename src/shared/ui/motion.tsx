"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({
  className,
  delay = 0,
  y = 18,
  children,
  ...props
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        delay: reduceMotion ? 0 : delay,
        ease,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  className,
  children,
  delayChildren = 0.06,
}: {
  className?: string;
  children: React.ReactNode;
  delayChildren?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduceMotion ? 0 : delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  className,
  children,
  y = 16,
}: {
  className?: string;
  children: React.ReactNode;
  y?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={{
        hidden: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduceMotion ? 0 : 0.45, ease },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease },
};
