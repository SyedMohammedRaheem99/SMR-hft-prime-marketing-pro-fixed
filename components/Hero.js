// components/Hero.js
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      {/* Main Hero Section - Web & Mobile Apps */}
      <section className="relative min-h-screen flex items-center py-20 pt-32 bg-white dark:bg-slate-900">
        
        {/* Clean Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-100 to-pink-100 dark:from-indigo-900/20 dark:to-pink-900/20 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-100 to-indigo-100 dark:from-emerald-900/20 dark:to-indigo-900/20 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Left Column - Content */}
            <div className="flex-1 max-w-2xl">
              
              {/* Trust Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6"
              >
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Trusted by 50+ Companies
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900 dark:text-white"
                style={{ lineHeight: '1.1' }}
              >
                We help startups and enterprises ship{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-pink-500 to-emerald-500 bg-clip-text text-transparent">
                  scalable web & mobile apps
                </span>{" "}
                — faster.
              </motion.h1>

              {/* Subcopy */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8 max-w-xl"
              >
                At HFT Prime Marketing, we design and deliver high-performance websites, mobile apps, code audits, and growth engineering — built to last, built to scale.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="#contact">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 via-pink-500 to-emerald-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      📞 Book a Free 15-min Call
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="#work">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                      🚀 View Our Work
                    </button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Trust Signals */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="font-medium">Trusted by 50+ companies</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-500">★★★★★</span>
                  <span className="font-medium">4.9 average rating</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Laptop Mockup (Keep Exactly As Is) */}
            <motion.div
              className="w-full lg:w-[600px] flex-none relative"
              variants={itemVariants}
            >
              
              {/* Clean Background Glow */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-[500px] h-[300px] bg-gradient-to-br from-indigo-200/40 to-pink-200/40 dark:from-indigo-800/20 dark:to-pink-800/20 rounded-full blur-3xl"></div>
              </div>

              {/* Laptop Image - KEEP EXACTLY AS IS */}
              <div className="relative">
                <Image
                  src="/assets/laptopmockups.png"
                  alt="laptop mockups showcasing our web development work"
                  width={1200}
                  height={600}
                  priority
                  className="object-contain w-full h-auto"
                />

                {/* Small Performance Badges - Mobile Safe */}
                <motion.div
                  className="absolute top-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/50 text-xs max-w-[120px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs">99% Uptime</div>
                  <div className="font-bold text-slate-800 dark:text-white text-xs sm:text-sm">Fast & Reliable</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/50 text-xs max-w-[140px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="font-semibold text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs">Performance Score</div>
                  <div className="font-bold text-slate-800 dark:text-white text-lg sm:text-xl">95/100</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Freshly App Hero Variation */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-800">
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-emerald-200/30 dark:from-pink-900/10 dark:to-emerald-900/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row-reverse items-center gap-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            {/* Left Column - Freshly App Content */}
            <div className="flex-1 max-w-2xl">
              
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-50 to-emerald-50 dark:from-pink-900/20 dark:to-emerald-900/20 border border-pink-200/50 dark:border-pink-800/50 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-emerald-500 rounded-full"></span>
                <span className="text-sm font-medium text-pink-800 dark:text-pink-300">
                  Mobile-First Excellence
                </span>
              </motion.div>

              {/* Mobile Headline */}
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-pink-600 to-emerald-600 bg-clip-text text-transparent">
                  Mobile-first design
                </span>{" "}
                that delivers real impact.
              </motion.h2>

              {/* Mobile Subcopy */}
              <motion.p
                className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                From concept to launch, we craft mobile apps with smooth performance, intuitive UX, and efficient builds that users love and businesses rely on.
              </motion.p>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="#work">
                  <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-emerald-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    📱 Explore Our Mobile Work
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Freshly App Mockup */}
            <motion.div
              className="w-full lg:w-[600px] flex-none relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              
              {/* Background Glow */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-[400px] h-[300px] bg-gradient-to-br from-pink-200/40 to-emerald-200/40 dark:from-pink-800/20 dark:to-emerald-800/20 rounded-full blur-3xl"></div>
              </div>

              {/* Freshly App Image */}
              <div className="relative">
                <Image
                  src="/assets/freshly-app-mockups.png"
                  alt="Freshly app mobile mockups showcasing our mobile development expertise"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-auto"
                />

                {/* Mobile App Highlight Badges */}
                <motion.div
                  className="absolute top-8 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/50 text-xs max-w-[100px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="font-semibold text-pink-600 dark:text-pink-400 text-[10px] sm:text-xs">Seamless</div>
                  <div className="font-bold text-slate-800 dark:text-white text-xs">UX</div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/50 text-xs max-w-[110px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400 text-[10px] sm:text-xs">Efficient</div>
                  <div className="font-bold text-slate-800 dark:text-white text-xs">Builds</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-12 left-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/50 text-xs max-w-[130px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <div className="font-semibold text-indigo-600 dark:text-indigo-400 text-[10px] sm:text-xs">Faster Time</div>
                  <div className="font-bold text-slate-800 dark:text-white text-xs">to Market</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
