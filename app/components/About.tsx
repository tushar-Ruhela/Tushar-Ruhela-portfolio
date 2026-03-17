"use client";

import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="about section" id="about">
      <div className="container" ref={ref}>
        <h2 className="section-title reveal">About Me</h2>

        <div className="about-grid">
          <div className="about-text reveal delay-1">
            <p>
              I&apos;m <strong>Tushar Ruhela</strong>, a passionate Full Stack Developer
              currently pursuing my <strong>Bachelor of Engineering in Computer Science</strong>{" "}
              from <strong>Chitkara University</strong>.
            </p>
            <p>
              I thrive on building robust, scalable web applications that tackle real-world
              challenges. Whether it&apos;s architecting a backend API, crafting smooth UI
              experiences, or integrating real-time features — I love the entire development lifecycle.
            </p>
            <p>
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to projects,
              and constantly leveling up my skills in modern web development.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-num">2+</span>
                <span className="stat-label">Years Learning</span>
              </div>
              <div className="stat">
                <span className="stat-num">∞</span>
                <span className="stat-label">Curiosity</span>
              </div>
            </div>
          </div>

          <div className="about-card reveal delay-2">
            <h3 className="about-card-title">What I Do</h3>
            <ul className="what-list">
              {[
                { icon: "🖥️", title: "Frontend Development", desc: "React, modern CSS, responsive UIs" },
                { icon: "⚙️", title: "Backend Development",  desc: "Node.js, Express, REST APIs"        },
                { icon: "🗄️", title: "Databases",            desc: "MongoDB, SQL, database design"      },
                { icon: "🚀", title: "Scalable Systems",     desc: "Real-time apps, WebRTC, AI integrations" },
              ].map((item) => (
                <li key={item.title} className="what-item">
                  <span className="what-icon">{item.icon}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
