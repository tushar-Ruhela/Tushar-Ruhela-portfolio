"use client";

import { useReveal } from "./useReveal";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Contact() {
  const ref = useReveal();

  return (
    <section className="bg-bg-2 py-28 px-0" id="contact">
      <div className="container mx-auto px-6 max-w-[900px] text-center" ref={ref}>

        <div className="section-tag mb-6 justify-center reveal">
          Contact
        </div>

        <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-bold text-text leading-[1.08] mb-6 reveal delay-1">
          Let&apos;s work<br />
          <span className="italic font-normal text-accent">together</span>
        </h2>

        <p className="font-body text-text-2 text-[1.05rem] leading-[1.8] max-w-[520px] mx-auto mb-12 reveal delay-1">
          I&apos;m open to internships, collaborations, and interesting projects.
          Whether you have a question or just want to say hi — my inbox is always open.
        </p>

        {/* Big email CTA */}
        <a
          href="mailto:ruhelat3@gmail.com"
          className="group inline-flex items-center gap-3 font-display text-[clamp(1.1rem,2.5vw,1.6rem)] font-semibold text-text-2 hover:text-accent transition-all duration-300 border-b border-[var(--border-2)] hover:border-accent pb-1 mb-14 reveal delay-2"
        >
          ruhelat3@gmail.com
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            width="22"
            height="22"
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          >
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-[320px] mx-auto mb-10 reveal delay-2">
          <div className="flex-1 h-[1px] bg-[var(--border)]" />
          <span className="font-body text-text-3 text-[0.8rem] uppercase tracking-wider">or find me on</span>
          <div className="flex-1 h-[1px] bg-[var(--border)]" />
        </div>

        {/* Social links */}
        <div className="flex gap-4 justify-center reveal delay-3">
          {[
            { href: "https://github.com/tushar-Ruhela/", label: "GitHub", icon: <GitHubIcon /> },
            { href: "https://www.linkedin.com/in/tushar-ruhela-8966332a1", label: "LinkedIn", icon: <LinkedInIcon /> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-[var(--border-2)] bg-surface text-text-2 font-body text-[0.9rem] font-medium transition-all hover:border-accent hover:text-accent hover:-translate-y-1 hover:shadow-[0_6px_24px_var(--accent-glow)]"
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
