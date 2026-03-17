"use client";

import { useReveal } from "./useReveal";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 3h7v7l-2.59-2.59L12 13.83l-1.41-1.41 6.42-6.42L14 3zm-1 2H3v16h16v-10l-2 2v6H5V7h6l2-2z" />
  </svg>
);

import projectsData from "../data/projects.json";
import { Project } from "@/app/types";

const PROJECTS = projectsData as Project[];

export default function Projects() {
  const ref = useReveal();

  return (
    <section className="bg-bg-2 py-[100px] px-0" id="projects">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-text relative inline-block mb-3 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-sm reveal">Projects</h2>
        <p className="text-text-2 mt-4 mb-12 reveal delay-1">Things I&apos;ve built</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className={`bg-surface border border-border rounded-[20px] p-7 flex flex-col gap-3.5 relative overflow-hidden transition-all hover:border-accent hover:-translate-y-1.5 hover:shadow-var(--shadow) before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-accent before:to-[#a78bfa] before:opacity-0 hover:before:opacity-100 before:transition-opacity reveal delay-${i % 3}`}>
              <div className="flex items-center justify-between">
                <span className="text-[2rem]">{project.icon}</span>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    className="w-[34px] h-[34px] flex items-center justify-center rounded-lg bg-bg-3 border border-border text-text-2 transition-all hover:border-accent hover:text-accent [&>svg]:w-[15px] [&>svg]:h-[15px]"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project.demo}
                    className="w-[34px] h-[34px] flex items-center justify-center rounded-lg bg-bg-3 border border-border text-text-2 transition-all hover:border-accent hover:text-accent [&>svg]:w-[15px] [&>svg]:h-[15px]"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <h3 className="text-[1.1rem] font-bold text-text">{project.title}</h3>
              <p className="text-[0.9rem] text-text-2 leading-[1.65] flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-md text-[0.78rem] font-semibold bg-accent-glow text-accent border border-[rgba(79,142,247,0.2)]">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
