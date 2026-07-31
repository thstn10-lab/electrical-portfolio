import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container about__grid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">
            전기공학 기반으로, 현장까지 이어지는 설계
          </h2>
        </motion.div>

        <motion.div
          className="about__body"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p>
            경남정보대학교 전기공학과를 졸업하고 전기산업기사·변전전기원2급을
            취득했습니다. 이정이앤씨 설계팀에서 태양광 발전소의
            전기설계·인허가·사용전검사를 수행했고, 현재 영인에너지솔루션
            변전팀에서 해상풍력 ONS 기본·실시 설계를 담당하고 있습니다.
          </p>
          <div className="about__meta">
            <div>
              <span>학력</span>
              <strong>경남정보대학교 · 전기공학과</strong>
            </div>
            <div>
              <span>자격</span>
              <strong>전기산업기사 · 변전전기원2급</strong>
            </div>
            <div>
              <span>직무</span>
              <strong>전기 설계 / 팀원</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
