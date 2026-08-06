'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ───────────────────────────────────────────────
 * TextReveal — word / character split animation
 * Wraps text in overflow-hidden spans and slides
 * each unit upward when scrolled into view.
 * ─────────────────────────────────────────────── */

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  splitBy?: 'char' | 'word';
  once?: boolean;
  stagger?: number;
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  splitBy = 'word',
  once = true,
  stagger,
}: TextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '-8% 0px -8% 0px' });

  const units = splitBy === 'char' ? children.split('') : children.split(' ');
  const baseStagger = stagger ?? (splitBy === 'char' ? 0.02 : 0.05);

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={children}>
      {units.map((unit, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: '120%' }}
            animate={isInView ? { y: '0%' } : { y: '120%' }}
            transition={{
              duration: 0.6,
              delay: delay + i * baseStagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {unit}
            {splitBy === 'word' ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ───────────────────────────────────────────────
 * FadeUp — simple opacity + translateY reveal
 * Use for paragraphs, buttons, images, etc.
 * ─────────────────────────────────────────────── */

interface FadeUpProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  duration?: number;
  yOffset?: number;
}

export function FadeUp({
  children,
  className = '',
  delay = 0,
  once = true,
  duration = 0.7,
  yOffset = 30,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-5% 0px -5% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

/* "?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?
 * FadeInLeft & FadeInRight ?" Slide in horizontally
 * "?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"?"? */

export function FadeInLeft({
  children,
  className = '',
  delay = 0,
  once = true,
  duration = 0.7,
  xOffset = -50,
}: FadeUpProps & { xOffset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-5% 0px -5% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInRight({
  children,
  className = '',
  delay = 0,
  once = true,
  duration = 0.7,
  xOffset = 50,
}: FadeUpProps & { xOffset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: '-5% 0px -5% 0px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x: xOffset }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: xOffset }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
