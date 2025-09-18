// pages/case-studies/[slug].js - Simple Working Version
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const projects = {
  "master-with-ai": {
    title: "Master with AI",
    description: "AI-powered learning platform delivering instant, no-fluff courses."
  },
  "code-review-ai": {
    title: "Code Review AI", 
    description: "Intelligent code optimization platform."
  },
  "interior-design-portfolio": {
    title: "Interior Design Portfolio",
    description: "Stunning portfolio website for interior designers."
  },
  "freshly-mobile-app": {
    title: "Freshly App",
    description: "Fresh produce delivery app connecting users with local farmers."
  }
};

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/#work">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">
              ← Back to Projects
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Case Study</title>
      </Head>

      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/#work">
            <button className="mb-8 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              ← Back to Projects
            </button>
          </Link>
          
          <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
          <p className="text-xl text-gray-600 mb-8">{project.description}</p>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <p>Detailed case study coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
