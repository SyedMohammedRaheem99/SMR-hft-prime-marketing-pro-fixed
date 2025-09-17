// pages/case-studies/[slug].js - Enhanced Project Detail Page
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import projects from '../../utils/projects';
import ImageCarousel from '../../components/ImageCarousel';

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (slug) {
      const foundProject = projects.find(p => p.slug === slug);
      setProject(foundProject);
    }
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/30 dark:from-indigo-800/20 dark:to-purple-800/20 rounded-full blur-3xl"></div>
          </div>

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

              {/* Project Category */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-4">
                <span>
                  {project.category === 'ai' && '🤖'}
                  {project.category === 'code' && '💻'}
                  {project.category === 'design' && '🏠'}
                  {project.category === 'mobile' && '📱'}
                </span>
                {project.category === 'ai' && 'AI-Powered Platform'}
                {project.category === 'code' && 'Code Analysis Tool'}
                {project.category === 'design' && 'Design Portfolio'}
                {project.category === 'mobile' && 'Mobile Application'}
              </div>

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
                  <div className="text-2xl font-bold text-purple-600">{project.tech.length}+</div>
                  <div className="text-slate-600 dark:text-slate-400">Technologies</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Hero Image */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay with Play Button for Demo */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/90 text-slate-900 p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                </div>
              </div>
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
                            {project.tech.map((tech, index) => (
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
                            {project.challenges.map((challenge, index) => (
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
                            {project.solutions.map((solution, index) => (
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
                      {project.features.map((feature, index) => (
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
                      {project.results.map((result, index) => (
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
                          </div>
                          <div className="text-slate-700 dark:text-slate-300 font-medium">
                            {result}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl">
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Ready to achieve similar results?
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">
                        Let's discuss how we can transform your business with a custom solution.
                      </p>
                      <motion.button
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        📞 Start Your Project
                      </motion.button>
                    </div>
                  </div>
                )}

                {/* Gallery Tab */}
                {activeTab === 'gallery' && (
                  <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
                      Project Gallery
                    </h3>
                    
                    {/* Enhanced Image Carousel */}
                    <div className="mb-8">
                      <ImageCarousel images={project.images} />
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {project.images.map((image, index) => (
                        <motion.div
                          key={index}
                          className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(index)}
                        >
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-110"
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

        {/* Related Projects */}
        <section className="py-16 bg-slate-50 dark:bg-slate-800">
          <div className="container">
            <h3 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
              More Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link key={relatedProject.id} href={`/case-studies/${relatedProject.slug}`}>
                    <motion.div
                      className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      whileHover={{ y: -5 }}
                    >
                      <div className="relative h-48">
                        <Image
                          src={relatedProject.heroImage}
                          alt={relatedProject.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-300">
                          {relatedProject.title}
                        </h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                          {relatedProject.summary}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16">
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
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-300"
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

// Generate static paths for all projects
export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Generate static props for each project
export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}
