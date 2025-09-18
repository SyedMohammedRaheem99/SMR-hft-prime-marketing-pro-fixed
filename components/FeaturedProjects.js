// components/FeaturedProjects.js - Minimal Working Version
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    id: "master-ai",
    slug: "master-with-ai",
    title: "Master with AI",
    summary: "AI-powered learning platform",
    heroImage: "/assets/masterai1.png"
  },
  {
    id: "code-review-ai",
    slug: "code-review-ai", 
    title: "Code Review AI",
    summary: "Code optimization platform",
    heroImage: "/assets/codereviewai1.png"
  },
  {
    id: "interior-portfolio",
    slug: "interior-design-portfolio",
    title: "Interior Design Portfolio", 
    summary: "Portfolio website",
    heroImage: "/assets/interior1.png"
  },
  {
    id: "freshly-app",
    slug: "freshly-mobile-app",
    title: "Freshly App",
    summary: "Fresh produce delivery app",
    heroImage: "/assets/freshly-app-mockups.png"
  }
];

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/case-studies/${project.slug}`}>
              <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48 mb-4">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
