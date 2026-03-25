import { useState, useEffect } from "react";
import "./Navbar.css";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(l => document.getElementById(l));
      sections.forEach(s => {
        if (s) {
          const rect = s.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) setActive(s.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#Home" className="nav-logo">
        <span className="logo-bracket">&lt;</span>
        SK
        <span className="logo-bracket">/&gt;</span>
      </a>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l}`}
            className={`nav-link ${active === l ? "active" : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
        <a href="#Contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Hire Me
        </a>
      </div>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
    </nav>
  );
}
