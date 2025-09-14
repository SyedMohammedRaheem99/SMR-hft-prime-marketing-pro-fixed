// components/Services.js
import { motion } from "framer-motion";

const services = [
  {
    id: "web",
    title: "Web Development",
    desc: "React / Next.js — high-performance, SEO-friendly scalable frontends.",
    icon: "💻",
  },
  {
    id: "app",
    title: "App Development",
    desc: "Mobile-first apps — smooth, native-feel UX and efficient builds.",
    icon: "📱",
  },
  {
    id: "review",
    title: "Code Review",
    desc: "Audits, CI gating & performance optimization to ship safely.",
    icon: "🔍",
  },
  {
    id: "devops",
    title: "DevOps / Maintenance",
    desc: "CI/CD, monitoring & hosting — always-on systems and quick rollback.",
    icon: "⚙️",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
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
          {services.map((s) => (
            <motion.article
              key={s.id}
              variants={item}
              className="p-6 rounded-xl bg-white/60 dark:bg-slate-900/60 shadow-sm hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="text-2xl">{s.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-slate-500 dark:text-slate-300 mt-2 text-sm">
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
