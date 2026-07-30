import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Career.css";

const careers = [
  {
    company: "영인에너지솔루션(주)",
    role: "변전팀 · 설계",
    period: "2023.05 — 재직 중",
    points: [
      "해상풍력 ONS 기본·실시 설계 담당",
      "케이블 굵기 선정, 접지선·케이블 트레이 설계 완료",
    ],
  },
  {
    company: "이정이앤씨(주)",
    role: "설계팀",
    period: "2019.04 — 2022.05",
    points: [
      "태양광 발전소 전기 설계 및 인허가 실무",
      "부산산업태양광 19개소(11MW) 허가·설계·검사 완공",
    ],
  },
];

export function Career() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="career section" id="career" ref={ref}>
      <div className="container career__grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">경력 타임라인</h2>
          <p className="section-lead">
            태양광 설계·인허가에서 시작해, 해상풍력 변전 설계로 영역을
            확장했습니다.
          </p>
        </motion.div>

        <div className="career__timeline">
          {careers.map((item, i) => (
            <motion.article
              key={item.company}
              className="career__item"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <div className="career__dot" aria-hidden="true" />
              <div className="career__card">
                <div className="career__card-top">
                  <h3>{item.company}</h3>
                  <span>{item.period}</span>
                </div>
                <p className="career__role">{item.role}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
