"use client";

import { useReveal } from "./useReveal";
import projectsData from "../data/projects.json";
import { Project } from "@/app/types";
import { FaBrain } from "react-icons/fa";

const PROJECTS = projectsData as Project[];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CATEGORY_COLORS: Record<string, string> = {
  Fullstack: "rgba(196,147,58,0.15)",
  Realtime:  "rgba(74,222,128,0.1)",
  AI:        "rgba(168,85,247,0.12)",
  Frontend:  "rgba(59,130,246,0.12)",
};

export default function Projects() {
  const ref = useReveal();

  return (
    <section className="bg-bg-2 py-28 px-0" id="projects">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>

        <div className="section-tag mb-4 reveal">Portfolio</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-text leading-[1.1] mb-4 reveal delay-1">
          Things I&apos;ve<br />
          <span className="italic font-normal text-accent">built</span>
        </h2>
        <p className="font-body text-text-2 mb-16 reveal delay-1">
          A selection of projects I&apos;m proud of.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`relative bg-surface border border-[var(--border)] rounded-[var(--radius)] p-7 flex flex-col gap-4 overflow-hidden transition-all duration-300 hover:border-[rgba(196,147,58,0.3)] hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_16px_50px_rgba(0,0,0,0.6)] group reveal delay-${i % 3}`}
            >
              {/* Category color bleed */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-bl-[80px] opacity-60 transition-opacity group-hover:opacity-100"
                style={{ background: CATEGORY_COLORS[project.category] || "transparent" }}
                aria-hidden="true"
              />

              {/* Top row */}
              <div className="flex items-start justify-between relative z-10">
                <div className="w-11 h-11 flex items-center justify-center shrink-0">
                  {project.icon.startsWith('/') ? (
                    <img src={project.icon} alt={`${project.title} logo`} className="w-full h-full object-contain rounded-md" />
                  ) : project.icon === "FaBrain" ? (
                    <FaBrain className="text-4xl text-accent" />
                  ) : (
                    <span className="text-[2.2rem] leading-none">{project.icon}</span>
                  )}
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="GitHub"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-bg-3 border border-[var(--border)] text-text-2 hover:border-accent hover:text-accent transition-all"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                  {project.demo && project.demo !== "#" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Live Demo"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-bg-3 border border-[var(--border)] text-text-2 hover:border-accent hover:text-accent transition-all"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Category badge */}
              <span className="self-start font-body text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-accent border border-[rgba(196,147,58,0.25)] bg-[rgba(196,147,58,0.08)] px-2.5 py-1 rounded-md">
                {project.category}
              </span>

              {/* Title */}
              <h3 className="font-display text-[1.15rem] font-bold text-text group-hover:text-accent-light transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-body text-[0.88rem] text-text-2 leading-[1.7] flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border)]">
                {project.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 rounded-md text-[0.75rem] font-medium font-body bg-bg-3 text-text-3 border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 4 && (
                  <span className="px-2 py-1 rounded-md text-[0.75rem] font-medium font-body bg-bg-3 text-text-3 border border-[var(--border)]">
                    +{project.tags.length - 4}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
