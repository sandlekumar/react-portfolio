import { useRef, useEffect, useState } from "react";
import { SKILLS } from "../data/portfolioData";
import "./Skills.css";

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

function SliderRow({ items, reverse, speed = "28s" }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="slider-outer">
      <div
        className={`slider-inner ${reverse ? "reverse" : ""}`}
        style={{ animationDuration: speed }}
      >
        {doubled.map((s, i) => (
          <div
            key={i}
            className="skill-chip"
            style={{ "--accent": s.color }}
          >
            <span className="chip-icon">{s.icon}</span>
            <span className="chip-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView();
  const frontend = SKILLS.filter(s => s.category === "Frontend");
  const backend  = SKILLS.filter(s => s.category === "Backend");
  const tools    = SKILLS.filter(s => s.category === "Tools");

  return (
    <section id="Skills" className="skills" ref={ref}>
      <div className={`skills-header ${inView ? "visible" : ""}`}>
        <div className="section-tag">02 — Skills</div>
        <h2 className="section-title">What I Work With</h2>
        <p className="skills-sub">
          Full stack MERN development — from database design to pixel-perfect UIs.
        </p>
      </div>

      <div className="sliders-wrap">
        <SliderRow items={frontend} reverse={false} speed="22s" />
        <SliderRow items={backend}  reverse={true}  speed="26s" />
        <SliderRow items={tools}    reverse={false} speed="20s" />
      </div>
    </section>
  );
}
