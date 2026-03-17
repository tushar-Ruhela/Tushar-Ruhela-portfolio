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
    <section className="bg-bg py-[100px] px-0" id="skills">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-text relative inline-block mb-3 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-sm reveal">Tech Stack</h2>
        <p className="text-text-2 mt-4 mb-12 reveal delay-1">Technologies I work with</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {SKILLS.map((group, i) => (
            <div
              key={group.category}
              className={`bg-surface border border-border rounded-[20px] p-6 transition-all hover:border-accent hover:-translate-y-1 reveal delay-${i % 3}`}
            >
              <h3 className="text-[0.78rem] font-bold uppercase tracking-[1px] text-accent mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <span key={chip} className="px-3 py-1.5 rounded-md bg-bg-3 text-text-2 text-[0.83rem] font-medium border border-border transition-all hover:bg-accent hover:text-white hover:border-accent hover:-translate-y-[1px]">{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
