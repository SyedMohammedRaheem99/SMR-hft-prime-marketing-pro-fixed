// pages/case-studies/[slug].js - Simplified Project Detail Page
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import ImageCarousel from '../../components/ImageCarousel';

// Project data - same as in FeaturedProjects
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
    metric: { value: "+300%", label: "Learning Speed" },
    
    description: "Master with AI revolutionizes online education by eliminating fluff and delivering instant, results-focused learning. Our AI tutor provides personalized step-by-step guidance, transforming complex topics into digestible, actionable insights that deliver real-world mastery in record time.",
    
    challenges: [
      "Creating truly personalized AI tutoring that adapts to individual learning styles and pace",
      "Developing algorithms that can break down complex subjects into actionable steps", 
      "Building a system that eliminates unnecessary content while maintaining comprehensive coverage",
      "Integrating multiple AI APIs to create seamless, intelligent learning experiences",
      "Ensuring scalability for thousands of concurrent AI tutoring sessions"
    ],
    
    solutions: [
      "Implemented advanced GPT-4 integration with custom training on educational methodologies",
      "Created adaptive learning algorithms that analyze user progress and adjust content complexity in real-time",
      "Built intelligent content curation system that focuses on practical, results-driven learning paths",
      "Developed real-time AI feedback system with instant assessment and course correction capabilities",
      "Engineered scalable cloud infrastructure supporting unlimited concurrent AI tutoring sessions"
    ],
    
    features: [
      "🤖 AI-Powered Personal Tutor - Get instant, personalized guidance 24/7",
      "⚡ Instant Course Generation - Create custom courses from any topic in seconds", 
      "📊 Real-time Progress Tracking - Monitor your learning journey with detailed analytics",
      "🎯 Results-Focused Learning Paths - Skip theory, focus on practical application",
      "💬 Interactive AI Chat Support - Ask questions and get immediate expert answers",
      "📱 Mobile-First Design - Learn anywhere, anytime on any device",
      "🏆 Skill Certification System - Earn verified certificates upon mastery",
      "📈 Advanced Analytics Dashboard - Track learning patterns and optimize study time",
      "🔄 Adaptive Content Difficulty - Content adjusts based on your understanding level",
      "⏱️ Time-Optimized Learning - Achieve mastery in minimum time possible"
    ],
    
    results: [
      "300% faster learning completion rates compared to traditional online courses",
      "95% course completion rate vs industry average of 15%",
      "50,000+ active learners gained practical skills within first 6 months of launch", 
      "4.9/5 average user satisfaction rating across all course categories",
      "85% of users report applying learned skills professionally within 30 days",
      "Average learning time reduced from months to weeks for complex topics"
    ],
    
    testimonial: {
      text: "Master with AI completely transformed how I approach learning. What used to take me months of sifting through irrelevant content now takes weeks of focused, practical learning. The AI tutor feels like having a personal expert mentor available 24/7.",
      author: "Sarah Chen",
      role: "Software Developer at Meta"
    }
  },
  // Add other projects here with same structure...
];

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (slug) {
      const foundProject = projectsData.find(p => p.slug === slug);
      setProject(foundProject);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 pt-20">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-300">Loading project details...</p>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📋' },
    { id: 'features', label: 'Features', icon: '⚡' },
    { id: 'results', label: 'Results', icon: '📊' },
    { id: 'gallery', label: 'Gallery', icon: '🖼️' }
  ];

  return (
    <>
      <Head>
        <title>{project.title} - Case Study | HFT Prime Marketing</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} - Case Study`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:image" content={project.heroImage} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-900 pt-20">
        
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              {/* Back Button */}
              <Link href="/#work">
                <motion.button
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors mb-8"
                  whileHover={{ x: -5 }}
                >
                  ← Back to Projects
                </motion.button>
              </Link>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Project Stats */}
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{project.timeline}</div>
                  <div className="text-slate-600 dark:text-slate-400">Timeline</div>
                </div>
                {project.metric && (
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">{project.metric.value}</div>
                    <div className="text-slate-600 dark:text-slate-400">{project.metric.label}</div>
                  </div>
                )}
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{project.tech?.length || 0}+</div>
                  <div className="text-slate-600 dark:text-slate-400">Technologies</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Image Carousel */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <ImageCarousel images={project.images} projectTitle={project.title} />
            </motion.div>
          </div>
        </section>

        {/* Tab Navigation */}
        <section className="py-8 border-b border-slate-200 dark:border-slate-700">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Tab Content */}
        <section className="py-16">
          <div className="container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Overview Tab */}
                {activeTab === 'overview' && (
                  <div className="max-w-4xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                      
                      {/* Project Description */}
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                          Project Overview
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.tech?.map((tech, index) => (
                              <span
                                key={index}
                                className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Client Testimonial */}
                        {project.testimonial && (
                          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6">
                            <div className="text-2xl text-indigo-600 mb-4">"</div>
                            <p className="text-slate-700 dark:text-slate-300 italic mb-4">
                              {project.testimonial.text}
                            </p>
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                {project.testimonial.author.charAt(0)}
                              </div>
                              <div>
                                <div className="font-semibold text-slate-900 dark:text-white">
                                  {project.testimonial.author}
                                </div>
                                <div className="text-slate-600 dark:text-slate-400 text-sm">
                                  {project.testimonial.role}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Challenges & Solutions */}
                      <div>
                        <div className="mb-8">
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                            🎯 Challenges
                          </h4>
                          <ul className="space-y-3">
                            {project.challenges?.map((challenge, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-300">{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                            ✅ Solutions
                          </h4>
                          <ul className="space-y-3">
                            {project.solutions?.map((solution, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-600 dark:text-slate-300">{solution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Features Tab */}
                {activeTab === 'features' && (
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                      Key Features & Capabilities
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {project.features?.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                          whileHover={{ y: -5 }}
                        >
                          <div className="text-lg font-semibold text-slate-900 dark:text-white">
                            {feature}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results Tab */}
                {activeTab === 'results' && (
                  <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                      Impact & Results
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      {project.results?.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 }}
                          className="text-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl"
                        >
                          <div className="text-4xl mb-4">
                            {index === 0 && '📈'}
                            {index === 1 && '🎯'}
                            {index === 2 && '👥'}
                            {index === 3 && '⭐'}
                            {index === 4 && '🚀'}
                            {index === 5 && '⏱️'}
                          </div>
                          <div className="text-slate-700 dark:text-slate-300 font-medium">
                            {result}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                      Project Gallery
                    </h3>
                    
                    {/* Large Image Carousel */}
                    <div className="mb-12">
                      <ImageCarousel images={project.images} projectTitle={project.title} />
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {project.images?.map((image, index) => (
                        <motion.div
                          key={index}
                          className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                            <div className="bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                              </svg>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Let's create something amazing together. Get in touch to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  📞 Schedule Consultation
                </motion.button>
                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-700 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  💬 Get Free Quote
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
