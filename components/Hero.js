// components/Hero.js
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container flex flex-col lg:flex-row items-center gap-10">
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
              className="inline-flex items-center px-5 py-3 rounded-md bg-slate-900 text-white shadow hover:brightness-95 focus:outline-none"
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
            <span className="font-medium text-slate-600 dark:text-slate-300">Trusted by</span>{" "}
            <span className="ml-3 text-slate-500">10+ startups & teams</span>
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-[480px] flex-none relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-xl drop-shadow-2xl overflow-visible">
            <Image
              src="/assets/laptopmockups.png"
              alt="laptop mockups"
              width={960}
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
