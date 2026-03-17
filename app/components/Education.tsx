"use client";

import { useReveal } from "./useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section className="education section" id="education">
      <div className="container" ref={ref}>
        <h2 className="section-title reveal">Education</h2>

        <div className="edu-card reveal delay-1">
          <div className="edu-icon">🎓</div>
          <div className="edu-info">
            <h3>Bachelor of Engineering — Computer Science</h3>
            <p className="edu-school">Chitkara University</p>
            <p className="edu-dates">2023 — Present</p>
            <p className="edu-desc">
              Pursuing BE in Computer Science with a focus on software development,
              data structures, algorithms, and modern web technologies.
            </p>
          </div>
          <div className="edu-badge">CSE</div>
        </div>
      </div>
    </section>
  );
}
