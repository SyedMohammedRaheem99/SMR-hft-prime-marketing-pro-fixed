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
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
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
    <section className="relative min-h-screen flex items-center py-20 pt-32 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-15"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
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
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
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
          
          {/* Left side - Enhanced Text Content */}
          <div className="flex-1 max-w-2xl">
            
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/50 dark:border-blue-800/50 mb-6"
            >
              <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
                #1 Rated Development Agency
              </span>
            </motion.div>

            {/* Main Heading with Gradient Text */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] mb-8"
            >
              <span className="block text-slate-900 dark:text-white">
                We build{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                    product-grade
                  </span>
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-lg blur-xl -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [0.98, 1.02, 0.98],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </span>
              <span className="block text-slate-900 dark:text-white">
                apps and clean code
              </span>
              <span className="block">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  that scales.
                </span>
              </span>
            </motion.h1>

            {/* Enhanced Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl"
            >
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                HFT Prime Marketing
              </span>{" "}
              — we design & ship performant web and mobile products, audits and growth engineering for{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                startups
              </span>{" "}
              and{" "}
              <span className="text-purple-600 dark:text-purple-400 font-medium">
                enterprises
              </span>.
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="#contact">
                  <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                    <span className="relative flex items-center gap-2">
                      📞 Book a Free Call
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </span>
                  </button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link href="#work">
                  <button className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className="flex items-center gap-2">
                      🚀 View Our Work
                    </span>
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Trust Indicators */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white dark:border-slate-900 flex items-center justify-center text-xs font-bold text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-slate-800 dark:text-slate-200">
                    Trusted by 50+ companies
                  </div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {"★".repeat(5)} <span className="text-slate-600 dark:text-slate-400 ml-1">4.9/5</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Available for new projects</span>
              </div>
            </motion.div>
          </div>

          {/* Right side - Enhanced Laptop Mockup */}
          <motion.div
            className="w-full lg:w-[600px] xl:w-[700px] flex-none relative"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <motion.div
                className="w-[500px] h-[300px] rounded-full opacity-40 blur-3xl"
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
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
              className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl shadow-lg flex items-center justify-center text-white font-bold"
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
              className="absolute -top-4 -right-8 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-lg"
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
              className="absolute -bottom-8 -left-4 w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
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

            {/* Main Laptop Image with Enhanced Effects */}
            <motion.div
              className="relative rounded-2xl overflow-hidden"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))",
              }}
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 rounded-2xl"></div>
              
              <Image
                src="/assets/laptopmockups.png"
                alt="Stunning laptop mockups showcasing our premium development work"
                width={1400}
                height={700}
                priority
                className="object-contain w-full h-auto transform hover:scale-[1.02] transition-transform duration-700"
              />
              
              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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
            </motion.div>

            {/* Performance Metrics Floating Cards */}
            <motion.div
              className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-white/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="text-xs font-semibold text-green-600 dark:text-green-400">99% Uptime</div>
              <div className="text-lg font-bold text-slate-800 dark:text-white">Fast & Reliable</div>
            </motion.div>

            <motion.div
              className="absolute bottom-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-lg p-3 shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <div className="text-xs font-semibold text-blue-600 dark:text-blue-400">Performance Score</div>
              <div className="text-2xl font-bold text-slate-800 dark:text-white">95/100</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-400 dark:border-slate-500 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-slate-600 dark:bg-slate-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
