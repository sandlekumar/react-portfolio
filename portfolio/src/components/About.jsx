import { useRef, useEffect, useState } from "react";
import { ME } from "../data/portfolioData";
import "./About.css";

function useInView() {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

const stats = [
  { value: "7+",    label: "Projects Built" },
  { value: "2+",    label: "Years Coding"   },
  { value: "MERN",  label: "Stack"          },
  { value: "Open",  label: "For Freelance"  },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="About" className="about" ref={ref}>
      <div className={`about-content ${inView ? "visible" : ""}`}>
        <div className="section-tag">01 — About Me</div>
        <h2 className="section-title">Who I Am</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm <strong>{ME.name}</strong>, a passionate <strong>MERN Stack Developer</strong> from Tamil Nadu, India.
              I build complete web applications — from MongoDB schemas and Express APIs to beautiful React UIs.
            </p>
            <p>
              With 2+ years of hands-on coding, I've shipped projects including booking platforms, 
              management systems, and social app clones. I'm now taking my skills global through 
              freelancing on Fiverr and Upwork.
            </p>
            <div className="about-actions">
              <a href="/resume.pdf" download className="btn-resume">
                📄 Download Resume
              </a>
              <a href={ME.github} target="_blank" rel="noreferrer" className="btn-gh">
                View GitHub →
              </a>
            </div>
          </div>

          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
