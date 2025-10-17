
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { Card, CardContent } from "@/components/ui/card";
import { Building, Home, Smartphone } from "lucide-react";

/**
 * @file This file defines the "Use Cases" section of the landing page,
 * showcasing how different types of users can benefit from the product.
 */

const useCases = [
  {
    value: "enthusiast",
    icon: Smartphone,
    title: "For the Tech Enthusiast",
    description: "Dive deep into Cierra's ecosystem. Integrate custom scripts, leverage the multi-protocol hub to connect niche gadgets, and push the boundaries of what a smart home can be. Your imagination is the only limit.",
    image: placeholderImages.find(p => p.id === "usecase-enthusiast")?.imageUrl,
    imageHint: "smart home dashboard"
  },
  {
    value: "family",
    icon: Home,
    title: "For the Busy Family",
    description: "Simplify your life with routines that just work. From morning rushes to bedtime stories, Cierra manages the little things so you can focus on what matters most. Create scenes for movie nights, dinners, or study time with a single command.",
    image: placeholderImages.find(p => p.id === "usecase-family")?.imageUrl,
    imageHint: "family living room"
  },
  {
    value: "developer",
    icon: Building,
    title: "For the Visionary Developer",
    description: "Offer a truly premium, future-proofed living experience in your properties. The Cierra Infinity package provides a turnkey solution for smart home integration, increasing property value and attracting discerning tenants or buyers.",
    image: placeholderImages.find(p => p.id === "usecase-developer")?.imageUrl,
    imageHint: "modern apartment building"
  },
];

/**
 * The UseCases component displays different user scenarios in a tabbed interface.
 * Each tab corresponds to a user type (e.g., "Enthusiast", "Family") and shows
 * a relevant image and description. The layout is responsive, switching to
 * shorter labels on mobile.
 * @returns {JSX.Element} The rendered use cases section.
 */
export default function UseCases() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 sm:p-8 md:p-16">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A Universe of Possibilities
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Cierra is designed for everyone. Discover how it adapts to your world.
            </p>
          </div>
          <Tabs defaultValue="enthusiast" className="mt-12 max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              {useCases.map((useCase) => (
                <TabsTrigger key={useCase.value} value={useCase.value} className="flex gap-2 items-center text-xs sm:text-sm">
                  <useCase.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{useCase.title}</span>
                   <span className="sm:hidden">{useCase.value.charAt(0).toUpperCase() + useCase.value.slice(1)}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            {useCases.map((useCase) => (
              <TabsContent key={useCase.value} value={useCase.value}>
                <Card className="border-0 shadow-none bg-transparent">
                  <CardContent className="p-0 pt-6 sm:p-6">
                    <div className="grid gap-8 md:grid-cols-2 md:items-center">
                      <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                         {useCase.image && (
                          <Image
                            src={useCase.image}
                            alt={useCase.title}
                            fill
                            className="object-cover"
                            data-ai-hint={useCase.imageHint}
                          />
                         )}
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-headline text-2xl font-bold">{useCase.title}</h3>
                        <p className="text-muted-foreground">{useCase.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
