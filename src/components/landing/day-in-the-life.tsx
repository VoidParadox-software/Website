
'use client';

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Home, Moon, Music, ShowerHead, Sun } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from "@/lib/utils";

/**
 * @file This file defines the "Day in the Life" section of the landing page,
 * showcasing an interactive timeline of automated events.
 */

const timelineEvents = [
  {
    time: "06:30 AM",
    title: "The Perfect Wake-up",
    description: "Cierra automatically adjusts your alarm, opens the blinds, and plays your favorite music for a natural start to your day.",
    icon: Sun,
    automatedActions: ["Smart alarm", "Automatic blinds", "Ambient music"],
  },
  {
    time: "07:00 AM",
    title: "Morning Coffee",
    description: "Your coffee is ready the moment you walk downstairs, brewed to the perfect temperature, just the way you like it.",
    icon: Coffee,
    automatedActions: ["Start coffee machine", "Set mug temperature"],
  },
  {
    time: "07:15 AM",
    title: "Ideal Shower",
    description: "The water is at your preferred temperature, and the sound system plays your favorite podcast.",
    icon: ShowerHead,
    automatedActions: ["Set water temperature", "Play podcast", "Mirror defogger"],
  },
  {
    time: "08:00 AM",
    title: "Leaving for Work",
    description: "The house automatically enters eco mode, security activates, and you get a confirmation on your phone.",
    icon: Home,
    automatedActions: ["Turn off lights & plugs", "Arm security system", "Set thermostat to 'Away'"],
  },
  {
    time: "06:30 PM",
    title: "Coming Home",
    description: "Cierra recognizes you and prepares the house: ambient lighting, ideal temperature, and relaxing music.",
    icon: Music,
    automatedActions: ["Welcome lights", "Adjust to comfort temperature", "Play 'Unwind' playlist"],
  },
];

/**
 * The DayInTheLife component displays an interactive timeline of a typical day with Cierra.
 * It features a clickable list of events on the left and a detailed view of the selected event on the right.
 * The details on the right animate in and out as different events are selected.
 * @returns {JSX.Element} The rendered "Day in the Life" section.
 */
export default function DayInTheLife() {
  const [selectedEvent, setSelectedEvent] = useState(timelineEvents[0]);

  return (
    <section id="demo" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A Day in the Life with Cierra
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Discover how Cierra transforms every moment of the day into a perfect, personalized experience.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column: Timeline & Event List */}
            <div className="relative">
                {/* The timeline bar */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border/70" aria-hidden="true"></div>

                <div className="space-y-8">
                    {timelineEvents.map((event) => (
                        <div key={event.time} className="relative flex gap-6" onClick={() => setSelectedEvent(event)}>
                            {/* The timeline node and icon */}
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary/30 z-10">
                                 <event.icon className="w-6 h-6 text-primary" />
                            </div>

                            {/* The clickable card */}
                            <Card
                                className={cn(
                                "cursor-pointer bg-card/60 border-primary/20 transition-all duration-300 w-full",
                                selectedEvent.time === event.time
                                    ? "ring-2 ring-primary shadow-2xl shadow-primary/20"
                                    : "hover:bg-card/80 hover:border-primary/40"
                                )}
                            >
                                <CardContent className="p-4">
                                    <p className="text-sm text-primary font-bold">{event.time}</p>
                                    <h3 className="text-lg font-headline font-semibold">{event.title}</h3>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Selected Event Details */}
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedEvent.time}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10 p-6">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4 p-0">
                      <div className="flex-shrink-0 bg-primary/10 p-4 rounded-lg">
                        <selectedEvent.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <p className="text-lg text-primary font-bold">{selectedEvent.time}</p>
                        <CardTitle className="text-2xl font-headline">{selectedEvent.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 pt-4">
                      <p className="text-muted-foreground text-base mb-6">{selectedEvent.description}</p>
                      <h4 className="font-headline text-lg font-semibold mb-3">Automated Actions:</h4>
                      <ul className="space-y-2">
                        {selectedEvent.automatedActions.map(action => (
                          <li key={action} className="flex items-center gap-3 text-muted-foreground">
                            <div className="w-2 h-2 rounded-full bg-primary/80"></div>
                            <span>{action}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
