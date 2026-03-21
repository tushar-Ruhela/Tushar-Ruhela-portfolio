"use client";

import { useReveal } from "./useReveal";

import { FaCode, FaServer, FaDatabase, FaTools } from "react-icons/fa";
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiTypescript, SiNextdotjs, 
  SiNodedotjs, SiExpress, SiWebrtc, SiSocketdotio, 
  SiMongodb, SiMysql, SiMongoose, SiPrisma, 
  SiGit, SiGithub, SiPostman, SiLinux, SiDocker 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const SKILLS = [
  {
    category: "Frontend",
    icon: <FaCode />,
    chips: [
      { name: "HTML5", icon: <SiHtml5 className="w-3.5 h-3.5" /> },
      { name: "CSS3", icon: <SiCss className="w-3.5 h-3.5" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-3.5 h-3.5" /> },
      { name: "React.js", icon: <SiReact className="w-3.5 h-3.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-3.5 h-3.5" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-3.5 h-3.5" /> },
    ],
  },
  {
    category: "Backend",
    icon: <FaServer />,
    chips: [
      { name: "Node.js", icon: <SiNodedotjs className="w-3.5 h-3.5" /> },
      { name: "Express.js", icon: <SiExpress className="w-3.5 h-3.5" /> },
      { name: "REST APIs", icon: <FaServer className="w-3.5 h-3.5" /> },
      { name: "WebRTC", icon: <SiWebrtc className="w-3.5 h-3.5" /> },
      { name: "Socket.io", icon: <SiSocketdotio className="w-3.5 h-3.5" /> },
    ],
  },
  {
    category: "Database",
    icon: <FaDatabase />,
    chips: [
      { name: "MongoDB", icon: <SiMongodb className="w-3.5 h-3.5" /> },
      { name: "MySQL", icon: <SiMysql className="w-3.5 h-3.5" /> },
      { name: "Mongoose", icon: <SiMongoose className="w-3.5 h-3.5" /> },
      { name: "Prisma ORM", icon: <SiPrisma className="w-3.5 h-3.5" /> },
      { name: "Drizzle", icon: <FaDatabase className="w-3.5 h-3.5" /> },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: <FaTools />,
    chips: [
      { name: "Git", icon: <SiGit className="w-3.5 h-3.5" /> },
      { name: "GitHub", icon: <SiGithub className="w-3.5 h-3.5" /> },
      { name: "VS Code", icon: <VscVscode className="w-3.5 h-3.5" /> },
      { name: "Postman", icon: <SiPostman className="w-3.5 h-3.5" /> },
      { name: "Linux", icon: <SiLinux className="w-3.5 h-3.5" /> },
      { name: "Docker", icon: <SiDocker className="w-3.5 h-3.5" /> },
    ],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="bg-bg py-28 px-0" id="skills">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>

        <div className="section-tag mb-4 reveal">Tech Stack</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-text leading-[1.1] mb-4 reveal delay-1">
          Technologies I<br />
          <span className="italic font-normal text-accent">work with</span>
        </h2>
        <p className="font-body text-text-2 mb-16 reveal delay-1">
          The tools and frameworks in my daily toolkit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.map((group, i) => (
            <div
              key={group.category}
              className={`relative bg-surface border border-[var(--border)] rounded-[var(--radius)] p-6 transition-all duration-300 hover:border-[rgba(196,147,58,0.35)] hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] reveal delay-${i % 3} group overflow-hidden`}
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-accent text-[1.1rem]">{group.icon}</span>
                <h3 className="font-body text-[0.78rem] font-bold uppercase tracking-[0.15em] text-accent">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <span
                    key={chip.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-bg-3 text-text-2 text-[0.82rem] font-medium font-body border border-[var(--border)] transition-all hover:bg-accent hover:text-bg hover:border-accent hover:-translate-y-[1px] cursor-default"
                  >
                    {chip.icon}
                    {chip.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
