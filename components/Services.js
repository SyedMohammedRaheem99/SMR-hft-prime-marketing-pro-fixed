import { motion } from 'framer-motion'

export default function Services(){
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="text-slate-400 mt-2">Full-stack engineering services for growth-focused teams.</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-6 glass rounded-xl"><h3 className="font-semibold">Web Development</h3><p className="text-slate-400">React/Next.js, scalable frontends.</p></div>
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-6 glass rounded-xl"><h3 className="font-semibold">App Development</h3><p className="text-slate-400">Mobile-first apps with great UX.</p></div>
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-6 glass rounded-xl"><h3 className="font-semibold">Code Review</h3><p className="text-slate-400">Audits, CI gating & performance.</p></div>
          <motion.div initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-6 glass rounded-xl"><h3 className="font-semibold">DevOps / Maintenance</h3><p className="text-slate-400">CI/CD, monitoring & hosting.</p></div>
        </div>
      </div>
    </section>
  )
}