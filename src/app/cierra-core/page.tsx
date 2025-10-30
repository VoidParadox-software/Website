
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import imageData from "@/lib/placeholder-images.json";
const { placeholderImages } = imageData;
import { BrainCircuit, Cpu, Layers, Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * @file This file defines the Cierra Core page, which details the features of the central smart home hub.
 */

/**
 * An array of feature objects for the Cierra Core hub.
 * Each object includes an icon, title, and description.
 */
const coreFeatures = [
    {
        icon: Cpu,
        title: "The Central Hub",
        description: "The Cierra Core is the powerful central processor for your entire smart home, connecting and managing all your devices seamlessly."
    },
    {
        icon: BrainCircuit,
        title: "Habitual Automation AI",
        description: "Equipped with our signature AI, the Core hub learns your routines to automate lighting, climate, and more, without any complex programming."
    },
    {
        icon: Radio,
        title: "Universal Compatibility",
        description: "With built-in support for Wi-Fi, Thread, Zigbee, and BLE, the Cierra Core acts as a universal translator for all your smart devices."
    },
    {
        icon: Layers,
        title: "Modular & Expandable",
        description: "Start with the Core and expand your system over time. It's the foundation for our entire range of smart modules and accessories."
    }
];

/**
 * The CierraCorePage component renders a detailed page about the Cierra Core product.
 * It includes a hero section, a grid of features, a "how it works" section, and a call-to-action.
 * @returns {JSX.Element} The rendered Cierra Core page.
 */
export default function CierraCorePage() {
  const heroImage = placeholderImages.find(p => p.id === "usecase-enthusiast");

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-24 pb-16">

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center text-center overflow-hidden">
             {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt="A sleek, glowing smart home hub"
                    fill
                    className="object-cover -z-10 brightness-50"
                    data-ai-hint="smart home hub"
                />
             )}
             <div className="relative z-10 container mx-auto px-4">
                 <h1 className="font-headline text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                    Cierra Core
                 </h1>
                 <p className="mt-6 mx-auto max-w-3xl text-lg text-primary-foreground/80 md:text-xl">
                    The essential heart of your intelligent home. Powerful, intuitive, and ready to grow with you.
                 </p>
            </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 mt-[-80px] relative z-20">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-16">
            
            {/* Features Grid */}
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                    The Foundation of Intelligence
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    The Cierra Core isn't just another device; it's the beginning of a home that truly understands you.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreFeatures.map((feature) => (
                    <div key={feature.title} className="text-center p-6 bg-card/70 rounded-lg border border-border">
                         <div className="flex justify-center mb-4">
                            <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                                <feature.icon className="w-8 h-8 text-primary" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-headline text-xl font-bold">{feature.title}</h3>
                            <p className="mt-2 text-muted-foreground text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* How it works */}
             <div className="grid md:grid-cols-2 gap-12 items-center pt-8">
                <div>
                     <h2 className="font-headline text-3xl font-bold tracking-tight">Simple Setup, Powerful Results</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Getting started is as simple as plugging it in. The Cierra Core immediately begins discovering devices and learning the patterns of your home. It's the first and last step to a smarter living space.
                    </p>
                    <ul className="mt-6 space-y-4 text-muted-foreground">
                        <li className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</span><span>Connect to power and your router.</span></li>
                        <li className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</span><span>Use the app to create your account.</span></li>
                        <li className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</span><span>Let Cierra handle the rest.</span></li>
                    </ul>
                </div>
                <div className="relative aspect-square w-full rounded-lg overflow-hidden">
                    <Image
                        src="https://picsum.photos/seed/401/600/600"
                        alt="Cierra Core Hub on a table"
                        fill
                        className="object-cover"
                        data-ai-hint="smart hub product shot"
                    />
                </div>
            </div>


            {/* Final CTA */}
             <div className="text-center pt-8">
                <h2 className="font-headline text-3xl font-bold tracking-tight">Ready to Begin Your Transformation?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
                    The Cierra Core is available for pre-order now. Start building your smart home today.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="/cierra-modular">
                            Pre-order Cierra Core
                        </Link>
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
