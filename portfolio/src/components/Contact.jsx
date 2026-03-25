import { useState, useRef, useEffect } from "react";
import { ME } from "../data/portfolioData";
import "./Contact.css";

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

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all required fields.");
      return;
    }
    setError("");
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contacts = [
    { icon: "📧", label: "Email",    value: ME.email,    href: `mailto:${ME.email}` },
    { icon: "💻", label: "GitHub",   value: ME.github.replace("https://",""),  href: ME.github },
    { icon: "🔗", label: "LinkedIn", value: ME.linkedin.replace("https://",""), href: ME.linkedin },
    { icon: "🎯", label: "Fiverr",   value: ME.fiverr.replace("https://",""),  href: ME.fiverr },
  ];

  return (
    <section id="Contact" className="contact" ref={ref}>
      <div className={`contact-inner ${inView ? "visible" : ""}`}>
        <div className="section-tag">04 — Contact</div>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="contact-sub">
          Got a project? I'm open for freelance work. Let's build something great.
        </p>

        <div className="contact-grid">
          {/* Form */}
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="form-input"
                />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input
                type="text"
                placeholder="Project inquiry..."
                value={form.subject}
                onChange={e => setForm({ ...form, subject: e.target.value })}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Message *</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="form-input"
              />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button
              onClick={handleSubmit}
              className={`submit-btn ${sent ? "sent" : ""}`}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>

          {/* Info */}
          <div className="contact-info">
            <div className="contact-links">
              {contacts.map(c => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="contact-item">
                  <span className="contact-icon">{c.icon}</span>
                  <div>
                    <div className="contact-label">{c.label}</div>
                    <div className="contact-value">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="hire-card">
              <div className="hire-dot" />
              <div>
                <p className="hire-title">Available for Projects</p>
                <p className="hire-desc">React apps, MERN stack, REST APIs, UI/UX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
