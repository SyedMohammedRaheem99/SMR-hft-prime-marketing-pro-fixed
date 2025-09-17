// components/FeaturedProjects.js - Final Complete Version
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Complete projects data with all images and comprehensive content
const projectsData = [
  {
    id: "master-ai",
    slug: "master-with-ai", 
    title: "Master with AI",
    category: "ai",
    summary: "Revolutionary AI-powered learning platform delivering instant, no-fluff courses with real-world results through personalized AI tutoring.",
    heroImage: "/assets/masterai1.png",
    images: [
      "/assets/masterai1.png",
      "/assets/masterai2.png", 
      "/assets/masterai3.png",
      "/assets/masterai4.png",
      "/assets/masterai5.png",
      "/assets/masterai6.png",
      "/assets/masterai7.png"
    ],
    tech: ["Next.js", "AI/ML", "OpenAI GPT-4", "Stripe", "PostgreSQL", "Tailwind CSS"],
    timeline: "4 months",
    client: "EdTech Innovation Labs",
    metric: { value: "+300%", label: "Learning Speed" }
  },
  {
    id: "code-review-ai",
    slug: "code-review-ai",
    title: "Code Review AI", 
    category: "code",
    summary: "Intelligent code optimization platform that analyzes, reviews, and enhances code quality before deployment using advanced AI algorithms.",
    heroImage: "/assets/codereviewai1.png",
    images: [
      "/assets/codereviewai1.png",
      "/assets/codereviewai2.png",
      "/assets/codereviewai3.png", 
      "/assets/codereviewai4.png"
    ],
    tech: ["React", "Node.js", "AI/ML", "Docker", "GitHub API", "AWS Lambda"],
    timeline: "3 months",
    client: "Enterprise Development Teams",
    metric: { value: "-80%", label: "Production Bugs" }
  },
  {
    id: "interior-portfolio",
    slug: "interior-design-portfolio", 
    title: "Interior Design Portfolio",
    category: "design",
    summary: "Stunning portfolio website for interior designers showcasing projects with immersive galleries and client testimonials.",
    heroImage: "/assets/interior1.png",
    images: [
      "/assets/interior1.png",
      "/assets/interior2.png"
    ],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS", "Vercel"],
    timeline: "2 months", 
    client: "Luxury Interior Design Studio",
    metric: { value: "+250%", label: "Client Inquiries" }
  },
  {
    id: "freshly-app",
    slug: "freshly-mobile-app",
    title: "Freshly App",
    category: "mobile",
    summary: "Fresh produce delivery app connecting users with local farmers for daily fresh fruits, vegetables, and healthy lifestyle habits.",
    heroImage: "/assets/freshly-app-mockups.png", 
    images: [
      "/assets/freshly-app-mockups.png",
      "/assets/freshly-1.png",
      "/assets/freshly-2.png",
      "/assets/freshly-3.png",
      "/assets/freshly-4.png", 
      "/assets/freshly-5.png",
      "/assets/freshly-6.png"
    ],
    tech: ["React Native", "Node.js", "MongoDB", "Stripe", "Google Maps API"],
    timeline: "5 months",
    client: "Fresh Food Startup Network", 
    metric: { value: "+400%", label: "Daily Orders" }
  }
];

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  // Enhanced categories for your specific projects
  const categories = [
    { id: "all", label: "All Projects", icon: "🚀" },
    { id: "ai", label: "Master with AI", icon: "🤖" },
    { id: "code", label: "Code Review AI", icon: "💻" },
    { id: "design", label: "Interior Design", icon: "🏠" },
    { id: "mobile", label: "Freshly App", icon: "📱" }
  ];

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === filter));
    }
  }, [filter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="work" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-br from-pink-100/50 to-orange-100/50 dark:from-pink-900/20 dark:to-orange-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={titleVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6"
          >
            <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
              Our Portfolio
            </span>
          </motion.div>
          
          <motion.h2
            variants={titleVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4"
          >
            Featured
            <span className="block">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </span>
          </motion.h2>
          
          <motion.p
            variants={titleVariants}
            className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Discover our latest work and see how we've helped businesses transform their digital presence with cutting-edge solutions.
          </motion.p>

          {/* Enhanced Filter Buttons */}
          <motion.div
            variants={titleVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          key={filter}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group relative"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <Link href={`/case-studies/${project.slug}`}>
                  <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50">
                    
                    {/* Project Image */}
                    <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-700">
                      <motion.div
                        className="relative w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          width={1200}
                          height={600}
                          style={{ objectFit: "cover" }}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="transition-all duration-500 group-hover:brightness-110"
                        />
                      </motion.div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Enhanced Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-white/50">
                          {project.category === 'ai' && '🤖 Master with AI'}
                          {project.category === 'code' && '💻 Code Review AI'}
                          {project.category === 'design' && '🏠 Interior Design'}
                          {project.category === 'mobile' && '📱 Freshly App'}
                          {!project.category && '🚀 Project'}
                        </span>
                      </div>

                      {/* View Project Button */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: hoveredProject === project.id ? 1 : 0,
                          scale: hoveredProject === project.id ? 1 : 0.8
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-white/50">
                          View Project →
                        </button>
                      </motion.div>

                      {/* Project Stats */}
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex gap-2">
                          {project.tech && project.tech.slice(0, 2).map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 text-xs rounded-md backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {project.title}
                        </h3>
                        
                        {/* Success Metric */}
                        {project.metric && (
                          <div className="text-right">
                            <div className="text-2xl font-bold text-emerald-600">
                              {project.metric.value}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {project.metric.label}
                            </div>
                          </div>
                        )}
                      </div>

                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                        {project.summary}
                      </p>

                      {/* Technologies Used */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech && project.tech.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.tech && project.tech.length > 3 && (
                          <span className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 text-xs rounded-full">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      {/* Project Timeline */}
                      {project.timeline && (
                        <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {project.timeline}
                          </div>
                          {project.client && (
                            <>
                              <span>•</span>
                              <div>{project.client}</div>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Bottom Shine Effect */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="shine"
                    />
                  </div>
                </Link>

                {/* Floating Project Number */}
                <motion.div
                  className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold text-sm flex items-center justify-center shadow-lg z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5, type: "spring" }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link href="/portfolio">
              <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <span>🚀</span>
                View All Projects
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </button>
            </Link>
          </motion.div>
          
          <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm">
            Discover more success stories and case studies
          </p>
        </motion.div>

        {/* Elegant Success Tagline */}
        <motion.div
          className="text-center mt-20 pt-16 border-t border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            whileInView={{ scale: [0.95, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                50+ companies
              </span>
              {" "}worldwide
            </h3>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              From startups to enterprises, we've delivered{" "}
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">game-changing solutions</span>
              {" "}using{" "}
              <span className="font-semibold text-purple-600 dark:text-purple-400">25+ cutting-edge technologies</span>
              {" "}over{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">5+ years</span>
              {" "}of innovation.
            </p>
            
            {/* Animated Highlights */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <motion.div 
                className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span>🎯</span>
                <span className="font-medium text-indigo-700 dark:text-indigo-300">99% Client Satisfaction</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span>⚡</span>
                <span className="font-medium text-purple-700 dark:text-purple-300">Lightning Fast Delivery</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <span>🚀</span>
                <span className="font-medium text-emerald-700 dark:text-emerald-300">Scalable Solutions</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
