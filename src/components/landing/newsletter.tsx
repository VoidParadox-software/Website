"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Gift, Mail, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * @file This file defines the Newsletter subscription section for the landing page.
 */

const features = [
  {
    icon: Bell,
    text: "Exclusive updates",
  },
  {
    icon: Gift,
    text: "Special offers",
  },
  {
    icon: Mail,
    text: "Priority access",
  },
];

/**
 * The Newsletter component displays a subscription form for the company newsletter.
 * It includes a title, a brief description of benefits, an email input field, and a submit button.
 * The layout is responsive, stacking elements on smaller screens.
 * @returns {JSX.Element} The rendered newsletter section.
 */
export default function Newsletter() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You have been subscribed to our newsletter.",
        });
        setEmail("");
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="relative rounded-2xl border border-primary/20 bg-card/50 backdrop-blur-sm p-8 shadow-2xl shadow-primary/10 sm:p-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary glow-shadow">
              <Mail className="h-10 w-10 text-primary-foreground" />
            </div>
          </div>
          <div className="text-center mt-8 max-w-2xl mx-auto">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Be the first to know the{" "}
              <span className="text-primary">news</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Subscribe to our newsletter and receive exclusive updates on
              Cierra, special offers, and priority access to future pre-orders.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center sm:flex-row justify-center gap-4 sm:gap-12 text-sm text-muted-foreground">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-2">
                <feature.icon className="h-5 w-5 text-primary" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 mx-auto flex max-w-md flex-col items-center gap-4 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="your@email.com"
              className="w-full"
              aria-label="Email for newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={isLoading}
            >
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            We don't send spam. You can unsubscribe at any time with a single
            click.
          </p>
        </div>
      </div>
    </section>
  );
}
