import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Skills.css";

const skills = [
  {
    title: "전기설계계산서",
    tool: "Excel",
    level: "상",
    desc: "케이블·접지 등 전기설계 산출과 계산서 작성",
  },
  {
    title: "CAD 도면",
    tool: "AutoCAD",
    level: "상",
    desc: "단선결선도, 배치도, CBD 및 기타 전기 설계 도면 작성",
  },
  {
    title: "인허가 · 검사",
    tool: "실무",
    level: "실전",
    desc: "발전사업허가, 공사계획신고, 사용전검사",
  },
];

export function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">보유 기술</h2>
        </motion.div>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.article
              key={skill.title}
              className="skills__card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.08 }}
            >
              <div className="skills__meta">
                <span>{skill.tool}</span>
                <em>{skill.level}</em>
              </div>
              <h3>{skill.title}</h3>
              <p>{skill.desc}</p>
              <div className="skills__bar" aria-hidden="true">
                <span style={{ width: skill.level === "상" ? "92%" : "78%" }} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
