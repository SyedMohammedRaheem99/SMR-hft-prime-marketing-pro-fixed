// components/FeaturedProjects.js - Enhanced Step 1
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: "master-ai",
    slug: "master-with-ai",
    title: "Master with AI",
    summary: "Revolutionary AI-powered learning platform delivering instant, no-fluff courses with real-world results through personalized AI tutoring.",
    heroImage: "/assets/masterai1.png",
    tech: ["Next.js", "AI/ML", "OpenAI", "Stripe"],
    timeline: "4 months",
    metric: { value: "+300%", label: "Learning Speed" }
  },
  {
    id: "code-review-ai",
    slug: "code-review-ai", 
    title: "Code Review AI",
    summary: "Intelligent code optimization platform that analyzes, reviews, and enhances code quality before deployment using advanced AI algorithms.",
    heroImage: "/assets/codereviewai1.png",
    tech: ["React", "Node.js", "AI/ML", "Docker"],
    timeline: "3 months",
    metric: { value: "-80%", label: "Production Bugs" }
  },
  {
    id: "interior-portfolio",
    slug: "interior-design-portfolio",
    title: "Interior Design Portfolio", 
    summary: "Stunning portfolio website for interior designers showcasing projects with immersive galleries and client testimonials.",
    heroImage: "/assets/interior1.png",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    timeline: "2 months",
    metric: { value: "+250%", label: "Client Inquiries" }
  },
  {
    id: "freshly-app",
    slug: "freshly-mobile-app",
    title: "Freshly App",
    summary: "Fresh produce delivery app connecting users with local farmers for daily fresh fruits, vegetables, and healthy lifestyle habits.",
    heroImage: "/assets/freshly-app-mockups.png",
    tech: ["React Native", "Node.js", "MongoDB", "Stripe"],
    timeline: "5 months",
    metric: { value: "+400%", label: "Daily Orders" }
  }
];

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);

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
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="work" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Our Portfolio</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Featured
            <span className="block">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Discover our latest work and see how we've helped businesses transform their digital presence with cutting-edge solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Link href={`/case-studies/${project.slug}`}>
                <div className="relative h-full bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50">
                  
                  {/* Project Image */}
                  <div className="relative w-full h-56 overflow-hidden bg-slate-100 dark:bg-slate-700">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
                      <button className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-full font-semibold shadow-xl transform hover:scale-105 transition-all duration-300">
                        View Project →
                      </button>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">
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

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Timeline */}
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {project.timeline}
                    </div>
                  </div>

                  {/* Bottom highlight */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Link>

              {/* Project Number Badge */}
              <motion.div
                className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold text-sm flex items-center justify-center shadow-lg z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <span>🚀</span>
            View All Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
