"use client";

import { useReveal } from "./useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="bg-bg-2 py-[100px] px-0" id="about">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-text relative inline-block mb-3 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-sm reveal">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 items-start">
          <div className="text-text-2 leading-[1.75] reveal delay-1">
            <p className="mb-4">
              I&apos;m <strong className="text-text font-semibold">Tushar Ruhela</strong>, a passionate Full Stack Developer
              currently pursuing my <strong className="text-text font-semibold">Bachelor of Engineering in Computer Science</strong>{" "}
              from <strong className="text-text font-semibold">Chitkara University</strong>.
            </p>
            <p className="mb-4">
              I thrive on building robust, scalable web applications that tackle real-world
              challenges. Whether it&apos;s architecting a backend API, crafting smooth UI
              experiences, or integrating real-time features — I love the entire development lifecycle.
            </p>
            <p className="mb-4">
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to projects,
              and constantly leveling up my skills in modern web development.
            </p>
            <div className="flex gap-5 md:gap-8 mt-8 pt-7 border-t border-border">
              <div>
                <span className="block text-[1.8rem] font-extrabold text-accent">40+</span>
                <span className="block text-[0.8rem] text-text-3 mt-0.5 font-medium">Projects Built</span>
              </div>
              <div>
                <span className="block text-[1.8rem] font-extrabold text-accent">2+</span>
                <span className="block text-[0.8rem] text-text-3 mt-0.5 font-medium">Years Learning</span>
              </div>
              <div>
                <span className="block text-[1.8rem] font-extrabold text-accent">∞</span>
                <span className="block text-[0.8rem] text-text-3 mt-0.5 font-medium">Curiosity</span>
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-[20px] p-7 reveal delay-2">
            <h3 className="text-[0.8rem] font-semibold uppercase tracking-[0.5px] text-text-2 mb-5">What I Do</h3>
            <ul className="flex flex-col gap-[18px]">
              {[
                { icon: "🖥️", title: "Frontend Development", desc: "React, modern CSS, responsive UIs" },
                { icon: "⚙️", title: "Backend Development", desc: "Node.js, Express, REST APIs" },
                { icon: "🗄️", title: "Databases", desc: "MongoDB, SQL, database design" },
                { icon: "🚀", title: "Scalable Systems", desc: "Real-time apps, WebRTC, AI integrations" },
              ].map((item) => (
                <li key={item.title} className="flex gap-3.5 items-start">
                  <span className="text-[1.3rem] mt-0.5 shrink-0">{item.icon}</span>
                  <div>
                    <strong className="block text-[0.95rem] font-semibold text-text mb-0.5">{item.title}</strong>
                    <p className="text-[0.85rem] text-text-2">{item.desc}</p>
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
