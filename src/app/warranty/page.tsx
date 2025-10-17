
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

/**
 * @file This file defines the Warranty Policy page.
 */

/**
 * The WarrantyPage component renders a static page with the company's warranty policy.
 * The styling for the text content is handled by the `prose` classes from Tailwind Typography.
 * @returns {JSX.Element} The rendered warranty policy page.
 */
export default function WarrantyPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-8">
            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center">
              Warranty Policy
            </h1>

            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                This document outlines the warranty policy for Cierra products
                purchased from VoidParadox.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                1. Standard Warranty Period
              </h2>
              <p>
                All Cierra hardware products come with a 2-year limited
                warranty from the date of purchase. This warranty covers defects
                in materials and workmanship under normal use.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                2. What is Covered
              </h2>
              <p>
                During the warranty period, VoidParadox will, at its option,
                repair or replace any defective product or part with a new or
                refurbished product or part. This is your sole and exclusive
                remedy for any defect.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                3. What is Not Covered
              </h2>
              <p>
                This warranty does not cover:
              </p>
               <ul className="list-disc pl-6 space-y-2">
                <li>
                  Damage caused by accident, abuse, misuse, flood, fire,
                  earthquake, or other external causes.
                </li>
                <li>
                  Damage caused by operating the product outside the permitted
                  or intended uses described by VoidParadox.
                </li>
                <li>
                  A product or part that has been modified to alter
                  functionality or capability without the written permission of
                  VoidParadox.
                </li>
                 <li>Cosmetic damage, including but not limited to scratches, dents, and broken plastic on ports unless failure has occurred due to a defect in materials or workmanship.</li>
              </ul>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                4. How to Obtain Warranty Service
              </h2>
              <p>
                To obtain warranty service, you must contact our support team at{" "}
                <a href="mailto:contact@voidparadox.ro">contact@voidparadox.ro</a>. You may be required to provide proof of purchase to verify warranty eligibility.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
