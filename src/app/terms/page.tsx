
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

/**
 * @file This file defines the Terms & Conditions page.
 */

/**
 * The TermsPage component renders a static page with the company's terms and conditions.
 * The styling for the text content is handled by the `prose` classes from Tailwind Typography.
 * @returns {JSX.Element} The rendered terms and conditions page.
 */
export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-8">
            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center">
              Terms & Conditions
            </h1>

            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                Welcome to VoidParadox. These terms and conditions outline the
                rules and regulations for the use of VoidParadox's Website,
                located at voidparadox.ro. By accessing this website we assume
                you accept these terms and conditions. Do not continue to use
                VoidParadox if you do not agree to take all of the terms and
                conditions stated on this page.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                1. Introduction
              </h2>
              <p>
                These Website Standard Terms and Conditions written on this
                webpage shall manage your use of our website, Cierra Smart Home
                accessible at voidparadox.ro. These Terms will be applied
                fully and affect to your use of this Website. By using this
                Website, you agreed to accept all terms and conditions written
                in here. You must not use this Website if you disagree with any
                of these Website Standard Terms and Conditions.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                2. Intellectual Property Rights
              </h2>
              <p>
                Other than the content you own, under these Terms, VoidParadox
                and/or its licensors own all the intellectual property rights
                and materials contained in this Website. You are granted limited
                license only for purposes of viewing the material contained on
                this Website.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                3. Restrictions
              </h2>
              <p>You are specifically restricted from all of the following:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Publishing any Website material in any other media;</li>
                <li>
                  Selling, sublicensing and/or otherwise commercializing any
                  Website material;
                </li>
                <li>Publicly performing and/or showing any Website material;</li>
                <li>
                  Using this Website in any way that is or may be damaging to
                  this Website;
                </li>
                <li>
                  Using this Website in any way that impacts user access to this
                  Website;
                </li>
                <li>
                  Using this Website contrary to applicable laws and regulations,
                  or in any way may cause harm to the Website, or to any person
                  or business entity;
                </li>
                <li>
                  Engaging in any data mining, data harvesting, data extracting
                  or any other similar activity in relation to this Website;
                </li>
                <li>
                  Using this Website to engage in any advertising or marketing.
                </li>
              </ul>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                4. Your Content
              </h2>
              <p>
                In these Website Standard Terms and Conditions, “Your Content”
                shall mean any audio, video text, images or other material you
                choose to display on this Website. By displaying Your Content,
                you grant VoidParadox a non-exclusive, worldwide irrevocable,
                sub licensable license to use, reproduce, adapt, publish,
                translate and distribute it in any and all media.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                5. Limitation of liability
              </h2>
              <p>
                In no event shall VoidParadox, nor any of its officers,
                directors and employees, shall be held liable for anything
                arising out of or in any way connected with your use of this
                Website whether such liability is under contract. VoidParadox,
                including its officers, directors and employees shall not be
                held liable for any indirect, consequential or special liability
                arising out of or in any way related to your use of this
                Website.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                6. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms will be governed by and interpreted in accordance
                with the laws of Romania, and you submit to the non-exclusive
                jurisdiction of the state and federal courts located in Romania
                for the resolution of any disputes.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
