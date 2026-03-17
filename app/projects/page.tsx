"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import projectsData from "../data/projects.json";

interface Project {
  id: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  featured?: boolean;
}

const PROJECTS = projectsData as Project[];

const CATEGORIES = ["All", "Fullstack", "Realtime", "AI", "Frontend", "Backend", "Other"];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M14 3h7v7l-2.59-2.59L12 13.83l-1.41-1.41 6.42-6.42L14 3zm-1 2H3v16h16v-10l-2 2v6H5V7h6l2-2z" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  // Only show categories that have projects
  const usedCategories = [
    "All",
    ...Array.from(new Set(PROJECTS.map((p) => p.category))),
  ];

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-bg-2 py-[100px] px-0" style={{ minHeight: "100vh", paddingTop: "calc(var(--nav-h) + 40px)" }}>
          <div className="container mx-auto px-6 max-w-[1100px]">
            {/* Header */}
            <div className="flex items-start justify-between mb-1">
              <div>
                <h1 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-text relative inline-block mb-3 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-sm">Projects</h1>
                <p className="text-text-2 mt-4 mb-12">
                  Things I&apos;ve built &mdash; {PROJECTS.length} project{PROJECTS.length !== 1 ? "s" : ""}
                </p>
              </div>
              <div className="text-right">
                <span className="block text-[2.5rem] font-extrabold text-accent leading-none">{filtered.length}</span>
                <span className="text-[0.78rem] text-text-3 font-medium uppercase tracking-[0.5px]">showing</span>
              </div>
            </div>

            {/* Filter bar */}
            <div className="flex gap-2 flex-wrap mb-10">
              {usedCategories.map((cat) => (
                <button
                  key={cat}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-border text-[0.85rem] font-medium transition-all ${activeFilter === cat ? "bg-accent border-accent text-white" : "bg-surface text-text-2 hover:border-accent hover:text-text"}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className={`px-1.5 py-[1px] rounded-full text-[0.75rem] font-bold ${activeFilter === cat ? "bg-[rgba(255,255,255,0.25)]" : "bg-[rgba(255,255,255,0.2)]"}`}>
                      {PROJECTS.filter((p) => p.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Projects grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-15 text-text-3 text-base">
                <span>No projects in this category yet.</span>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {filtered.map((project, i) => (
                  <div
                    key={`${activeFilter}-${project.id}`}
                    className="bg-surface border border-border rounded-[20px] p-7 flex flex-col gap-3.5 relative overflow-hidden transition-all hover:border-accent hover:-translate-y-1.5 hover:shadow-var(--shadow) animate-fadeup before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px] before:bg-gradient-to-r before:from-accent before:to-[#a78bfa] before:opacity-0 hover:before:opacity-100 before:transition-opacity"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[2rem] shrink-0">{project.icon}</span>
                      <div className="flex flex-col items-end gap-1.5">
                        {project.featured && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-[3px] rounded-full bg-[rgba(250,201,21,0.15)] text-[#f59e0b] border border-[rgba(250,201,21,0.25)] text-[0.72rem] font-bold">
                            <StarIcon /> Featured
                          </span>
                        )}
                        <span className="px-2.5 py-[3px] rounded-md bg-accent-glow text-accent border border-[rgba(79,142,247,0.2)] text-[0.72rem] font-bold uppercase tracking-[0.5px]">{project.category}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-[1.1rem] font-bold text-text">{project.title}</h2>

                    {/* Description */}
                    <p className="text-[0.9rem] text-text-2 leading-[1.65] flex-1">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-md text-[0.78rem] font-semibold bg-accent-glow text-accent border border-[rgba(79,142,247,0.2)]">{tag}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2 mt-1">
                      <a
                        href={project.github}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-bg-3 border border-border text-text-2 text-[0.83rem] font-semibold transition-all hover:border-accent hover:text-accent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon /> Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-accent text-white border border-accent text-[0.83rem] font-semibold transition-all hover:bg-accent-2 hover:border-accent-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalIcon /> Live Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add project hint */}
            <div className="border border-dashed border-border rounded-xl p-4 md:px-6 text-center text-text-3 text-[0.85rem] mt-2">
              <p>
                Want to add a project?{" "}
                <span className="text-text-2">Edit <code className="bg-bg-3 px-1.5 py-0.5 rounded text-accent text-[0.8rem]">app/projects/page.tsx</code> and add to the <code className="bg-bg-3 px-1.5 py-0.5 rounded text-accent text-[0.8rem]">PROJECTS</code> array.</span>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
