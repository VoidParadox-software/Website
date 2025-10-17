
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { placeholderImages } from "@/lib/placeholder-images.json";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

/**
 * @file This file defines the accessories page, which showcases various smart home accessories that can be purchased.
 */

/**
 * An array of smart accessory objects available for purchase.
 * Each object contains details like id, name, description, price, and image information.
 */
const accessories = [
    {
        id: "accessory-light-strip",
        name: "AuraGlow Light Strip",
        description: "Add vibrant, customizable ambient lighting to any room. Perfect for setting the mood or accentuating decor.",
        price: "$49.99",
        image: placeholderImages.find(p => p.id === "accessory-light-strip")?.imageUrl,
        imageHint: "LED light strip"
    },
    {
        id: "accessory-smart-plug",
        name: "PowerLink Smart Plug",
        description: "Turn any regular appliance into a smart one. Control lamps, fans, and more from your phone or with your voice.",
        price: "$24.99",
        image: placeholderImages.find(p => p.id === "accessory-smart-plug")?.imageUrl,
        imageHint: "smart plug"
    },
    {
        id: "accessory-sensor",
        name: "EnviroSense Multi-Sensor",
        description: "Monitor temperature, humidity, and motion to trigger automations for ultimate comfort and efficiency.",
        price: "$39.99",
        image: placeholderImages.find(p => p.id === "accessory-sensor")?.imageUrl,
        imageHint: "smart sensor"
    },
    {
        id: "accessory-smart-switch",
        name: "Invisia Smart Switch",
        description: "Replace your traditional light switches for seamless smart control of your built-in lighting.",
        price: "$59.99",
        image: placeholderImages.find(p => p.id === "accessory-smart-switch")?.imageUrl,
        imageHint: "smart light switch"
    },
    {
        id: "accessory-smart-camera",
        name: "Sentinel AI Camera",
        description: "Keep an eye on your home with our AI-powered security camera. Features person detection and secure cloud storage.",
        price: "$99.99",
        image: placeholderImages.find(p => p.id === "accessory-smart-camera")?.imageUrl,
        imageHint: "security camera"
    },
     {
        id: "accessory-thermostat",
        name: "ClimateSphere Thermostat",
        description: "Intelligently manages your heating and cooling to save energy and maintain the perfect temperature.",
        price: "$129.99",
        image: placeholderImages.find(p => p.id === "accessory-thermostat")?.imageUrl,
        imageHint: "smart thermostat"
    }
];

/**
 * The AccessoriesPage component renders a page that displays a grid of smart accessories.
 * It includes a header, a main content area with product cards, and a footer.
 * @returns {JSX.Element} The rendered accessories page.
 */
export default function AccessoriesPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-12">
            <div className="text-center">
                <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Expand Your Ecosystem
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Enhance your Cierra experience with our range of smart accessories.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {accessories.map((accessory) => (
                    <Card key={accessory.id} className="flex flex-col bg-card/70 border-primary/20 hover:border-primary/50 transition-colors duration-300">
                        <CardHeader>
                            <div className="relative aspect-video w-full rounded-md overflow-hidden">
                                {accessory.image && (
                                    <Image
                                        src={accessory.image}
                                        alt={accessory.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={accessory.imageHint}
                                    />
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-2">
                             <CardTitle className="font-headline text-xl">{accessory.name}</CardTitle>
                            <CardDescription>{accessory.description}</CardDescription>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                           <p className="text-lg font-bold text-primary">{accessory.price}</p>
                           <Button variant="outline">
                                <ShoppingCart className="mr-2"/> Add to Cart
                           </Button>
                        </CardFooter>
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
