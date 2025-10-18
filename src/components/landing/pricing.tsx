"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";
import { db } from "@/lib/firebase";
import { doc, setDoc, arrayUnion, serverTimestamp } from "firebase/firestore";
import { useState } from "react";

/**
 * @file This file defines the Pricing section of the landing page,
 * showcasing the different product tiers in a card-based layout.
 */

const tiers = [
  {
    id: "prod_core",
    name: "CIERRA Core",
    price: 199,
    priceDescription: "One-time purchase",
    description:
      "The beginning of your transformation. The essential Cierra experience.",
    features: [
      "1 Cierra AI Hub",
      "Habitual Automation AI",
      "Voice Control",
      "Multi-protocol Support",
    ],
    buttonText: "Pre-order Core",
    highlight: false,
    href: "/cierra-core",
  },
  {
    id: "prod_modular",
    name: "CIERRA Modular",
    price: 349,
    priceDescription: "Starting price",
    description:
      "Expand your universe. Customize your setup with add-on modules.",
    features: [
      "Everything in Core",
      "Choice of 2 accessory modules",
      "Visual module configurator",
      "Priority Support",
    ],
    buttonText: "Customize & Pre-order",
    highlight: true,
    href: "/cierra-modular",
  },
  {
    id: "prod_infinity",
    name: "CIERRA Infinity",
    price: null, // Custom price
    priceDescription: "Contact us for a quote",
    description:
      "Your home, redefined. A complete, professionally installed smart home.",
    features: [
      "Everything in Modular",
      "Full professional installation",
      "In-wall speakers & mics",
      "Dedicated Technical Account Manager",
    ],
    buttonText: "Request a Consultation",
    highlight: false,
    href: "/cierra-infinity",
  },
];

/**
 * Animation variants for Framer Motion to stagger the appearance of pricing cards.
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/**
 * The Pricing component displays the available product tiers in a grid.
 * It highlights the "Modular" tier and uses Framer Motion for scroll animations.
 * Each tier links to its respective detailed page.
 * @returns {JSX.Element} The rendered pricing section.
 */
export default function Pricing() {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [loadingTier, setLoadingTier] = useState<string | null>(null);

  const handleAddToCart = async (tier: any) => {
    if (!user) {
      router.push("/login");
      return;
    }

    if (tier.price === null) {
      router.push(tier.href);
      return;
    }

    setLoadingTier(tier.id);

    try {
      const cartRef = doc(db, "carts", user.uid);
      await setDoc(
        cartRef,
        {
          items: arrayUnion({
            id: tier.id,
            name: tier.name,
            price: tier.price,
            quantity: 1,
          }),
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );

      toast({
        title: "Success!",
        description: `${tier.name} has been added to your cart.`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add item to cart. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoadingTier(null);
    }
  };

  return (
    <section id="pricing" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Choose Your Universe
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Select the package that best fits your vision for a smarter home.
              All packages include a 2-year warranty and technical support.
            </p>
          </div>

          <motion.div
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={itemVariants}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                className="h-full"
              >
                <Card
                  className={`flex flex-col h-full ${
                    tier.highlight
                      ? "border-primary ring-2 ring-primary shadow-2xl shadow-primary/20"
                      : "border-border"
                  }`}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl">
                      {tier.name}
                    </CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">
                        {tier.price ? `$${tier.price}` : "Custom"}
                      </span>
                      <p className="text-sm text-muted-foreground">
                        {tier.priceDescription}
                      </p>
                    </div>
                    <CardDescription className="mt-4 h-12">
                      {tier.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-4">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      variant={tier.highlight ? "default" : "outline"}
                      onClick={() => handleAddToCart(tier)}
                      disabled={loadingTier === tier.id}
                    >
                      {loadingTier === tier.id ? (
                        "Adding..."
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          {tier.buttonText}
                        </>
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              Need extended coverage? Upgrade to our premium warranty and
              support plan for just €10/month.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
