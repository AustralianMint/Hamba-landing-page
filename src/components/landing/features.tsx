"use client";

import Image from "next/image";
import type { Variants } from "framer-motion";
import { m } from "@/lib/motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { delayChildren: 0.1, staggerChildren: 0.18 },
  },
};

const secondaryGroup: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
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

const secondaryFeatures = [
  {
    title: "Curated, not generated",
    body: "No algorithm, no noise. Every spot is chosen by someone who went looking, so you skip the duds and go straight to the good ones.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M12 3l1.9 4.7L19 9.2l-3.6 3.4.9 5L12 15.3 7.7 17.6l.9-5L5 9.2l5.1-1.5L12 3z" />
      </svg>
    ),
  },
  {
    title: "Set the mood",
    body: "Each spot pairs with ambient background music and switchable map styles, so the app sets the tone before you even arrive.",
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-7 w-7"
      >
        <path d="M9 18V5l11-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="17" cy="16" r="3" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="px-6 pt-10 pb-24 sm:px-10 sm:pt-14 sm:pb-32">
      <m.div
        className="mx-auto flex w-full max-w-4xl flex-col gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <m.article
          variants={rise}
          className="grid items-center gap-8 rounded-3xl bg-foreground/5 p-8 sm:p-10 md:grid-cols-2 md:gap-12 md:p-12"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/feat-img1.jpeg"
              alt="A weathered wooden bench beside a tree-lined path along the water in Berlin"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-[center_70%]"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-foreground sm:text-4xl">
              Somewhere to sit
            </h2>
            <p className="mt-5 text-base leading-relaxed text-foreground/75 sm:text-lg">
              Hamba points you to calm corners where you can actually sit down
              and stay a while &mdash; benches, watersides, and quiet green
              spaces, each one handpicked and personally visited. The spots
              worth knowing when you&rsquo;re out and need somewhere good to
              land.
            </p>
          </div>
        </m.article>

        <m.div
          variants={secondaryGroup}
          className="grid gap-6 sm:grid-cols-2"
        >
          {secondaryFeatures.map((feature) => (
            <m.article
              key={feature.title}
              variants={rise}
              className="flex flex-col rounded-3xl bg-foreground/5 p-7 sm:p-8"
            >
              <span className="text-accent">{feature.icon}</span>
              <h3 className="mt-4 font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
                {feature.body}
              </p>
            </m.article>
          ))}
        </m.div>
      </m.div>
    </section>
  );
}
