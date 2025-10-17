
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * @file This file defines a reusable component for animating sections as they scroll into view.
 */

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * A component that wraps its children in a `motion.div` from Framer Motion.
 * It uses `react-intersection-observer` to detect when the component is in the viewport
 * and triggers a gentle fade-in and slide-up animation.
 *
 * @param {AnimatedSectionProps} props - The component props.
 * @param {React.ReactNode} props.children - The content to be animated.
 * @param {string} [props.className] - Optional additional CSS classes.
 * @returns {JSX.Element} The animated section.
 */
export default function AnimatedSection({
  children,
  className,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
