
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import imageData from "@/lib/placeholder-images.json";
const { placeholderImages } = imageData;
import { ArrowRight, CheckCircle, Headphones, Sparkles, Wrench } from "lucide-react";
import Image from "next/image";

/**
 * @file This file defines the Cierra Infinity page, detailing the premium, full-service smart home package.
 */

/**
 * An array of feature objects for the Cierra Infinity package.
 * Each object includes an icon, title, and description.
 */
const infinityFeatures = [
    {
        icon: Sparkles,
        title: "Bespoke System Design",
        description: "Our experts work with you to design a smart home system that is perfectly tailored to your home's layout and your family's lifestyle."
    },
    {
        icon: Wrench,
        title: "Full Professional Installation",
        description: "A certified team handles the entire installation process, from wiring to device configuration, including in-wall speakers and microphones for a truly seamless look."
    },
    {
        icon: Headphones,
        title: "Dedicated Account Manager",
        description: "You receive a single point of contact for all your needs. Your dedicated manager ensures your system is always running perfectly and provides proactive support."
    },
    {
        icon: CheckCircle,
        title: "All-Inclusive Hardware",
        description: "The Infinity package includes all necessary Cierra hubs, modules, and a curated selection of premium third-party devices to create a complete ecosystem."
    }
];

/**
 * The CierraInfinityPage component renders a page describing the high-end Cierra Infinity service.
 * It includes a hero section, features grid, a process overview, and a call-to-action for consultation.
 * @returns {JSX.Element} The rendered Cierra Infinity page.
 */
export default function CierraInfinityPage() {
  const heroImage = placeholderImages.find(p => p.id === "usecase-developer");

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-16">

        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
             {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt="Luxurious modern home interior"
                    fill
                    className="object-cover -z-10 brightness-50"
                    data-ai-hint="luxury home interior"
                />
             )}
             <div className="relative z-10 container mx-auto px-4">
                 <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    Cierra Infinity
                 </h1>
                 <p className="mt-6 mx-auto max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
                    The ultimate smart home experience, completely redefined. A fully bespoke, professionally installed solution for those who demand perfection.
                 </p>
                <div className="mt-10">
                    <Button size="lg" asChild>
                        <a href="/contact">
                            Request a Consultation <ArrowRight className="ml-2" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 mt-[-80px] relative z-20">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-16">
            
            {/* Features Grid */}
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    The White-Glove Service
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Cierra Infinity is more than a product—it's a complete, end-to-end service that transforms your house into an intelligent, responsive home.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {infinityFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-6 p-6 bg-card/70 rounded-lg border border-border">
                        <div className="flex-shrink-0">
                            <feature.icon className="w-10 h-10 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* The Process Section */}
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    Our Seamless Process
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    From initial concept to final handover, we manage every detail.
                </p>
            </div>
             <div className="relative">
                <div className="absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-border" aria-hidden="true"></div>
                <div className="grid md:grid-cols-3 gap-8 text-center relative">
                    <div className="space-y-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary ring-4 ring-background mx-auto z-10 relative">
                           <span className="font-bold text-primary-foreground text-xl">1</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold">Consultation</h3>
                        <p className="text-muted-foreground">We begin with a detailed discussion to understand your vision, needs, and the unique aspects of your property.</p>
                    </div>
                     <div className="space-y-3">
                         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary ring-4 ring-background mx-auto z-10 relative">
                           <span className="font-bold text-primary-foreground text-xl">2</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold">Design & Installation</h3>
                        <p className="text-muted-foreground">Our team creates a custom blueprint and handles the complete, discreet installation of all hardware and software.</p>
                    </div>
                     <div className="space-y-3">
                         <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary ring-4 ring-background mx-auto z-10 relative">
                           <span className="font-bold text-primary-foreground text-xl">3</span>
                        </div>
                        <h3 className="font-headline text-xl font-bold">Support & Evolution</h3>
                        <p className="text-muted-foreground">Enjoy ongoing, proactive support from your dedicated account manager as your smart home evolves with you.</p>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
             <div className="text-center pt-8">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Ready to Build Your Future Home?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                    Let's start the conversation. Contact us today for a no-obligation consultation and discover the Cierra Infinity difference.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <a href="/contact">
                            Get in Touch
                        </a>
                    </Button>
                </div>
            </div>


          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
