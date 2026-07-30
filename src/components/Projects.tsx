import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Projects.css";

const projects = [
  {
    company: "이정이앤씨(주)",
    period: "2020.08 — 2021.04",
    status: "완공",
    title: "부산산업태양광",
    summary:
      "부산 지역 태양광 발전소 19개소(11MW)의 발전사업허가, 공사계획신고, 전기설계 및 사용전검사를 수행했습니다.",
    tags: ["발전사업허가", "공사계획신고", "전기설계", "사용전검사"],
    highlight: "19개소 · 11MW",
    tone: "sage",
  },
  {
    company: "영인에너지솔루션(주)",
    period: "2024.04 — 2025.10",
    status: "진행",
    title: "해상풍력 ONS 설계",
    summary:
      "변전팀에서 해상풍력발전소 ONS 기본·실시 설계를 담당합니다. 케이블 굵기 선정, 접지선 및 케이블 트레이 설계를 완료했습니다.",
    tags: ["ONS 기본설계", "실시설계", "케이블", "접지", "트레이"],
    highlight: "케이블 · 접지 · 트레이",
    tone: "sky",
  },
];

export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects__head"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">대표 프로젝트</h2>
          <p className="section-lead">
            인허가부터 완공, 해상풍력 ONS 실시설계까지 — 숫자와 역할이 분명한
            성과 중심으로 정리했습니다.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={`project-card project-card--${project.tone}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
            >
              <div className="project-card__top">
                <div>
                  <p className="project-card__company">{project.company}</p>
                  <h3>{project.title}</h3>
                </div>
                <span className="project-card__status">{project.status}</span>
              </div>

              <p className="project-card__period">{project.period}</p>
              <p className="project-card__summary">{project.summary}</p>

              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-card__highlight">
                <span>Key result</span>
                <strong>{project.highlight}</strong>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
