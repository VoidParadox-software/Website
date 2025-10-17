
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedText from "@/components/common/animated-text";

/**
 * @file This file defines the Hero section, the main introductory component of the landing page.
 */

/**
 * An array of phrases to be displayed by the `AnimatedText` component in the hero section.
 */
const heroPhrases = [
  "In every home, there's a void...",
  "...between what you want and what happens.",
  "Cierra fills that void,",
  "turning your house into a home that anticipates your every need.",
];

/**
 * The Hero component is the main "above-the-fold" content on the landing page.
 * It features a large headline, an animated text component that cycles through phrases,
 * and call-to-action buttons.
 * @returns {JSX.Element} The rendered hero section.
 */
export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden px-4">
      <div className="relative z-10 container mx-auto">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
            Fill the <span className="text-primary glow-shadow">Void</span>.
        </h1>
        <AnimatedText
          phrases={heroPhrases}
          className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground md:text-xl h-12 flex items-center justify-center"
        />
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button size="lg" asChild>
            <a href="#pricing">
              Pre-order Cierra <ArrowRight className="ml-2" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#demo">Watch Demo</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
