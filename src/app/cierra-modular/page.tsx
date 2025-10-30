
'use client';

import { useState, useMemo } from "react";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import imageData from "@/lib/placeholder-images.json";
const { placeholderImages } = imageData;
import { Layers, Minus, Package, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";

/**
 * @file This file defines the Cierra Modular page, an interactive builder for creating a custom smart home package.
 */

const corePackage = {
    id: "cierra-core",
    name: "Cierra Core Hub",
    description: "The heart of your smart home. This is the starting point for your custom setup.",
    price: 199,
};

const modules = [
    {
        id: "module-lighting",
        name: "AuraGlow Lighting Module",
        description: "Advanced control over your home's lighting.",
        price: 79,
    },
    {
        id: "module-climate",
        name: "ClimateSphere Control Module",
        description: "Achieve perfect comfort and efficiency.",
        price: 99,
    },
    {
        id: "module-security",
        name: "Sentinel Security Module",
        description: "Your home's vigilant guardian.",
        price: 129,
    },
    {
        id: "module-entertainment",
        name: "Ambiance Entertainment Module",
        description: "Transform your living room into a cinematic experience.",
        price: 89,
    }
];

const accessories = [
    {
        id: "accessory-light-strip",
        name: "AuraGlow Light Strip",
        price: 49.99,
        image: placeholderImages.find(p => p.id === "accessory-light-strip")?.imageUrl,
        imageHint: "LED light strip"
    },
    {
        id: "accessory-smart-plug",
        name: "PowerLink Smart Plug",
        price: 24.99,
        image: placeholderImages.find(p => p.id === "accessory-smart-plug")?.imageUrl,
        imageHint: "smart plug"
    },
    {
        id: "accessory-sensor",
        name: "EnviroSense Multi-Sensor",
        price: 39.99,
        image: placeholderImages.find(p => p.id === "accessory-sensor")?.imageUrl,
        imageHint: "smart sensor"
    },
    {
        id: "accessory-smart-switch",
        name: "Invisia Smart Switch",
        price: 59.99,
        image: placeholderImages.find(p => p.id === "accessory-smart-switch")?.imageUrl,
        imageHint: "smart light switch"
    }
];

/**
 * The CierraModularPage component is an interactive product configurator.
 * It allows users to select modules and accessories to build a custom Cierra smart home package
 * and see the total price update in real-time.
 * @returns {JSX.Element} The rendered Cierra Modular builder page.
 */
export default function CierraModularPage() {
    const [selectedModules, setSelectedModules] = useState<string[]>([]);
    const [accessoryQuantities, setAccessoryQuantities] = useState<{[key: string]: number}>({});

    /**
     * Toggles the selection of a smart module.
     * @param {string} moduleId - The ID of the module to toggle.
     */
    const handleModuleToggle = (moduleId: string) => {
        setSelectedModules(prev => 
            prev.includes(moduleId) 
                ? prev.filter(id => id !== moduleId) 
                : [...prev, moduleId]
        );
    };

    /**
     * Changes the quantity of a selected accessory.
     * @param {string} accessoryId - The ID of the accessory to change.
     * @param {number} change - The amount to change the quantity by (+1 or -1).
     */
    const handleQuantityChange = (accessoryId: string, change: number) => {
        setAccessoryQuantities(prev => {
            const currentQuantity = prev[accessoryId] || 0;
            const newQuantity = Math.max(0, currentQuantity + change);
            if (newQuantity === 0) {
                const newQuantities = {...prev};
                delete newQuantities[accessoryId];
                return newQuantities;
            }
            return { ...prev, [accessoryId]: newQuantity };
        });
    };

    /**
     * Calculates the total price of the custom package based on selected modules and accessories.
     * @returns {number} The total price.
     */
    const totalPrice = useMemo(() => {
        let total = corePackage.price;

        selectedModules.forEach(moduleId => {
            const module = modules.find(m => m.id === moduleId);
            if (module) total += module.price;
        });

        Object.entries(accessoryQuantities).forEach(([accessoryId, quantity]) => {
            const accessory = accessories.find(a => a.id === accessoryId);
            if (accessory) total += accessory.price * quantity;
        });

        return total;
    }, [selectedModules, accessoryQuantities]);

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-24 sm:pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-4 sm:p-8 md:p-16 space-y-12">
            <div className="text-center">
                <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Build Your Cierra System
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Customize your smart home by starting with the Cierra Core and adding the modules and accessories that fit your life.
                </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Step 1: Core Package */}
                    <Card className="bg-card/70 border-primary/20">
                        <CardHeader>
                            <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
                                <Package className="w-10 h-10 text-primary flex-shrink-0" />
                                <div>
                                    <CardTitle className="font-headline text-xl sm:text-2xl">1. Cierra Core (Included)</CardTitle>
                                    <CardDescription>{corePackage.description}</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    {/* Step 2: Smart Modules */}
                    <Card className="bg-card/70 border-primary/20">
                        <CardHeader>
                             <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
                                <Layers className="w-10 h-10 text-primary flex-shrink-0" />
                                <div>
                                    <CardTitle className="font-headline text-xl sm:text-2xl">2. Add Smart Modules</CardTitle>
                                    <CardDescription>Expand Cierra's capabilities with specialized modules.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {modules.map(module => (
                                <div key={module.id} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border">
                                    <div className="flex items-center gap-4">
                                        <Checkbox 
                                            id={module.id} 
                                            checked={selectedModules.includes(module.id)}
                                            onCheckedChange={() => handleModuleToggle(module.id)}
                                        />
                                        <Label htmlFor={module.id} className="cursor-pointer">
                                            <p className="font-semibold">{module.name}</p>
                                            <p className="text-sm text-muted-foreground hidden sm:block">{module.description}</p>
                                        </Label>
                                    </div>
                                    <p className="font-bold text-lg text-primary/90">${module.price}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* Step 3: Accessories */}
                    <Card className="bg-card/70 border-primary/20">
                         <CardHeader>
                             <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row">
                                <ShoppingCart className="w-10 h-10 text-primary flex-shrink-0" />
                                <div>
                                    <CardTitle className="font-headline text-xl sm:text-2xl">3. Add Accessories</CardTitle>
                                    <CardDescription>Complete your setup with our range of smart devices.</CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="grid sm:grid-cols-2 gap-4">
                            {accessories.map(accessory => (
                                <div key={accessory.id} className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border">
                                    {accessory.image && (
                                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden flex-shrink-0">
                                            <Image src={accessory.image} alt={accessory.name} fill className="object-cover" data-ai-hint={accessory.imageHint}/>
                                        </div>
                                    )}
                                    <div className="flex-grow">
                                        <p className="font-semibold text-sm sm:text-base">{accessory.name}</p>
                                        <p className="font-bold text-primary/90">${accessory.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(accessory.id, -1)}>
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="w-8 text-center font-bold">{accessoryQuantities[accessory.id] || 0}</span>
                                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleQuantityChange(accessory.id, 1)}>
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                {/* Summary Sidebar */}
                <div className="lg:col-span-1 space-y-8 sticky top-24 self-start">
                    <Card className="bg-card/70 border-primary/20">
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">Your Custom Package</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex justify-between">
                                    <span>{corePackage.name}</span>
                                    <span className="font-medium text-foreground">${corePackage.price.toFixed(2)}</span>
                                </li>
                                {selectedModules.map(moduleId => {
                                    const module = modules.find(m => m.id === moduleId);
                                    return module ? (
                                        <li key={module.id} className="flex justify-between">
                                            <span>{module.name}</span>
                                            <span className="font-medium text-foreground">${module.price.toFixed(2)}</span>
                                        </li>
                                    ) : null;
                                })}
                                {Object.entries(accessoryQuantities).map(([accessoryId, quantity]) => {
                                    const accessory = accessories.find(a => a.id === accessoryId);
                                    return accessory ? (
                                        <li key={accessory.id} className="flex justify-between">
                                            <span className="text-left pr-2">{quantity}x {accessory.name}</span>
                                            <span className="font-medium text-foreground text-right">${(accessory.price * quantity).toFixed(2)}</span>
                                        </li>
                                    ) : null;
                                })}
                            </ul>
                            <div className="border-t border-border pt-4 mt-4">
                                <div className="flex justify-between text-xl font-bold">
                                    <span className="font-headline">Total</span>
                                    <span className="text-primary">${totalPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                             <Button className="w-full" size="lg">
                                Pre-order Now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
