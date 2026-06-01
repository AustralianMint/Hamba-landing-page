"use client";

import { m } from "@/lib/motion";

export function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <m.p
        className="text-sm font-medium uppercase tracking-widest text-zinc-500"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Hamba
      </m.p>
      <m.h1
        className="max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Landing page starter
      </m.h1>
      <m.p
        className="max-w-lg text-lg text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Next.js, TypeScript, Tailwind CSS, ESLint, and Framer Motion — ready to
        build.
      </m.p>
    </section>
  );
}
