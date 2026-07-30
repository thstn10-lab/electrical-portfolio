import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Stats.css";

const stats = [
  { value: "11MW", label: "태양광 발전 규모" },
  { value: "19", label: "발전소 개소 · 완공" },
  { value: "4.3", label: "학점 / 4.5" },
  { value: "ONS", label: "해상풍력 설계 담당" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="stats section" ref={ref} aria-label="주요 성과">
      <div className="container stats__grid">
        {stats.map((item, i) => (
          <motion.article
            key={item.label}
            className="stats__item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
