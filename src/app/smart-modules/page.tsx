
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { Layers } from "lucide-react";
import Image from "next/image";

/**
 * @file This file defines the Smart Modules page, which showcases the different expansion modules for the Cierra system.
 */

/**
 * An array of smart module objects.
 * Each object contains details about a specific module, including its name, description, features, and image.
 */
const modules = [
    {
        id: "module-lighting",
        name: "AuraGlow Lighting Module",
        description: "Unleash your creativity with advanced control over your home's lighting. Create dynamic scenes, sync with music, and adjust brightness and color temperature with precision.",
        features: ["Scene Creation", "Music Sync", "Circadian Rhythms", "Individual Light Control"],
        image: placeholderImages.find(p => p.id === "module-lighting")?.imageUrl,
        imageHint: "smart lighting"
    },
    {
        id: "module-climate",
        name: "ClimateSphere Control Module",
        description: "Achieve perfect comfort and efficiency. This module learns your preferences and local weather to optimize heating and cooling, saving energy without a second thought.",
        features: ["Intelligent Scheduling", "Weather Integration", "Zone Control", "Energy Reporting"],
        image: placeholderImages.find(p => p.id === "module-climate")?.imageUrl,
        imageHint: "climate control"
    },
    {
        id: "module-security",
        name: "Sentinel Security Module",
        description: "Your home's vigilant guardian. Integrates cameras, smart locks, and sensors into a single, intelligent security network with AI-powered person and package detection.",
        features: ["AI Detection", "Smart Lock Integration", "24/7 Secure Recording", "Instant Alerts"],
        image: placeholderImages.find(p => p.id === "module-security")?.imageUrl,
        imageHint: "home security"
    },
    {
        id: "module-entertainment",
        name: "Ambiance Entertainment Module",
        description: "Transform your living room into a cinematic experience. Syncs your smart lights and audio system with what you're watching for total immersion.",
        features: ["Screen & Audio Sync", "Multi-room Audio", "Custom Presets", "Voice-activated Scenes"],
        image: placeholderImages.find(p => p.id === "module-entertainment")?.imageUrl,
        imageHint: "home entertainment"
    }
];

/**
 * The SmartModulesPage component renders a page showcasing the various smart modules.
 * It displays a grid of cards, each detailing a different module.
 * @returns {JSX.Element} The rendered Smart Modules page.
 */
export default function SmartModulesPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-12">
            <div className="text-center">
                <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Smart Modules
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Customize and expand your Cierra system with powerful, specialized modules.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {modules.map((module) => (
                    <Card key={module.id} className="flex flex-col md:flex-row bg-card/70 border-primary/20 hover:border-primary/50 transition-colors duration-300 overflow-hidden">
                        <div className="relative md:w-2/5 w-full aspect-video md:aspect-auto">
                            {module.image && (
                                <Image
                                    src={module.image}
                                    alt={module.name}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={module.imageHint}
                                />
                            )}
                        </div>
                        <div className="flex flex-col justify-between p-6 md:w-3/5">
                            <div>
                                <CardTitle className="font-headline text-xl">{module.name}</CardTitle>
                                <CardDescription className="mt-2">{module.description}</CardDescription>
                                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                                    {module.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-2">
                                            <Layers className="w-4 h-4 text-primary/80"/>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-6">
                                <Button variant="outline" className="w-full">
                                    Add to Configuration
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
