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

interface Project {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}

const PROJECTS: Project[] = [
  {
    icon: "🤝",
    title: "AutoMeet App",
    description:
      "A smart meeting automation platform that streamlines scheduling and coordination. Built with a focus on scalability, real-time updates, and seamless user experience.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    demo: "#",
  },
  {
    icon: "📹",
    title: "Video Calling App",
    description:
      "A peer-to-peer video calling application built using WebRTC for real-time communication. Supports audio/video streams with low latency and reliable connections.",
    tags: ["WebRTC", "Socket.io", "Node.js", "JavaScript"],
    github: "#",
    demo: "#",
  },
  {
    icon: "🧠",
    title: "AI Memory App",
    description:
      "An intelligent memory management application powered by AI. Helps users capture, organize, and retrieve information intelligently — like a second brain.",
    tags: ["AI/LLM", "React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  const ref = useReveal();

  return (
    <section className="projects section" id="projects">
      <div className="container" ref={ref}>
        <h2 className="section-title reveal">Projects</h2>
        <p className="section-sub reveal delay-1">Things I&apos;ve built</p>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className={`project-card reveal delay-${i}`}>
              <div className="project-top">
                <span className="proj-icon">{project.icon}</span>
                <div className="proj-links">
                  <a
                    href={project.github}
                    className="proj-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={project.demo}
                    className="proj-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <ExternalIcon />
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
