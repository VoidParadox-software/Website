import React from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

/**
 * @file This file defines the global footer for the website.
 * It includes navigation links, contact information, and social media icons.
 */

const products = [
  { name: "Cierra Core", href: "/cierra-core" },
  { name: "Cierra Modular", href: "/cierra-modular" },
  { name: "Cierra Infinity", href: "/cierra-infinity" },
  { name: "Smart Modules", href: "/smart-modules" },
  { name: "Accessories", href: "/accessories" },
];

const support = [
  { name: "Documentation", href: "/documentation" },
  { name: "Installation", href: "/installation" },
  { name: "Warranty", href: "/warranty" },
  { name: "Contact", href: "/contact" },
  { name: "FAQ", href: "/faq" },
];

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
 * A functional component that renders the 'X' (formerly Twitter) icon SVG.
 * @param {React.SVGProps<SVGSVGElement>} props - SVG properties.
 * @returns {JSX.Element} The X icon.
 */
function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/**
 * A functional component that renders the TikTok icon SVG.
 * @param {React.SVGProps<SVGSVGElement>} props - SVG properties.
 * @returns {JSX.Element} The TikTok icon.
 */
function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 16 16"
      {...props}
    >
      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
    </svg>
  );
}

/**
 * A functional component that renders the Threads icon SVG.
 * @param {React.SVGProps<SVGSVGElement>} props - SVG properties.
 * @returns {JSX.Element} The Threads icon.
 */
function ThreadsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-label="Threads"
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      {...props}
    >
      <path
        d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

const social = [
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "TikTok", icon: TikTokIcon, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "X", icon: XIcon, href: "#" },
  { name: "Threads", icon: ThreadsIcon, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
];

/**
 * The Logo component for the site.
 * @returns {JSX.Element} The site logo.
 */
function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 relative">
        <div className="absolute w-full h-full rounded-full bg-primary opacity-30"></div>
        <div className="absolute w-6 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/80"></div>
      </div>
      <span className="text-xl font-headline font-bold">VoidParadox</span>
    </div>
  );
}

/**
 * The Footer component appears at the bottom of every page.
 * It contains the company logo, slogan, social media links, product links, support links,
 * and legal links (terms, privacy). It has a responsive layout for mobile.
 * @returns {JSX.Element} The rendered footer component.
 */
export default function Footer() {
  return (
    <footer className="bg-[hsl(213_39%_8%)] border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center lg:text-left">
          {/* Left Column */}
          <div className="space-y-4 flex flex-col items-center lg:items-start">
            <a href="/" className="inline-block">
              <Logo />
            </a>
            <p className="text-primary font-bold text-lg">FILL THE VOID!</p>
            <p className="text-muted-foreground max-w-sm">
              We transform homes into intelligent ecosystems with Cierra
              technology - the first smart home device with AI that learns and
              anticipates your needs.
            </p>
            <div className="flex space-x-4 pt-2">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Middle and Right Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:col-span-2 gap-8">
            <div>
              <h3 className="font-headline font-semibold text-foreground">
                Products
              </h3>
              <ul className="mt-4 space-y-3">
                {products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground">
                Support
              </h3>
              <ul className="mt-4 space-y-3">
                {support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold text-foreground">
                Contact Us
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Support</h4>
                  <ul className="mt-2 space-y-3">
                    {contactSupport.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-center lg:justify-start gap-3"
                      >
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Business</h4>
                  <ul className="mt-2 space-y-3">
                    {contactBusiness.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-center lg:justify-start gap-3"
                      >
                        <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
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

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-6">
          <p>
            &copy; {new Date().getFullYear()} VoidParadox. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-center">
            <a href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/cookies" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
