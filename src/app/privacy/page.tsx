
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

/**
 * @file This file defines the Privacy Policy page, providing information about data handling.
 */

/**
 * The PrivacyPage component renders a static page with the company's privacy policy.
 * The styling for the text content is handled by the `prose` classes from Tailwind Typography.
 * @returns {JSX.Element} The rendered privacy policy page.
 */
export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-8">
            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center">
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                Your privacy is important to us. It is VoidParadox's policy to
                respect your privacy regarding any information we may collect from
                you across our website, and other sites we own and operate.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                1. Information We Collect
              </h2>
              <p>
                We only ask for personal information when we truly need it to
                provide a service to you. We collect it by fair and lawful
                means, with your knowledge and consent. We also let you know why
                we’re collecting it and how it will be used.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                2. How We Use Your Information
              </h2>
              <p>
                We may use the information we collect in various ways, including to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>
                  Develop new products, services, features, and functionality
                </li>
                <li>
                  Communicate with you, either directly or through one of our
                  partners, including for customer service, to provide you
                  with updates and other information relating to the website,
                  and for marketing and promotional purposes
                </li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                3. Log Files
              </h2>
              <p>
                VoidParadox follows a standard procedure of using log files.
                These files log visitors when they visit websites. All hosting
                companies do this and a part of hosting services' analytics. The
                information collected by log files include internet protocol
                (IP) addresses, browser type, Internet Service Provider (ISP),
                date and time stamp, referring/exit pages, and possibly the
                number of clicks. These are not linked to any information that
                is personally identifiable. The purpose of the information is
                for analyzing trends, administering the site, tracking users'
                movement on the website, and gathering demographic information.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                4. Cookies and Web Beacons
              </h2>
              <p>
                Like any other website, VoidParadox uses 'cookies'. These
                cookies are used to store information including visitors'
                preferences, and the pages on the website that the visitor
                accessed or visited. The information is used to optimize the
                users' experience by customizing our web page content based on
                visitors' browser type and/or other information.
              </p>
              
              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                5. Security
              </h2>
              <p>
                We only retain collected information for as long as necessary to
                provide you with your requested service. What data we store,
                we’ll protect within commercially acceptable means to prevent
                loss and theft, as well as unauthorized access, disclosure,
                copying, use or modification.
              </p>
              
              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                6. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. Thus, we
                advise you to review this page periodically for any changes. We
                will notify you of any changes by posting the new Privacy Policy
                on this page. These changes are effective immediately, after
                they are posted on this page.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
