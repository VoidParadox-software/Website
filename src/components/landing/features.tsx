
'use client';

import { BrainCircuit, Home, Shield, Wifi, Zap, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

/**
 * @file This file defines the "Features" section of the landing page,
 * showcasing the key benefits of the Cierra product in a grid layout.
 */

const features = [
  {
    icon: BrainCircuit,
    title: "Habitual AI",
    description: "Cierra learns your daily routines, anticipating your needs before you even realize them.",
  },
  {
    icon: Wifi,
    title: "Complete Ecosystem",
    description: "Thread, Zigbee, BLE, WiFi—all protocols in one device for maximum connectivity.",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "End-to-end encryption and secure cloud processing for complete protection of your data.",
  },
  {
    icon: Zap,
    title: "Intelligent Automation",
    description: "From morning alarms to shower temperature, everything happens automatically and perfectly synced.",
  },
  {
    icon: Home,
    title: "Total Integration",
    description: "Turn any house into a fully smart home with professional installation and dedicated support.",
  },
  {
    icon: Users,
    title: "For the Whole Family",
    description: "Personalized profiles for each family member, with individual preferences and routines.",
  },
];

/**
 * Animation variants for Framer Motion to stagger the appearance of feature cards.
 */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
 * The Features component displays a grid of key product features.
 * Each feature is presented in a `Card` with an icon, title, and description.
 * The cards animate into view with a staggered effect as the user scrolls.
 * @returns {JSX.Element} The rendered features section.
 */
export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A Home That <span className="text-primary">Knows You</span>
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Cierra isn't just a smart device—it's the gateway to a home that understands and anticipates your every need.
            </p>
          </div>

          <motion.div 
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="bg-card/50 border-primary/20 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-primary/10 p-4 mb-4 glow-shadow">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-muted-foreground">
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
