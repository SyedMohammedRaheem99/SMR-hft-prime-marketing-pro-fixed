// components/Services.js
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    id: "web",
    title: "Web Development",
    desc: "React / Next.js — high-performance, SEO-friendly scalable frontends.",
    icon: "💻",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    darkBgColor: "from-blue-900/20 to-indigo-900/20",
    features: ["React/Next.js", "SEO Optimized", "High Performance", "Scalable Architecture"]
  },
  {
    id: "app",
    title: "App Development",
    desc: "Mobile-first apps — smooth, native-feel UX and efficient builds.",
    icon: "📱",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    darkBgColor: "from-purple-900/20 to-pink-900/20",
    features: ["Native Feel", "Smooth UX", "Cross-Platform", "Efficient Builds"]
  },
  {
    id: "review",
    title: "Code Review",
    desc: "Audits, CI gating & performance optimization to ship safely.",
    icon: "🔍",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    darkBgColor: "from-emerald-900/20 to-teal-900/20",
    features: ["Code Audits", "CI/CD Integration", "Performance Analysis", "Security Review"]
  },
  {
    id: "devops",
    title: "DevOps / Maintenance",
    desc: "CI/CD, monitoring & hosting — always-on systems and quick rollback.",
    icon: "⚙️",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    darkBgColor: "from-orange-900/20 to-red-900/20",
    features: ["CI/CD Pipeline", "24/7 Monitoring", "Cloud Hosting", "Quick Rollback"]
  },
];

const container = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    } 
  },
};

const item = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 dark:from-blue-800/20 dark:to-purple-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-pink-200/30 to-orange-200/30 dark:from-pink-800/20 dark:to-orange-800/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={titleVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2
            variants={titleVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Services
            <span className="block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                We Deliver
              </span>
            </span>
          </motion.h2>
          
          <motion.p
            variants={titleVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"
          >
            Full-stack engineering, design and audits for growth-focused teams.
            We build solutions that scale with your success.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={item}
              className="group relative"
              onHoverStart={() => setHoveredCard(service.id)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Background with Gradient Border */}
              <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-200 dark:hover:border-slate-600">
                
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="h-full rounded-2xl bg-white dark:bg-slate-800"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon Container */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgColor} dark:bg-gradient-to-br dark:${service.darkBgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 5 }}
                  >
                    <span className="text-3xl filter drop-shadow-sm">
                      {service.icon}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.bgColor} dark:bg-gradient-to-r dark:${service.darkBgColor} text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Hover Reveal: Additional Features */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredCard === service.id ? 1 : 0,
                      height: hoveredCard === service.id ? "auto" : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                      <div className="space-y-2">
                        {service.features.slice(2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Learn More Button */}
                  <motion.button
                    className={`w-full mt-6 py-3 px-4 rounded-xl font-medium text-sm bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </div>

                {/* Background Pattern */}
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 rounded-full"></div>
                </div>
              </div>

              {/* Floating Number Badge */}
              <motion.div
                className={`absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br ${service.color} text-white font-bold text-sm flex items-center justify-center shadow-lg`}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
              >
                {index + 1}
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.button
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>🚀</span>
            Start Your Project Today
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>
          
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm">
            Free consultation • No commitment required • Quick response
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator Dots */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-3">
        {services.map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600"
            initial={{ scale: 0.5, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          />
        ))}
      </div>
    </section>
  );
}
