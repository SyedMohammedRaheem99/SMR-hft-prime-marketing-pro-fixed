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
    features: ["React/Next.js", "SEO Optimized", "High Performance", "Scalable Architecture"],
    packages: [
      {
        name: "Basic",
        price: "$2,999",
        description: "Perfect for startups and small businesses",
        features: [
          "5-page responsive website",
          "Basic SEO optimization",
          "Mobile-first design",
          "Contact form integration",
          "1 month support"
        ]
      },
      {
        name: "Professional",
        price: "$7,999",
        description: "Ideal for growing businesses",
        features: [
          "Custom web application",
          "Advanced SEO & Analytics",
          "CMS integration",
          "Payment gateway setup",
          "Performance optimization",
          "3 months support"
        ]
      },
      {
        name: "Enterprise",
        price: "$15,999+",
        description: "For large-scale applications",
        features: [
          "Complex web platform",
          "Microservices architecture",
          "Advanced security features",
          "Third-party integrations",
          "Load balancing & scaling",
          "12 months support"
        ]
      }
    ]
  },
  {
    id: "app",
    title: "App Development",
    desc: "Mobile-first apps — smooth, native-feel UX and efficient builds.",
    icon: "📱",
    color: "from-purple-500 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    darkBgColor: "from-purple-900/20 to-pink-900/20",
    features: ["Native Feel", "Smooth UX", "Cross-Platform", "Efficient Builds"],
    packages: [
      {
        name: "Basic",
        price: "$4,999",
        description: "Simple mobile app solution",
        features: [
          "Single platform (iOS or Android)",
          "5 core screens",
          "Basic UI/UX design",
          "Push notifications",
          "App store submission"
        ]
      },
      {
        name: "Professional",
        price: "$12,999",
        description: "Full-featured mobile application",
        features: [
          "Cross-platform (iOS & Android)",
          "Custom UI/UX design",
          "Backend API integration",
          "User authentication",
          "Payment processing",
          "Analytics integration"
        ]
      },
      {
        name: "Enterprise",
        price: "$25,999+",
        description: "Advanced mobile solutions",
        features: [
          "Native iOS & Android apps",
          "Complex business logic",
          "Offline functionality",
          "Advanced security",
          "Third-party integrations",
          "Ongoing maintenance"
        ]
      }
    ]
  },
  {
    id: "review",
    title: "Code Review",
    desc: "Audits, CI gating & performance optimization to ship safely.",
    icon: "🔍",
    color: "from-emerald-500 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    darkBgColor: "from-emerald-900/20 to-teal-900/20",
    features: ["Code Audits", "CI/CD Integration", "Performance Analysis", "Security Review"],
    packages: [
      {
        name: "Basic",
        price: "$1,499",
        description: "Essential code review",
        features: [
          "Code quality assessment",
          "Basic security scan",
          "Performance review",
          "Documentation review",
          "Detailed report"
        ]
      },
      {
        name: "Professional",
        price: "$3,999",
        description: "Comprehensive code audit",
        features: [
          "Deep code analysis",
          "Security vulnerability scan",
          "Performance optimization",
          "Architecture review",
          "CI/CD pipeline setup",
          "Best practices guide"
        ]
      },
      {
        name: "Enterprise",
        price: "$8,999+",
        description: "Complete system audit",
        features: [
          "Full system architecture review",
          "Advanced security audit",
          "Scalability assessment",
          "Team training sessions",
          "Custom tooling setup",
          "Ongoing consultation"
        ]
      }
    ]
  },
  {
    id: "devops",
    title: "DevOps / Maintenance",
    desc: "CI/CD, monitoring & hosting — always-on systems and quick rollback.",
    icon: "⚙️",
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    darkBgColor: "from-orange-900/20 to-red-900/20",
    features: ["CI/CD Pipeline", "24/7 Monitoring", "Cloud Hosting", "Quick Rollback"],
    packages: [
      {
        name: "Basic",
        price: "$999/mo",
        description: "Essential DevOps support",
        features: [
          "Basic monitoring setup",
          "Simple CI/CD pipeline",
          "Cloud hosting management",
          "Monthly reports",
          "Email support"
        ]
      },
      {
        name: "Professional",
        price: "$2,499/mo",
        description: "Advanced DevOps management",
        features: [
          "24/7 monitoring & alerts",
          "Advanced CI/CD workflows",
          "Auto-scaling setup",
          "Security updates",
          "Performance optimization",
          "Priority support"
        ]
      },
      {
        name: "Enterprise",
        price: "$4,999+/mo",
        description: "Complete infrastructure management",
        features: [
          "Custom infrastructure design",
          "Multi-cloud deployment",
          "Advanced security measures",
          "Disaster recovery setup",
          "Dedicated DevOps engineer",
          "24/7 phone support"
        ]
      }
    ]
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
  const [selectedService, setSelectedService] = useState(null);

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

                  {/* Learn More Button with Modal Trigger */}
                  <motion.button
                    onClick={() => setSelectedService(service)}
                    className={`w-full mt-6 py-3 px-4 rounded-xl font-medium text-sm bg-gradient-to-r ${service.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Packages & Pricing
                  </motion.button>
                </div>

                {/* Remove Background Pattern that's causing empty circles */}
                
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

              {/* Services Pricing Modal */}
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedService.bgColor} dark:bg-gradient-to-br dark:${selectedService.darkBgColor} flex items-center justify-center`}>
                    <span className="text-2xl">{selectedService.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedService.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      Choose the perfect package for your needs
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedService.packages.map((pkg, index) => (
                  <motion.div
                    key={pkg.name}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                      index === 1 
                        ? `border-gradient-to-br ${selectedService.color} bg-gradient-to-br ${selectedService.bgColor} dark:bg-gradient-to-br dark:${selectedService.darkBgColor}` 
                        : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    {/* Popular Badge */}
                    {index === 1 && (
                      <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r ${selectedService.color} text-white text-xs font-semibold rounded-full`}>
                        Most Popular
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {pkg.name}
                      </h4>
                      <p className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                        {pkg.price}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {pkg.description}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${selectedService.color} flex-shrink-0`}></div>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                        index === 1
                          ? `bg-gradient-to-r ${selectedService.color} text-white shadow-lg hover:shadow-xl`
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      Get Started
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="text-center mt-8 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Need a custom solution?
                </h4>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Let's discuss your specific requirements and create a tailored package.
                </p>
                <button className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${selectedService.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}>
                  📞 Schedule Free Consultation
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

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
