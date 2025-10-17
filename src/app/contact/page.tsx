
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * @file This file defines the contact page, which includes a contact form and contact details.
 */

/**
 * An array of contact details.
 * Each object contains the contact information, an icon, and a link.
 */
const contactDetails = [
    { name: "contact@voidparadox.ro", icon: Mail, href: "mailto:contact@voidparadox.ro" },
    { name: "+40 123 456 789", icon: Phone, href: "tel:+40123456789" },
    { name: "Bucharest, Romania", icon: MapPin, href: "#" },
];

/**
 * The ContactPage component renders a page with a contact form on one side
 * and company contact details on the other.
 * @returns {JSX.Element} The rendered contact page.
 */
export default function ContactPage() {
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
                    We're here to help. Reach out to us with any questions or inquiries.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="space-y-6">
                    <h2 className="font-headline text-2xl font-bold">Send us a message</h2>
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" type="text" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="your@email.com" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input id="subject" type="text" placeholder="e.g., Pre-order Question" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea id="message" placeholder="Your message..." rows={5} />
                        </div>
                        <Button type="submit" className="w-full">
                            <Send className="mr-2" /> Send Message
                        </Button>
                    </form>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                     <h2 className="font-headline text-2xl font-bold">Our Details</h2>
                     <p className="text-muted-foreground">
                        You can also reach us directly through the channels below. We look forward to hearing from you.
                     </p>
                    <ul className="space-y-4 pt-4">
                        {contactDetails.map((item) => (
                            <li key={item.name} className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                                     <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <a href={item.href} className="text-lg text-muted-foreground hover:text-primary transition-colors">{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
