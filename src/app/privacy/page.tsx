import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-full flex-1 flex-col bg-background text-foreground">
      <section className="px-6 py-16 sm:px-10 sm:py-24">
        <div className="mx-auto w-full max-w-2xl">
          <Link
            href="/"
            className="text-sm text-foreground/60 underline-offset-4 hover:text-foreground hover:underline"
          >
            &larr; Back to Hamba
          </Link>

          <h1 className="mt-8 font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-foreground/60">
            Last updated: June 17, 2026
          </p>

          <div className="mt-10 space-y-8 text-base leading-relaxed text-foreground/75 sm:text-lg">
            <p>
              Hamba is built and maintained by Thomas Frey. This page explains
              what information Hamba collects and how it is used.
            </p>

            <div>
              <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Who is responsible for this
              </h2>
              <p className="mt-3">
                Hamba is a one person project. Thomas Frey, based in Berlin,
                Germany, is the data controller for any processing described
                on this page. You can reach him directly at the email address
                at the bottom of this page.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Location
              </h2>
              <p className="mt-3">
                Hamba asks for permission to access your device&rsquo;s
                location so it can show your location on the map. Your
                location is used only on your device, to center and filter
                the map. It is not sent to any server, stored, or shared with
                anyone.
              </p>
              <p className="mt-3">
                This is based on your consent, given through the permission
                prompt itself. You can withdraw that consent at any time in
                your device settings. 
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                What Hamba does not do
              </h2>
              <p className="mt-3">
                Hamba does not require an account or sign-in. It does not use
                analytics, crash reporting, or advertising tools. It does not
                collect, store, or transmit any personal data. All spot
                information shown in the app is built into the app itself,
                not loaded from a server.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                International data transfers
              </h2>
              <p className="mt-3">
                Since your location never leaves your device, there is no
                international data transfer to disclose. Nothing is sent
                anywhere, in or out of any country.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Your rights
              </h2>
              <p className="mt-3">
                If you are in the EU, you have the right to access, correct,
                or delete personal data held about you, and the right to
                lodge a complaint with your local data protection supervisory
                authority. In practice there is little to act on here, since
                Hamba does not hold any personal data to begin with, but the
                right exists regardless.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Children&rsquo;s privacy
              </h2>
              <p className="mt-3">
                Hamba does not knowingly collect information from anyone,
                including children. Since no personal data is collected at
                all, this applies equally to all users regardless of age.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Changes to this policy
              </h2>
              <p className="mt-3">
                If Hamba&rsquo;s data practices change (for example, if a
                backend or analytics is added later), this page will be
                updated and the &ldquo;Last updated&rdquo; date above will
                reflect that.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Contact
              </h2>
              <p className="mt-3">
                Questions about this policy can be sent to{" "}
                <a
                  href="mailto:thomas.frey@code.berlin"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  thomas.frey@code.berlin
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
