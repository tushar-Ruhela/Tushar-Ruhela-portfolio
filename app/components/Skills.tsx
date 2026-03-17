"use client";

import { useReveal } from "./useReveal";

const SKILLS = [
  {
    category: "Frontend",
    chips: ["HTML5", "CSS3", "JavaScript", "React.js", "TypeScript","Nextjs"],
  },
  {
    category: "Backend",
    chips: ["Node.js", "Express.js", "REST APIs", "WebRTC", "Socket.io"],
  },
  {
    category: "Database",
    chips: ["MongoDB", "MySQL", "Mongoose","Prisma ORM","Drizzle"],
  },
  {
    category: "Tools & Other",
    chips: ["Git", "GitHub", "VS Code", "Postman", "Linux"],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="skills section" id="skills">
      <div className="container" ref={ref}>
        <h2 className="section-title reveal">Tech Stack</h2>
        <p className="section-sub reveal delay-1">Technologies I work with</p>

        <div className="skills-grid">
          {SKILLS.map((group, i) => (
            <div
              key={group.category}
              className={`skill-cat reveal delay-${i % 3}`}
            >
              <h3 className="cat-title">{group.category}</h3>
              <div className="chips">
                {group.chips.map((chip) => (
                  <span key={chip} className="chip">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
