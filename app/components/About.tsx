"use client";

import { useReveal } from "./useReveal";
import projectsData from "../data/projects.json";
import { Project } from "@/app/types";

const PROJECTS = projectsData as Project[];

const STATS = [
  { value: `${PROJECTS.length}+`, label: "Projects Built" },
  { value: "2+",                  label: "Years Learning" },
  { value: "∞",                   label: "Curiosity" },
];

const WHAT_I_DO = [
  { icon: "▸", title: "Frontend Development", desc: "React, Next.js, modern CSS, responsive UIs" },
  { icon: "▸", title: "Backend Development",  desc: "Node.js, Express, REST APIs, WebSockets" },
  { icon: "▸", title: "Databases",            desc: "MongoDB, MySQL, Prisma, Drizzle ORM" },
  { icon: "▸", title: "Scalable Systems",     desc: "Real-time apps, WebRTC, AI integrations" },
];

export default function About() {
  const ref = useReveal();

  return (
    <section className="bg-bg-2 py-28 px-0" id="about">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>

        {/* Top label */}
        <div className="section-tag mb-4 reveal">About Me</div>

        {/* Heading */}
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-text leading-[1.1] mb-14 reveal delay-1">
          Crafting digital<br />
          <span className="italic font-normal text-accent">experiences</span> with purpose
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-start">

          {/* Left — story */}
          <div className="reveal delay-1">
            <p className="font-body text-text-2 leading-[1.85] text-[1rem] mb-5">
              I&apos;m <strong className="text-text font-semibold">Tushar Ruhela</strong>, a passionate Full Stack
              Developer pursuing a{" "}
              <strong className="text-text font-semibold">Bachelor of Engineering in Computer Science</strong>{" "}
              from <strong className="text-text font-semibold">Chitkara University</strong>.
            </p>
            <p className="font-body text-text-2 leading-[1.85] text-[1rem] mb-5">
              I thrive on building robust, scalable web applications that tackle real-world challenges.
              Whether it&apos;s architecting a backend API, crafting smooth UI experiences, or integrating
              real-time features — I love the entire development lifecycle.
            </p>
            <p className="font-body text-text-2 leading-[1.85] text-[1rem]">
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open source, and
              constantly leveling up my skills in modern web development.
            </p>

            {/* Stats */}
            <div className="flex gap-10 mt-10 pt-8 border-t border-[var(--border)]">
              {STATS.map((s) => (
                <div key={s.label}>
                  <span className="block font-display text-[2.2rem] font-bold text-accent leading-none mb-1">
                    {s.value}
                  </span>
                  <span className="block font-body text-[0.8rem] text-text-3 font-medium uppercase tracking-wider">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — What I Do card */}
          <div className="card p-7 reveal delay-2">
            <h3 className="font-body text-[0.75rem] font-bold uppercase tracking-[0.15em] text-accent mb-6">
              What I Do
            </h3>
            <ul className="flex flex-col gap-5">
              {WHAT_I_DO.map((item) => (
                <li key={item.title} className="flex gap-4 items-start group">
                  <span className="text-accent text-[1rem] mt-0.5 shrink-0 group-hover:translate-x-1 transition-transform">
                    {item.icon}
                  </span>
                  <div>
                    <strong className="block font-body text-[0.95rem] font-semibold text-text mb-0.5">
                      {item.title}
                    </strong>
                    <p className="font-body text-[0.85rem] text-text-2">{item.desc}</p>
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
