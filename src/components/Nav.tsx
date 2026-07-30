import { useEffect, useState } from "react";
import "./Nav.css";

const links = [
  { href: "#about", label: "소개" },
  { href: "#projects", label: "프로젝트" },
  { href: "#strengths", label: "강점" },
  { href: "#career", label: "경력" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container">
        <a className="nav__brand" href="#top" aria-label="수민 홈">
          <span className="nav__mark" aria-hidden="true" />
          <span className="nav__name">sumin</span>
        </a>

        <nav className="nav__links" aria-label="주요 메뉴">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href="#contact">
          연락하기
        </a>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? "is-open" : ""}`}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn" onClick={() => setOpen(false)}>
          연락하기
        </a>
      </div>
    </header>
  );
}
