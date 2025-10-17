
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";

/**
 * @file This file defines the Cookie Policy page, providing information about cookie usage.
 */

/**
 * The CookiesPage component renders a static page with the company's cookie policy.
 * The styling for the text content is handled by the `prose` classes from Tailwind Typography.
 * @returns {JSX.Element} The rendered cookie policy page.
 */
export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen text-foreground">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 sm:p-16 space-y-8">
            <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-center">
              Cookie Policy
            </h1>

            <div className="prose prose-invert max-w-none text-muted-foreground">
              <p>
                This is the Cookie Policy for VoidParadox, accessible from
                voidparadox.ro
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                What Are Cookies
              </h2>
              <p>
                As is common practice with almost all professional websites this
                site uses cookies, which are tiny files that are downloaded to
                your computer, to improve your experience. This page describes
                what information they gather, how we use it and why we
                sometimes need to store these cookies. We will also share how
                you can prevent these cookies from being stored however this
                may downgrade or 'break' certain elements of the sites
                functionality.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                How We Use Cookies
              </h2>
              <p>
                We use cookies for a variety of reasons detailed below.
                Unfortunately in most cases there are no industry standard
                options for disabling cookies without completely disabling the
                functionality and features they add to this site. It is
                recommended that you leave on all cookies if you are not sure
                whether you need them or not in case they are used to provide a
                service that you use.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                Disabling Cookies
              </h2>
              <p>
                You can prevent the setting of cookies by adjusting the
                settings on your browser (see your browser Help for how to do
                this). Be aware that disabling cookies will affect the
                functionality of this and many other websites that you visit.
                Disabling cookies will usually result in also disabling certain
                functionality and features of this site. Therefore it is
-                recommended that you do not disable cookies.
              </p>

              <h2 className="font-headline text-2xl font-bold mt-8 mb-4 text-foreground">
                More Information
              </h2>
              <p>
                Hopefully that has clarified things for you and as was
                previously mentioned if there is something that you aren't
                sure whether you need or not it's usually safer to leave
                cookies enabled in case it does interact with one of the
                features you use on our site.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
