// components/Hero.js
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container flex flex-col lg:flex-row items-center gap-10">
        {/* Left side - text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            We build product-grade apps and clean code that scales.
          </h1>
          <p className="mt-4 text-slate-500 dark:text-slate-300 max-w-xl">
            HFT Prime Marketing — we design & ship performant web and mobile
            products, audits and growth engineering for startups and
            enterprises.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-3 rounded-md bg-slate-900 text-white shadow hover:brightness-95"
            >
              Book a Free Call
            </a>
            <a
              href="#work"
              className="inline-flex items-center px-5 py-3 rounded-md border hover:bg-slate-50/50 dark:hover:bg-white/5"
            >
              View Our Work
            </a>
          </div>

          <div className="mt-6 text-sm text-slate-400">
            <span className="font-medium text-slate-600 dark:text-slate-300">
              Trusted by
            </span>{" "}
            <span className="ml-3">10+ startups & teams</span>
          </div>
        </motion.div>

        {/* Right side - laptop */}
        <motion.div
          className="w-full lg:w-[560px] flex-none relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* soft radial background */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center -z-10">
            <div className="w-[420px] h-[220px] rounded-full blur-3xl opacity-30 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800"></div>
          </div>

          <div className="rounded-xl overflow-visible drop-shadow-2xl">
            <Image
              src="/assets/laptopmockups.png"
              alt="laptop mockups"
              width={1120}
              height={560}
              priority
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

