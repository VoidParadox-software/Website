
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import { CheckCircle, Package, Settings, Wifi } from "lucide-react";

/**
 * @file This file defines the Installation Guide page, providing step-by-step instructions for setting up Cierra.
 */

/**
 * An array of installation steps for the Cierra Core hub.
 * Each object includes an icon, title, and description for a step.
 */
const steps = [
    {
        icon: Package,
        title: "Step 1: Unbox Your Cierra Core",
        description: "Carefully unbox your Cierra Core hub and place it in a central location in your home, preferably with clear access to your Wi-Fi router."
    },
    {
        icon: Wifi,
        title: "Step 2: Power On and Connect",
        description: "Plug in the power adapter and connect the Cierra Core to your router using the provided Ethernet cable for the initial setup. The light ring will pulse to indicate it's ready."
    },
    {
        icon: Settings,
        title: "Step 3: Configure with the Cierra App",
        description: "Download the Cierra app on your smartphone. Follow the on-screen instructions to create your account and connect to your Cierra Core. The app will guide you through connecting to your Wi-Fi network."
    },
    {
        icon: CheckCircle,
        title: "Step 4: Add Your Devices",
        description: "Once setup is complete, you can start adding your existing smart devices. Navigate to the 'Devices' tab in the app and follow the prompts. Cierra supports most major brands and protocols automatically."
    }
];

/**
 * The InstallationPage component renders a guide with step-by-step instructions for product installation.
 * @returns {JSX.Element} The rendered installation guide page.
 */
export default function InstallationPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-12">
            <div className="text-center">
                <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Installation Guide
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Setting up your Cierra smart home is simple. Follow these steps to get started.
                </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-12">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6">
                        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0 mt-1">
                                <step.icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h2 className="font-headline text-2xl font-bold">{step.title}</h2>
                            <p className="mt-2 text-muted-foreground">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <h2 className="font-headline text-2xl font-bold">Need Help?</h2>
                <p className="mt-2 text-muted-foreground">
                    If you encounter any issues, please visit our <a href="/faq" className="text-primary hover:underline">FAQ page</a> or <a href="/contact" className="text-primary hover:underline">contact support</a>.
                </p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
