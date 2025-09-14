// components/Services.js
import { motion } from "framer-motion";

const services = [
  {
    id: "web",
    title: "Web Development",
    desc: "React / Next.js — performant, scalable frontends and modern architecture.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M3 5h18M3 19h18M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "app",
    title: "App Development",
    desc: "Mobile-first apps with polished UX and native-feel interactions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11.5 18.5h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "review",
    title: "Code Review",
    desc: "Audits, CI gating & performance improvements to ship safer releases.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    id: "devops",
    title: "DevOps / Maintenance",
    desc: "CI/CD, monitoring and hosting — keep systems reliable and observable.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1"/>
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold">Services</h2>
        <p className="text-slate-400 mt-2">
          Full-stack engineering services for growth-focused teams.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {services.map((s) => (
            <motion.article
              key={s.id}
              variants={itemVariants}
              className="p-6 glass rounded-xl transform transition will-change-transform hover:scale-[1.02] hover:shadow-xl focus-within:shadow-xl outline-none"
              aria-labelledby={`service-${s.id}-title`}
              role="article"
            >
              <div className="flex items-start gap-4">
                <div className="flex-none p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100">
                  {s.icon}
                </div>

                <div className="min-w-0">
                  <h3 id={`service-${s.id}-title`} className="font-semibold text-lg">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 dark:text-slate-300 mt-2 text-sm">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
