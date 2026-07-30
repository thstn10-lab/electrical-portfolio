import { motion } from "framer-motion";
import "./Hero.css";

const tags = [
  "태양광",
  "해상풍력 ONS",
  "변전 설계",
  "발전사업허가",
  "사용전검사",
  "케이블 설계",
  "접지 설계",
  "AutoCAD",
];

export function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero__grid">
        <div className="hero__left">
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1>
              정확한 설계.
              <br />
              완결된 현장.
            </h1>
            <p>
              태양광·해상풍력 ONS 전기 설계 엔지니어. 허가부터 검사까지,
              맡은 설계는 끝까지 완수합니다.
            </p>
          </motion.div>

          <motion.a
            className="btn btn-block hero__cta"
            href="#projects"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            프로젝트 보기
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </motion.a>
        </div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__stage">
            <motion.article
              className="float-card float-card--cad"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <header>
                <span className="float-card__badge">CAD</span>
                <strong>AutoCAD</strong>
              </header>
              <div className="float-card__drawing" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <p>도면 작성 수준 · 상</p>
            </motion.article>

            <motion.article
              className="float-card float-card--calc"
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 6.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            >
              <header>
                <span className="float-card__badge">CALC</span>
                <strong>설계계산서</strong>
              </header>
              <ul className="float-card__rows">
                <li>
                  <span>케이블 굵기</span>
                  <em>완료</em>
                </li>
                <li>
                  <span>접지선</span>
                  <em>완료</em>
                </li>
                <li>
                  <span>트레이</span>
                  <em>완료</em>
                </li>
              </ul>
            </motion.article>

            <motion.article
              className="float-card float-card--permit"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              <header>
                <span className="float-card__badge">FLOW</span>
                <strong>인허가 · 검사</strong>
              </header>
              <div className="float-card__flow" aria-hidden="true">
                <span>허가</span>
                <i />
                <span>신고</span>
                <i />
                <span>설계</span>
                <i />
                <span>검사</span>
              </div>
              <p>19개소 · 11MW 완공</p>
            </motion.article>

            <svg
              className="hero__connectors"
              viewBox="0 0 420 360"
              aria-hidden="true"
            >
              <path
                d="M120 95 C160 140, 200 150, 250 180"
                fill="none"
                stroke="rgba(15,62,23,0.28)"
                strokeWidth="1.5"
                strokeDasharray="5 6"
              />
              <path
                d="M250 210 C210 250, 170 270, 140 300"
                fill="none"
                stroke="rgba(15,62,23,0.28)"
                strokeWidth="1.5"
                strokeDasharray="5 6"
              />
            </svg>
          </div>
        </motion.div>
      </div>

      <div className="hero__marquee" aria-label="전문 분야">
        <div className="hero__marquee-track">
          {[...tags, ...tags].map((tag, i) => (
            <span key={`${tag}-${i}`}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
