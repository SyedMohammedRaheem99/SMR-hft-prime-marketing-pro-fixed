import Link from 'next/link'
import { projects } from '../utils/projects'

export default function FeaturedProjects(){
  return (
    <section className="py-12">
      <div className="container">
        <h3 className="text-xl font-semibold">Featured Projects</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {projects.map(p=> (
            <Link key={p.id} href={'/case-studies/'+p.slug}>
              <a className="block rounded-xl overflow-hidden glass p-4">
                <img src={p.heroImage} alt={p.title} className="w-full h-40 object-cover" />
                <div className="mt-3 font-semibold">{p.title}</div>
                <div className="text-sm text-slate-400">{p.summary}</div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}