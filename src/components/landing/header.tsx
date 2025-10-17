
'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

/**
 * @file This file defines the global header for the website.
 * It includes the logo, navigation links, and a pre-order button.
 * It also features a responsive mobile menu.
 */

/**
 * The Logo component for the site.
 * @returns {JSX.Element} The site logo.
 */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 relative">
        <div className="absolute w-full h-full rounded-full bg-primary opacity-30 animate-pulse"></div>
        <div className="absolute w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/80"></div>
      </div>
      <span className="text-xl font-headline font-bold">VoidParadox</span>
    </div>
  );
}

/**
 * An array of navigation links to be displayed in the header.
 */
const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#demo", label: "Demo" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#newsletter", label: "Newsletter" },
];

/**
 * The Header component is a fixed navigation bar that appears at the top of the page.
 * It displays navigation links on desktop and collapses into a hamburger menu on mobile,
 * which opens a slide-out `Sheet` for navigation.
 * @returns {JSX.Element} The rendered header component.
 */
export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full p-2 sm:p-4">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 rounded-xl border-border/40 bg-background/60 backdrop-blur-xl border">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map(link => (
             <Link key={link.href} href={link.href} className="transition-colors hover:text-primary">{link.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/#pricing">Pre-order Now</Link>
          </Button>
          <div className="md:hidden">
             <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px]">
                    <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                    <div className="flex flex-col items-center h-full pt-16">
                        <nav className="flex flex-col items-center gap-6">
                             {navLinks.map(link => (
                                <Link 
                                    key={link.href} 
                                    href={link.href} 
                                    className="text-lg font-medium transition-colors hover:text-primary"
                                    onClick={() => setSheetOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                         <Button asChild className="mt-8">
                            <Link href="/#pricing" onClick={() => setSheetOpen(false)}>Pre-order Now</Link>
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
