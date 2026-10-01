'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  amount?: number;
  className?: string;
}

export default function FadeInScroll({
  children,
  delay = 0,
  direction = 'up',
  amount = 0.18,
  className,
}: Props) {
  const reduceMotion = useReducedMotion();

  const offset = reduceMotion ? 0 : 34;

  const hidden = {
    opacity: reduceMotion ? 1 : 0,
    filter: reduceMotion ? 'blur(0px)' : 'blur(8px)',
    y:
      direction === 'up'
        ? offset
        : direction === 'down'
          ? -offset
          : 0,
    x:
      direction === 'left'
        ? offset
        : direction === 'right'
          ? -offset
          : 0,
    scale: direction === 'none' || reduceMotion ? 1 : 0.985,
  };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduceMotion ? 0 : 0.68,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
