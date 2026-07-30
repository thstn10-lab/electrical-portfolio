import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Strengths.css";

const strengths = [
  {
    label: "The approach",
    title: "자신감 — 미경험 업무도 자료로 돌파",
    body: "아직 경험하지 못한 업무를 할당받아도 관련 자료를 스스로 찾아 독학하고, 설계에 바로 적용합니다. 해상풍력 ONS 실시설계가 대표적입니다.",
    tone: "problem",
  },
  {
    label: "The delivery",
    title: "책임감 — 맡은 업무는 끝까지 완수",
    body: "한 번 맡은 업무는 중도 포기 없이 완성합니다. 태양광 19개소의 허가부터 사용전검사·완공까지 일괄 수행한 경험이 이를 뒷받침합니다.",
    tone: "solution",
  },
  {
    label: "The team",
    title: "화합 — 팀 역할에 맞는 실행",
    body: "팀의 존재를 중요하게 여기며, 각 위치에 맞는 역할을 인지합니다. 변전팀 설계 담당으로서 맡은 모듈을 충실히 소화합니다.",
    tone: "team",
  },
];

export function Strengths() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="strengths section" id="strengths" ref={ref}>
      <div className="container">
        <motion.div
          className="strengths__head"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Strengths</span>
          <h2 className="section-title">면접관이 바로 읽는 핵심 강점</h2>
        </motion.div>

        <div className="strengths__list">
          {strengths.map((item, i) => (
            <motion.article
              key={item.title}
              className={`strengths__card strengths__card--${item.tone}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 + i * 0.08 }}
            >
              <span>{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
