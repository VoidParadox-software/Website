
'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

/**
 * @file This file defines a component for displaying an animated text phrase that cycles through a list of strings.
 */

interface AnimatedTextProps {
  /** An array of strings to cycle through. */
  phrases: string[];
  /** Optional additional CSS classes. */
  className?: string;
  /** The delay in milliseconds between phrase changes. Defaults to 4000. */
  delay?: number;
}

/**
 * A component that displays a series of text phrases, one after another,
 * with a fading transition effect.
 *
 * @param {AnimatedTextProps} props - The component props.
 * @returns {JSX.Element} The animated text container.
 */
export default function AnimatedText({
  phrases,
  className,
  delay = 4000,
}: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false);
      }, 500); // fade duration
    }, delay);

    return () => clearInterval(interval);
  }, [phrases.length, delay]);

  return (
    <div className={cn("relative", className)}>
       <span
        className={cn(
          'transition-opacity duration-500 ease-in-out',
          isFading ? 'opacity-0' : 'opacity-100'
        )}
      >
        {phrases[currentIndex]}
      </span>
    </div>
  );
}
