import { motion } from 'framer-motion'

export default function Hero(){ 
  return (
    <section className="py-20">
      <div className="container flex items-center gap-8">
        <motion.div style={{flex:1}} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.6}}>
          <h1 className="text-4xl font-extrabold">We build product-grade apps and clean code that scales.</h1>
          <p className="mt-4 text-slate-500 max-w-xl">HFT Prime Marketing — technical marketing agency specialising in product engineering, design and audits.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="px-5 py-3 rounded-md bg-slate-900 text-white">Book a Free Call</a>
            <a href="/portfolio" className="px-5 py-3 rounded-md border">View Our Work</a>
          </div>
        </motion.div>
        <motion.div style={{width:420}} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
          <img src="/assets/laptopmockups.png" alt="laptop" style={{width:'100%'}}/>
        </motion.div>
      </div>
    </section>
  )
}
