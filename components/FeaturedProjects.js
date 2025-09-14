// components/FeaturedProjects.js
import Link from "next/link";
import Image from "next/image";
import projects from "../utils/projects";

export default function FeaturedProjects() {
  return (
    <section id="work" className="py-12">
      <div className="container">
        <h3 className="text-xl font-semibold">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {projects.map((p) => (
            <Link key={p.id} href={`/case-studies/${p.slug}`}>
              <a className="block rounded-xl overflow-hidden p-4 bg-white/60 dark:bg-slate-900/60 hover:shadow-xl transition transform hover:-translate-y-1">
                <div className="w-full h-40 md:h-48 relative rounded overflow-hidden bg-slate-50 dark:bg-slate-900/40">
                  <Image
                    src={p.heroImage}
                    alt={p.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
                <div className="mt-3 font-semibold">{p.title}</div>
                <div className="text-sm text-slate-400 mt-1">{p.summary}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
