
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { Book, ChevronRight, HardHat, Shield, HelpCircle } from "lucide-react";
import Link from "next/link";

/**
 * @file This file defines the documentation hub page, which links to various support and developer resources.
 */

/**
 * An array of resource links for the documentation page.
 * Each object contains an icon, title, description, and href for the link.
 */
const resources = [
    {
        icon: HardHat,
        title: "Installation Guide",
        description: "Step-by-step instructions to get your Cierra system up and running.",
        href: "/installation"
    },
    {
        icon: HelpCircle,
        title: "Frequently Asked Questions",
        description: "Find answers to common questions about Cierra and its features.",
        href: "/faq"
    },
    {
        icon: Shield,
        title: "Warranty Information",
        description: "Details about our warranty policy and how to make a claim.",
        href: "/warranty"
    },
    {
        icon: Book,
        title: "Developer Docs (README)",
        description: "For developers looking to understand the project structure and contribute.",
        href: "https://github.com/your-repo/your-project#readme" // You can change this link
    }
];

/**
 * The DocumentationPage component renders a central hub for all documentation-related links.
 * It presents a list of resources, each linking to a more detailed page.
 * @returns {JSX.Element} The rendered documentation page.
 */
export default function DocumentationPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-12">
            <div className="text-center">
                <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Documentation
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Your central hub for guides, resources, and technical information about Cierra.
                </p>
            </div>

            <div className="max-w-3xl mx-auto grid gap-6">
                {resources.map((resource) => (
                    <Link href={resource.href} key={resource.title} passHref>
                        <a className="block p-6 bg-card/70 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group">
                            <div className="flex items-center justify-between">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                                        <resource.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h2 className="font-headline text-xl font-bold">{resource.title}</h2>
                                        <p className="mt-1 text-muted-foreground">{resource.description}</p>
                                    </div>
                                </div>
                                <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                        </a>
                    </Link>
                ))}
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
