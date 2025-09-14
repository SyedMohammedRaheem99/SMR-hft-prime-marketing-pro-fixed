// components/Services.js
import { motion } from "framer-motion";

const services = [
  {
    id: "web",
    title: "Web Development",
    desc: "React / Next.js — high-performance, SEO-friendly scalable frontends.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 5h18M3 12h18M3 19h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "app",
    title: "App Development",
    desc: "Mobile-first apps — smooth, native-feel UX and efficient builds.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "review",
    title: "Code Review",
    desc: "Audits, CI gating & performance optimization to ship safely.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "devops",
    title: "DevOps / Maintenance",
    desc: "CI/CD, monitoring & hosting — always-on systems and quick rollback.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="text-slate-400 mt-2 max-w-xl">
          Full-stack engineering, design and audits for growth-focused teams.
        </p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              variants={item}
              className="p-6 rounded-xl bg-white/60 dark:bg-slate-900/60 glass shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  {s.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">{s.desc}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
