"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "./projects.module.css";

/* ─────────────────────────────────────────────
   PROJECTS DATA
   To add a new project, just add an object here.
───────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    icon: "🤝",
    title: "AutoMeet App",
    description:
      "A smart meeting automation platform that streamlines scheduling and coordination. Built with scalability, real-time updates, and seamless UX in mind.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Fullstack",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    icon: "📹",
    title: "Video Calling App",
    description:
      "Peer-to-peer video calling using WebRTC for real-time communication. Supports audio/video streams with low latency and reliable connections via Socket.io signaling.",
    tags: ["WebRTC", "Socket.io", "Node.js", "JavaScript"],
    category: "Realtime",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    icon: "🧠",
    title: "AI Memory App",
    description:
      "An intelligent memory management app powered by AI. Helps users capture, organize, and retrieve information — like a second brain with LLM-powered search.",
    tags: ["AI/LLM", "React", "Node.js", "MongoDB"],
    category: "AI",
    github: "#",
    demo: "#",
    featured: true,
  },
  // ── Add your new projects below this line ──
  // {
  //   id: 4,
  //   icon: "🚀",
  //   title: "Your Project Name",
  //   description: "Short description of what the project does.",
  //   tags: ["React", "Node.js"],
  //   category: "Fullstack",   // one of: Fullstack | Realtime | AI | Frontend | Backend | Other
  //   github: "https://github.com/tushar-Ruhela/your-repo",
  //   demo: "https://your-deployed-link.com",
  //   featured: false,
  // },
];

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
    <section className="section" style={{ minHeight: "100vh", paddingTop: "calc(var(--nav-h) + 40px)" }}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h1 className="section-title">Projects</h1>
            <p className="section-sub">
              Things I&apos;ve built &mdash; {PROJECTS.length} project{PROJECTS.length !== 1 ? "s" : ""}
            </p>
          </div>
          <div className={styles.count}>
            <span className={styles.countNum}>{filtered.length}</span>
            <span className={styles.countLabel}>showing</span>
          </div>
        </div>

        {/* Filter bar */}
        <div className={styles.filters}>
          {usedCategories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn}${activeFilter === cat ? ` ${styles.filterActive}` : ""}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
              {cat !== "All" && (
                <span className={styles.filterCount}>
                  {PROJECTS.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <span>No projects in this category yet.</span>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map((project, i) => (
              <div
                key={`${activeFilter}-${project.id}`}
                className={styles.card}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {/* Top row */}
                <div className={styles.cardTop}>
                  <span className={styles.icon}>{project.icon}</span>
                  <div className={styles.cardTopRight}>
                    {project.featured && (
                      <span className={styles.featuredBadge}>
                        <StarIcon /> Featured
                      </span>
                    )}
                    <span className={styles.catBadge}>{project.category}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className={styles.title}>{project.title}</h2>

                {/* Description */}
                <p className={styles.desc}>{project.description}</p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Links */}
                <div className={styles.links}>
                  <a
                    href={project.github}
                    className={styles.linkBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon /> Code
                  </a>
                  <a
                    href={project.demo}
                    className={`${styles.linkBtn} ${styles.linkBtnPrimary}`}
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
        <div className={styles.addHint}>
          <p>
            Want to add a project?{" "}
            <span>Edit <code>app/projects/page.tsx</code> and add to the <code>PROJECTS</code> array.</span>
          </p>
        </div>
      </div>
    </section>
      </main>
      <Footer />
    </>
  );
}
