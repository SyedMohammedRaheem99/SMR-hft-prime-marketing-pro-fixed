// components/FeaturedProjects.js
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import projects from "../utils/projects";

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  // Get unique categories for filter buttons
  const categories = ["all", ...new Set(projects.map(p => p.category || "web"))];

  useEffect(() => {
    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => (p.category || "web") === filter));
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

          {/* Filter Buttons */}
          <motion.div
            variants={titleVariants}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
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
          key={filter} // Re-animate when filter changes
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
                        className="absolute inset-0"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Image
                          src={project.heroImage}
                          alt={project.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                          className="transition-all duration-500 group-hover:brightness-110"
                        />
                      </motion.div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm border border-white/50">
                          {project.category || "Web"}
                        </span>
                      </div>

                      {/* View Project Button - Appears on Hover */}
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

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-slate-200 dark:border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { label: "Projects Completed", value: "50+", icon: "🎯" },
            { label: "Happy Clients", value: "25+", icon: "😊" },
            { label: "Years Experience", value: "5+", icon: "📈" },
            { label: "Technologies", value: "15+", icon: "⚡" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
