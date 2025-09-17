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
    tech: ["React", "Node.js", "AI/ML", "Docker", "GitHub API", "AWS Lambda", "PostgreSQL"],
    timeline: "3 months",
    client: "Enterprise Development Teams",
    metric: { value: "-80%", label: "Production Bugs" },
    
    description: "Code Review AI transforms the development process by providing intelligent, automated code analysis that catches issues before they reach production. Our platform combines advanced AI with industry best practices to optimize code quality, security, and performance automatically.",
    
    challenges: [
      "Analyzing complex, multi-language codebases with high accuracy and contextual understanding",
      "Providing actionable, specific improvement suggestions rather than generic warnings",
      "Integrating seamlessly with existing development workflows without disrupting team productivity",
      "Handling diverse coding styles and frameworks across different programming languages",
      "Scaling analysis capabilities to support enterprise-level codebases and team sizes"
    ],
    
    solutions: [
      "Built advanced static analysis engine powered by machine learning trained on millions of code repositories",
      "Created intelligent suggestion system that provides contextual, actionable recommendations with code examples",
      "Developed seamless CI/CD pipeline integration with support for GitHub, GitLab, and Bitbucket workflows", 
      "Implemented multi-language parsing engine supporting 15+ programming languages and frameworks",
      "Engineered scalable cloud architecture supporting enterprise codebases with millions of lines of code"
    ],
    
    features: [
      "🔍 Automated Code Analysis - Deep analysis of code quality, security, and performance issues",
      "🚨 Real-time Issue Detection - Catch bugs, vulnerabilities, and anti-patterns instantly",
      "💡 Smart Optimization Suggestions - Get specific, actionable recommendations with examples",
      "🔧 CI/CD Pipeline Integration - Seamlessly integrate with your existing development workflow",
      "📊 Code Quality Metrics - Track code health with comprehensive quality scoring",
      "🛡️ Security Vulnerability Scanning - Detect security issues before they reach production",
      "📝 Detailed Review Reports - Get comprehensive analysis reports for stakeholders",
      "⚡ Lightning-Fast Processing - Analyze thousands of lines of code in seconds",
      "🔄 Continuous Monitoring - Monitor code quality across all branches and commits",
      "👥 Team Collaboration Tools - Share insights and track improvements across your team"
    ],
    
    results: [
      "80% reduction in production bugs across all client development teams",
      "60% faster code review process, allowing teams to ship features more quickly",
      "40% improvement in overall code maintainability and technical debt reduction",
      "Used by 500+ development teams globally, from startups to Fortune 500 companies",
      "92% of critical security vulnerabilities caught before reaching production environments",
      "Average code quality scores improved by 35% within first month of implementation"
    ],
    
    testimonial: {
      text: "Code Review AI has become an essential part of our development process. It catches subtle issues that even our senior developers miss and has dramatically improved our code quality. The AI suggestions are incredibly accurate and always actionable.",
      author: "Mike Johnson", 
      role: "Lead Developer at TechCorp Solutions"
    }
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
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS", "Vercel", "Cloudinary"],
    timeline: "2 months", 
    client: "Luxury Interior Design Studio",
    metric: { value: "+250%", label: "Client Inquiries" },
    
    description: "A visually stunning, conversion-focused portfolio website that transforms how interior designers showcase their work. Built with immersive galleries, seamless user experience, and strategic design elements that convert visitors into high-value clients consistently.",
    
    challenges: [
      "Showcasing high-resolution interior design images while maintaining fast loading speeds across devices",
      "Creating immersive, magazine-quality project galleries that engage visitors emotionally", 
      "Optimizing the mobile viewing experience for design portfolios without compromising visual impact",
      "Building a content management system that allows easy project updates without technical knowledge",
      "Implementing SEO strategies specific to local interior design market and luxury clientele"
    ],
    
    solutions: [
      "Implemented advanced image optimization with progressive loading and WebP format conversion",
      "Created interactive before/after project showcases with smooth animations and zoom capabilities",
      "Built responsive design system with touch-friendly galleries optimized for mobile viewing",
      "Developed intuitive CMS integration allowing drag-and-drop project management and instant updates",
      "Engineered local SEO optimization targeting high-value interior design keywords and local markets"
    ],
    
    features: [
      "🖼️ Immersive Project Galleries - Showcase designs with magazine-quality presentation",
      "📱 Mobile-Optimized Viewing - Perfect experience across all devices and screen sizes", 
      "🎨 Interactive Before/After Sliders - Dramatic project transformations with smooth transitions",
      "💬 Client Testimonial System - Build trust with authentic client success stories",
      "📞 Integrated Contact Forms - Capture leads with strategically placed conversion points",
      "🔍 Advanced Image Optimization - Lightning-fast loading without compromising quality",
      "📊 Analytics Integration - Track visitor behavior and optimize conversion paths",
      "⚡ Content Management System - Easy project updates without technical knowledge",
      "🎯 SEO Optimization - Rank higher for local interior design searches",
      "🏆 Award-Winning Design - Modern, luxury aesthetic that reflects design expertise"
    ],
    
    results: [
      "250% increase in qualified client inquiries within first three months of launch",
      "40% longer average session duration indicating higher visitor engagement", 
      "90% improvement in mobile conversion rates compared to previous portfolio site",
      "Featured in top interior design websites and industry publications",
      "65% of new clients now discover the studio through the website vs referrals",
      "Average project value increased by 35% due to improved brand perception"
    ],
    
    testimonial: {
      text: "This portfolio website completely transformed my interior design business. The quality of inquiries has improved dramatically, and I'm consistently booking higher-value projects. Clients often mention how impressed they were by the website before even meeting me.",
      author: "Emma Rodriguez",
      role: "Principal Interior Designer"
    }
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
    tech: ["React Native", "Node.js", "MongoDB", "Stripe", "Google Maps API", "Firebase", "AWS"],
    timeline: "5 months",
    client: "Fresh Food Startup Network", 
    metric: { value: "+400%", label: "Daily Orders" },
    
    description: "Freshly App revolutionizes healthy eating by connecting health-conscious consumers directly with local farmers for daily fresh produce delivery. The app combines convenient ordering, habit tracking, and personalized nutrition guidance to make healthy eating effortless and sustainable.",
    
    challenges: [
      "Building real-time inventory management system synchronized across multiple local farmers and suppliers",
      "Creating seamless delivery scheduling that coordinates with local farmer harvest cycles and delivery routes",
      "Developing gamified habit tracking system that motivates long-term healthy eating behaviors", 
      "Integrating complex payment processing supporting multiple vendors while maintaining simple user experience",
      "Ensuring food safety and quality standards while scaling across multiple geographic regions"
    ],
    
    solutions: [
      "Implemented intelligent inventory management system with real-time farmer updates and predictive ordering",
      "Built advanced delivery route optimization using machine learning to coordinate farmer schedules with user preferences",
      "Created engaging habit tracking system with rewards, challenges, and personalized nutrition recommendations",
      "Developed sophisticated multi-vendor payment processing with automatic farmer payouts and transparent pricing",
      "Engineered comprehensive quality assurance system with farmer verification and user feedback integration"
    ],
    
    features: [
      "🥬 Fresh Produce Catalog - Browse seasonal, locally-sourced fruits and vegetables daily",
      "📅 Flexible Delivery Scheduling - Schedule deliveries that fit your lifestyle and preferences",
      "🎯 Daily Habit Tracking - Monitor healthy eating goals with gamified progress tracking", 
      "🚚 Real-time Delivery Tracking - Know exactly when your fresh produce will arrive",
      "💳 Secure Payment Processing - Safe, simple payments supporting multiple local vendors",
      "👨‍🌾 Local Farmer Profiles - Connect with and support farmers in your community",
      "🏆 Healthy Lifestyle Rewards - Earn points and unlock benefits for consistent healthy choices",
      "📊 Nutrition Analytics - Track nutritional intake and receive personalized recommendations",
      "🔔 Smart Notifications - Reminders for orders, deliveries, and healthy eating goals",
      "🌱 Sustainability Tracking - Monitor your environmental impact through local sourcing"
    ],
    
    results: [
      "400% increase in daily orders within first three months across all launch cities",
      "25,000+ active users generating consistent revenue across 5 metropolitan areas",
      "4.8/5 app store rating with over 1,000+ verified user reviews and testimonials",
      "85% user retention rate after first month, indicating strong product-market fit",
      "Average order value increased by 45% through personalized recommendations and habit tracking",
      "Partnered with 150+ local farmers creating sustainable income streams in rural communities"
    ],
    
    testimonial: {
      text: "Freshly App has completely transformed how my family eats. Getting farm-fresh produce delivered daily is so convenient, and the habit tracking keeps us motivated to make healthy choices. My kids actually get excited about eating vegetables now!",
      author: "David Park",
      role: "Health-Conscious Parent & Fitness Enthusiast"
    }
  }
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
