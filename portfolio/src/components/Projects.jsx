import { useRef, useEffect, useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import "./Projects.css";

function useInView() {
  const ref = useRef();
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) setInView(true); }, { threshold: 0.08 });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

// Project images — replace src with your actual screenshots
// Place your images in: src/assets/images/
const projectImages = {
  "Car Booking Website": "/images/car-booking.png",
  "Tea Shop CRUD App":   "/images/tea-shop.png",
  "Instagram Clone":     "/images/instagram.png",
  "Fitness Chart":       "/images/fitness.png",
  "Portfolio Website":   "/images/portfolio.png",
};

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView();
  const [imgError, setImgError] = useState(false);

  return (
    <div
      ref={ref}
      className={`project-card ${inView ? "visible" : ""} ${project.featured ? "featured" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s`, "--accent": project.color }}
    >
      <div className="project-img-wrap">
        {!imgError ? (
          <img
            src={projectImages[project.title]}
            alt={project.title}
            className="project-img"
            onError={() => setImgError(true)}
          />
        ) : (
          // Fallback if image not found — shows emoji placeholder
          <div className="project-img-placeholder">
            <span className="placeholder-emoji">{project.emoji}</span>
            <span className="placeholder-hint">Add image to<br/>public/images/</span>
          </div>
        )}
        <div className="project-overlay">
          <a href={project.live} target="_blank" rel="noreferrer" className="overlay-btn">
            Live Demo ↗
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="overlay-btn outline">
            GitHub
          </a>
        </div>
      </div>

      <div className="project-body">
        <div className="project-top">
          <span className="project-emoji">{project.emoji}</span>
          {project.featured && <span className="featured-tag">Featured</span>}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tech">
          {project.tech.map(t => (
            <span key={t} className="tech-tag">{t}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">
            GitHub →
          </a>
          <a href={project.live} target="_blank" rel="noreferrer" className="proj-link live">
            Live ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="Projects" className="projects">
      <div className="projects-header">
        <div className="section-tag">03 — Projects</div>
        <h2 className="section-title">Things I've Built</h2>
        <p className="projects-sub">
          Real projects — from idea to deployment. Each one taught me something new.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      <div className="projects-footer">
        <a href="https://github.com/sandlekumar" target="_blank" rel="noreferrer" className="see-more">
          See all projects on GitHub →
        </a>
      </div>
    </section>
  );
}
