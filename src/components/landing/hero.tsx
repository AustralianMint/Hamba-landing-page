"use client";

import Image from "next/image";
import type { Variants } from "framer-motion";
import { m } from "@/lib/motion";

const APP_STORE_URL = "https://apps.apple.com/de/app/hamba/id6444381532";

const container: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.15, staggerChildren: 0.2 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="flex min-h-screen flex-1 items-center px-6 py-16 sm:px-10 md:py-0">
      <div className="mx-auto grid w-full max-w-4xl items-center gap-12 md:grid-cols-2 md:gap-16">
        <m.div
          className="flex flex-col items-center text-center md:items-start md:text-left"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <m.h1
            variants={rise}
            className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            The Berlin spots worth finding.
          </m.h1>

          <m.div
            variants={rise}
            className="mt-7 max-w-md space-y-3 text-base text-foreground/75 sm:text-lg"
          >
            <p>
              For when you&rsquo;re out with friends and need somewhere actually
              good to sit down.
            </p>
            <p>
              A curated map of outdoor spots &mdash; found by someone who went
              looking.
            </p>
          </m.div>

          <m.a
            variants={rise}
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2.5 rounded-full bg-foreground px-7 py-3.5 text-base font-medium text-background shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 384 512"
              className="h-5 w-5 fill-current"
            >
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            Download on the App Store
          </m.a>
        </m.div>

        <m.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/iphone_no_bg.png"
            alt="The Hamba app showing the Osloer North spot along a canal in Berlin"
            width={1290}
            height={2796}
            priority
            sizes="(max-width: 768px) 80vw, 40vw"
            className="h-auto max-h-[600px] w-auto rounded-3xl shadow-2xl shadow-black/30"
          />
        </m.div>
      </div>
    </section>
  );
}
