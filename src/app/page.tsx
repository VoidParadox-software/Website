
import AnimatedSection from "@/components/common/animated-section";
import DayInTheLife from "@/components/landing/day-in-the-life";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Newsletter from "@/components/landing/newsletter";
import Pricing from "@/components/landing/pricing";
import UseCases from "@/components/landing/use-cases";
import VoiceDemo from "@/components/landing/voice-demo";

/**
 * @file This file defines the homepage of the application.
 * It composes various landing page sections to create the main marketing page.
 */

/**
 * The Home component is the main landing page.
 * It arranges different sections like Hero, Features, Pricing, etc., in a vertical flow.
 * Each section is wrapped in `AnimatedSection` for a fade-in-on-scroll effect.
 * @returns {JSX.Element} The rendered homepage.
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-16 sm:pt-24">
        <Hero />
        <div className="relative z-10 space-y-20 sm:space-y-24">
          <AnimatedSection>
            <Features />
          </AnimatedSection>
          <AnimatedSection>
            <DayInTheLife />
          </AnimatedSection>
          <AnimatedSection>
            <VoiceDemo />
          </AnimatedSection>
          <AnimatedSection>
            <UseCases />
          </AnimatedSection>
          <AnimatedSection>
            <Pricing />
          </AnimatedSection>
          <AnimatedSection>
            <Newsletter />
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </div>
  );
}
