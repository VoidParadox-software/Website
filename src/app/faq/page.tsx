
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
  
/**
 * @file This file defines the FAQ page, displaying frequently asked questions in an accordion interface.
 */

/**
 * An array of frequently asked questions and their answers.
 */
const faqItems = [
    {
        question: "What is Cierra?",
        answer:
        "Cierra is a smart home assistant powered by AI. It learns your habits and automates your home to fit your lifestyle, controlling everything from lights and temperature to music and security.",
    },
    {
        question: "Is Cierra compatible with my existing smart devices?",
        answer:
        "Cierra is designed for universal compatibility. It supports all major smart home protocols, including Wi-Fi, Thread, Zigbee, and BLE, ensuring your existing devices can be integrated seamlessly.",
    },
    {
        question: "How does the 'Habitual Automation' work?",
        answer:
        "Our cloud-based AI analyzes your daily routines and preferences over time. It learns when you wake up, when you leave for work, and what your evening routine looks like to proactively adjust your home's environment without any manual input from you.",
    },
    {
        question: "What is the difference between the Cierra packages?",
        answer:
        "We offer three tiers: Core (the essential AI hub), Modular (Core plus your choice of add-on modules for customization), and Infinity (a complete, professionally installed smart home solution). You can choose the one that best fits your needs and budget.",
    },
    {
        question: "Is my data secure with Cierra?",
        answer:
        "Yes, your privacy and security are our top priorities. All data is collected with your consent and protected with industry-standard security measures. We only use your data to improve your smart home experience. Please see our Privacy Policy for more details.",
    },
    {
        question: "Can I install Cierra myself?",
        answer:
        "Absolutely. The Cierra Core and Modular packages are designed for easy, DIY installation. Our Infinity package, however, includes full professional installation for a completely hands-off experience.",
    },
];
  
/**
 * The FAQPage component renders a page with a list of frequently asked questions.
 * It uses the `Accordion` component to allow users to expand and collapse answers.
 * @returns {JSX.Element} The rendered FAQ page.
 */
export default function FAQPage() {
    return (
        <div className="flex flex-col min-h-screen text-foreground">
        <Header />
        <main className="flex-grow pt-32 pb-16">
            <div className="container mx-auto px-4">
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-8">
                <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center">
                Frequently Asked Questions
                </h1>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                            {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base">
                            {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            </div>
        </main>
        <Footer />
        </div>
    );
}
