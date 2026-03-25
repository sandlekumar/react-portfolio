import { useState, useEffect } from "react";
import { ME } from "../data/portfolioData";
import "./Hero.css";
import profilePic from "../assets/pp.jpg";


export default function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ME.roles[roleIdx];
    const speed = deleting ? 45 : 85;
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1800);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length === 0) {
          setDeleting(false);
          setRoleIdx(i => (i + 1) % ME.roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="Home" className="hero">
      {/* Animated background grid */}
      <div className="hero-grid" />
      {/* Glow orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      <div className="hero-content">
        <div className="hero-left">
          <div className="available-badge">
            <span className="badge-dot" />
            Available for freelance
          </div>

          <p className="hero-greeting">Hey there 👋 I'm</p>

          <h1 className="hero-name">{ME.name}</h1>

          <h2 className="hero-role">
            <span className="typed-text">{text}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-tagline">{ME.tagline}</p>

          <div className="hero-stack">
            {["MongoDB", "Express", "React", "Node.js"].map((s, i) => (
              <span key={s} className="stack-badge" style={{ animationDelay: `${i * 0.1}s` }}>
                {s}
              </span>
            ))}
          </div>

          <div className="hero-cta">
            <a href="#Projects" className="btn-primary">View My Work</a>
            <a href="#Contact" className="btn-outline">Hire Me →</a>
          </div>

          <div className="hero-socials">
            <a href={ME.github} target="_blank" rel="noreferrer" className="social-link" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href={ME.fiverr} target="_blank" rel="noreferrer" className="social-link" title="Fiverr">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M23.004 15.588a.995.995 0 10-1.99 0 .995.995 0 001.99 0zm-2.987 0a1.992 1.992 0 113.984 0 1.992 1.992 0 01-3.984 0zm-1.8.558V13.15h-.849v-.88h.849v-1.308h1.033v1.308h1.264v.88h-1.264v2.796c0 .44.228.678.635.678.243 0 .453-.06.626-.18l.274.822c-.273.18-.636.28-1.077.28-.79 0-1.491-.47-1.491-1.398zm-4.659-2.998c0-1.12.547-1.787 1.508-1.787.961 0 1.508.667 1.508 1.787 0 1.12-.547 1.787-1.508 1.787-.961 0-1.508-.667-1.508-1.787zm3.985 0v-2.998h-1.033v.7c-.3-.456-.785-.785-1.412-.785-1.264 0-2.086 1.01-2.086 3.083 0 2.071.822 3.082 2.086 3.082.627 0 1.112-.329 1.412-.785v.7h1.033v-2.997zm-6.065-3.178c0-.36.288-.647.647-.647.36 0 .647.288.647.647 0 .36-.288.647-.647.647a.65.65 0 01-.647-.647zm-.06 6.176V13.15h-.849v-.88h.849v-1.308h1.033v1.308h1.264v.88h-1.264v2.796c0 .44.228.678.635.678.243 0 .453-.06.626-.18l.274.822c-.273.18-.636.28-1.077.28-.79 0-1.491-.47-1.491-1.398zm-3.19-2.998c0-1.12.547-1.787 1.508-1.787.961 0 1.508.667 1.508 1.787 0 1.12-.547 1.787-1.508 1.787-.961 0-1.508-.667-1.508-1.787zm3.985 0v-2.998h-1.033v.7c-.3-.456-.785-.785-1.412-.785-1.264 0-2.086 1.01-2.086 3.083 0 2.071.822 3.082 2.086 3.082.627 0 1.112-.329 1.412-.785v.7h1.033v-2.997z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="profile-wrapper">
            <div className="profile-ring" />
            <div className="profile-img-box">
              {/* Replace src with your actual photo */}
              <img
                src={profilePic}
                alt="Sandle Kumar"
                className="profile-img"
              />
            </div>
            <div className="floating-badge badge-mern">MERN</div>
            <div className="floating-badge badge-react">⚛ React</div>
            <div className="floating-badge badge-node">Node.js</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
