"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

/**
 * @file This file defines the contact page, which includes a contact form and contact details.
 */

/**
 * An array of contact details.
 * Each object contains the contact information, an icon, and a link.
 */
const contactSupport = [
  {
    name: "support@voidparadox.space",
    icon: Mail,
    href: "mailto:support@voidparadox.space",
  },
  { name: "+40 750 220 651", icon: Phone, href: "tel:+40750220651" },
];

const contactBusiness = [
  {
    name: "office@voidparadox.space",
    icon: Mail,
    href: "mailto:office@voidparadox.space",
  },
  { name: "+40 745 670 036", icon: Phone, href: "tel:+40745670036" },
  {
    name: "Piata 1 mai nr 1-2, Cluj-Napoca, Cluj, Romania, 400051",
    icon: MapPin,
    href: "#",
  },
];

/**
 * The ContactPage component renders a page with a contact form on one side
 * and company contact details on the other.
 * @returns {JSX.Element} The rendered contact page.
 */
export default function ContactPage() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-12">
            <div className="text-center">
              <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We're here to help. Reach out to us with any questions or
                inquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold">
                  Send us a message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="font-headline text-2xl font-bold">
                  Our Details
                </h2>
                <p className="text-muted-foreground">
                  You can also reach us directly through the channels below. We
                  look forward to hearing from you.
                </p>
                <div className="space-y-6 pt-4">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-primary">
                      Support
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {contactSupport.map((item) => (
                        <li key={item.name} className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <a
                            href={item.href}
                            className="text-lg text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-primary">
                      Business
                    </h3>
                    <ul className="mt-4 space-y-4">
                      {contactBusiness.map((item) => (
                        <li key={item.name} className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <a
                            href={item.href}
                            className="text-lg text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
