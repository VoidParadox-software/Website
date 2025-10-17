
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * @file This file contains utility functions for the application.
 */

/**
 * A utility function that combines multiple class names into a single string,
 * resolving any conflicts from Tailwind CSS classes. It uses `clsx` for
 * conditional classes and `tailwind-merge` to handle conflicts.
 *
 * @param {...ClassValue[]} inputs - A list of class names or conditional class objects.
 * @returns {string} The merged and optimized class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
