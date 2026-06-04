"use client";

import Image from "next/image";
import type { Variants } from "framer-motion";
import { AppStoreButton } from "@/components/landing/app-store-button";
import { m } from "@/lib/motion";

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

          <m.div variants={rise} className="mt-9">
            <AppStoreButton />
          </m.div>
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
