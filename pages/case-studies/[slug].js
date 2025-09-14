// pages/case-studies/[slug].js
import { useRouter } from "next/router";
import projects from "../../utils/projects";
import ImageCarousel from "../../components/ImageCarousel";
import Link from "next/link";

export default function CaseStudyPage() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  return (
    <div className="py-20">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-slate-400 mt-2">{project.summary}</p>

          <section className="mt-6 space-y-4">
            <h4 className="font-semibold">Problem</h4>
            <p className="text-slate-500">{project.problem}</p>

            <h4 className="font-semibold">Solution</h4>
            <p className="text-slate-500">{project.solution}</p>

            <h4 className="font-semibold">Features</h4>
            <ul className="list-disc ml-5 text-slate-500">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>

            <h4 className="font-semibold">Results</h4>
            <p className="text-slate-500">{project.results}</p>
          </section>

          <div className="mt-8">
            <Link href="/contact"><a className="px-4 py-2 rounded bg-slate-900 text-white">Book a call about this project</a></Link>
          </div>
        </div>

        <div>
          <ImageCarousel images={project.images} />
        </div>
      </div>
    </div>
  );
}
