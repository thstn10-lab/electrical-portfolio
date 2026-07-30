import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="footer__brand" href="#top">
          <span className="footer__mark" aria-hidden="true" />
          sumin
        </a>

        <div className="footer__cols">
          <div>
            <h4>Navigate</h4>
            <a href="#about">소개</a>
            <a href="#projects">프로젝트</a>
            <a href="#strengths">강점</a>
            <a href="#career">경력</a>
          </div>
          <div>
            <h4>Profile</h4>
            <span>전기 설계 / 팀원</span>
            <span>전기산업기사</span>
            <span>Excel · AutoCAD</span>
          </div>
          <div>
            <h4>Contact</h4>
            <a href="tel:01042390207">010-4239-0207</a>
            <a href="mailto:gkfnrudwn@naver.com">gkfnrudwn@naver.com</a>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Sumin Electrical Design Portfolio</p>
        <p>Designed in the spirit of calm, clear product systems.</p>
      </div>
    </footer>
  );
}
