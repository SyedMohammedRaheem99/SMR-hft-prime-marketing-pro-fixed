// components/Hero.js
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
      <section className="relative min-h-screen flex items-center py-20 pt-32 bg-white dark:bg-slate-900 overflow-hidden">
        
        {/* Enhanced Background Elements with Mouse Follow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30"
            style={{
              background: "linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)",
              filter: "blur(100px)",
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20"
            style={{
              background: "linear-gradient(135deg, #10B981 0%, #4F46E5 100%)",
              filter: "blur(120px)",
              transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Floating Particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-indigo-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
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
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Trusted by 50+ Companies
                </span>
              </motion.div>

              {/* Main Headline - Professional Single Gradient */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900 dark:text-white"
                style={{ lineHeight: '1.1' }}
              >
                We help startups and enterprises ship{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
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

              {/* CTA Buttons - Professional Single Gradient */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href="#contact">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      📞 Book a Free 15-min Call
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
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

            {/* Right Column - Laptop Mockup with Effects */}
            <motion.div
              className="w-full lg:w-[600px] flex-none relative"
              variants={itemVariants}
            >
              
              {/* Enhanced Background Glow with Animation */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <motion.div
                  className="w-[500px] h-[300px] rounded-full opacity-40 blur-3xl"
                  style={{
                    background: "linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Floating Elements Around Laptop */}
              <motion.div
                className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-xl shadow-lg flex items-center justify-center text-white text-sm font-bold"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ⚡
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-6 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold"
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                🚀
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-2 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center text-white text-xs font-bold"
                animate={{
                  y: [5, -15, 5],
                  x: [-5, 5, -5],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                ✨
              </motion.div>

              {/* Laptop Image with Enhanced Effects */}
              <motion.div
                className="relative"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/laptopmockups.png"
                  alt="laptop mockups showcasing our web development work"
                  width={1200}
                  height={600}
                  priority
                  className="object-contain w-full h-auto transform hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
                  style={{ transform: "skewX(-45deg)" }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5,
                    ease: "easeInOut",
                  }}
                />

                {/* Mobile-Optimized Performance Badges */}
                <motion.div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-md p-1.5 sm:p-2 shadow-lg border border-white/50 max-w-[80px] sm:max-w-[120px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400 text-[8px] sm:text-xs">99% Uptime</div>
                  <div className="font-bold text-slate-800 dark:text-white text-[10px] sm:text-sm">Fast & Reliable</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-4 right-2 sm:bottom-8 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-md p-1.5 sm:p-2 shadow-lg border border-white/50 max-w-[90px] sm:max-w-[140px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <div className="font-semibold text-indigo-600 dark:text-indigo-400 text-[8px] sm:text-xs">Performance Score</div>
                  <div className="font-bold text-slate-800 dark:text-white text-sm sm:text-xl">95/100</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Freshly App Hero Variation */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-30 blur-3xl"
            style={{
              background: "linear-gradient(135deg, #EC4899 0%, #10B981 100%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-pink-200 dark:border-pink-800/50 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Mobile-First Excellence
                </span>
              </motion.div>

              {/* Mobile Headline - Professional Single Gradient */}
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

              {/* Mobile CTA - Professional Single Gradient */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="#work">
                  <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-600 to-emerald-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    📱 Explore Our Mobile Work
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Freshly App Mockup with Effects */}
            <motion.div
              className="w-full lg:w-[600px] flex-none relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              
              {/* Background Glow with Animation */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <motion.div
                  className="w-[400px] h-[300px] rounded-full opacity-40 blur-3xl"
                  style={{
                    background: "linear-gradient(135deg, #EC4899 0%, #10B981 100%)",
                  }}
                  animate={{
                    scale: [1, 1.15, 1],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Floating Elements Around Mobile */}
              <motion.div
                className="absolute top-4 left-2 w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg shadow-lg flex items-center justify-center text-white text-xs font-bold"
                animate={{
                  y: [-8, 12, -8],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                📱
              </motion.div>

              <motion.div
                className="absolute top-1/3 -right-2 w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl shadow-lg flex items-center justify-center text-white font-bold"
                animate={{
                  y: [12, -8, 12],
                  rotate: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                💫
              </motion.div>

              {/* Freshly App Image with Enhanced Effects */}
              <motion.div
                className="relative"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/assets/freshly-app-mockups.png"
                  alt="Freshly app mobile mockups showcasing our mobile development expertise"
                  width={1200}
                  height={800}
                  className="object-contain w-full h-auto transform hover:scale-[1.02] transition-transform duration-700"
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent pointer-events-none"
                  style={{ transform: "skewX(-45deg)" }}
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 6,
                    ease: "easeInOut",
                  }}
                />

                {/* Mobile-Optimized App Highlight Badges - Better Positioned */}
                <motion.div
                  className="absolute top-6 left-1 sm:left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-md p-1 sm:p-2 shadow-lg border border-white/50 max-w-[60px] sm:max-w-[100px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <div className="font-semibold text-pink-600 dark:text-pink-400 text-[8px] sm:text-xs">Seamless</div>
                  <div className="font-bold text-slate-800 dark:text-white text-[9px] sm:text-xs">UX</div>
                </motion.div>

                <motion.div
                  className="absolute top-1/2 right-0 sm:right-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-md p-1 sm:p-2 shadow-lg border border-white/50 max-w-[65px] sm:max-w-[110px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="font-semibold text-emerald-600 dark:text-emerald-400 text-[8px] sm:text-xs">Efficient</div>
                  <div className="font-bold text-slate-800 dark:text-white text-[9px] sm:text-xs">Builds</div>
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-2 sm:left-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-md p-1 sm:p-2 shadow-lg border border-white/50 max-w-[70px] sm:max-w-[130px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <div className="font-semibold text-indigo-600 dark:text-indigo-400 text-[8px] sm:text-xs">Faster Time</div>
                  <div className="font-bold text-slate-800 dark:text-white text-[8px] sm:text-xs">to Market</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
