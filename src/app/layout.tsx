
'use client';

import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Starfield from '@/components/starfield';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

/**
 * @file This file defines the root layout for the entire application.
 * It's a client component to support the interactive mouse-tracking background effect.
 */

/**
 * InteractiveBackground is a client component that creates a radial gradient
 * that follows the user's mouse cursor, providing a subtle interactive effect.
 * @returns {JSX.Element} A motion div that styles the background.
 */
function InteractiveBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const background = useTransform(
    [mouseX, mouseY],
    ([newX, newY]) => `radial-gradient(600px at ${newX}px ${newY}px, hsl(var(--primary) / 0.15), transparent 80%)`
  );

  return <motion.div className="fixed inset-0 -z-10" style={{ background }} />;
}

/**
 * RootLayout is the main layout component that wraps every page.
 * It includes global styles, fonts, the starfield background, the interactive
 * background effect, and the toaster for notifications.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The root layout structure for the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <title>VoidParadox: Cierra Smart Home</title>
        <meta name="description" content="Fill the void in your home with Cierra, the smart home assistant that learns your habits." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased relative">
        <Starfield />
        <InteractiveBackground />
        <div className="absolute top-0 left-0 w-full h-full -z-20 bg-gradient-to-br from-background via-transparent to-blue-500/5"></div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
