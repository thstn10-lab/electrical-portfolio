import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Contact.css";

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__panel"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65 }}
        >
          <div className="contact__copy">
            <span className="section-label">Contact</span>
            <h2>
              설계가 필요한
              <br />
              팀에 합류합니다.
            </h2>
            <p>
              태양광·해상풍력 전기 설계, 인허가·검사 실무 경험을 바탕으로
              팀에 기여하고 싶습니다. 편하게 연락 주세요.
            </p>
          </div>

          <div className="contact__actions">
            <a className="btn btn-block" href="tel:01042390207">
              010-4239-0207
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </a>
            <a
              className="contact__mail"
              href="mailto:gkfnrudwn@naver.com"
            >
              gkfnrudwn@naver.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
