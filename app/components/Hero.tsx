"use client";

import Link from "next/link";
import Image from "next/image";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-[var(--nav-h)] relative overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--accent-glow)_0%,transparent_70%)] pointer-events-none" aria-hidden="true" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center py-[60px] pb-[40px] md:py-[80px] relative z-10 w-full text-center md:text-left">
        {/* Text */}
        <div className="order-2 md:order-1 animate-fadeup">
          <p className="text-[0.9rem] font-semibold text-accent tracking-[1.5px] uppercase mb-2">Hi, I&apos;m</p>
          <h1 className="text-[clamp(2.4rem,5vw,3.8rem)] font-extrabold tracking-[-2px] text-text leading-[1.1] mb-2">Tushar Ruhela</h1>
          <h2 className="text-[clamp(1.1rem,2.5vw,1.4rem)] font-normal text-text-2 mb-5">Full Stack Developer</h2>
          <p className="text-base text-text-2 max-w-[480px] leading-[1.75] mb-8 mx-auto md:mx-0">
            BE CSE student at Chitkara University passionate about building{" "}
            <span className="text-accent font-semibold">scalable applications</span> and solving{" "}
            <span className="text-accent font-semibold">real-world problems</span>.
          </p>
          <div className="flex gap-3 flex-wrap justify-center md:justify-start mb-8">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[0.95rem] font-semibold transition-all border-2 border-accent bg-accent text-white hover:bg-accent-2 hover:border-accent-2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--accent-glow)]">View Projects</Link>
            <Link href="/contact"  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[0.95rem] font-semibold transition-all border-2 border-border bg-transparent text-text hover:border-accent hover:text-accent hover:-translate-y-0.5">Get In Touch</Link>
          </div>
          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="https://github.com/tushar-Ruhela/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] flex items-center justify-center rounded-lg border border-border bg-surface text-text-2 transition-all hover:border-accent hover:text-accent hover:bg-surface-2 hover:-translate-y-[3px] hover:shadow-[0_6px_20px_var(--accent-glow)]"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-ruhela-8966332a1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[42px] h-[42px] flex items-center justify-center rounded-lg border border-border bg-surface text-text-2 transition-all hover:border-accent hover:text-accent hover:bg-surface-2 hover:-translate-y-[3px] hover:shadow-[0_6px_20px_var(--accent-glow)]"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:ruhelat3@gmail.com"
              className="w-[42px] h-[42px] flex items-center justify-center rounded-lg border border-border bg-surface text-text-2 transition-all hover:border-accent hover:text-accent hover:bg-surface-2 hover:-translate-y-[3px] hover:shadow-[0_6px_20px_var(--accent-glow)]"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>

        {/* Avatar */}
        <div className="order-1 md:order-2 flex flex-col items-center gap-4 animate-fadeup-delay">
          <div className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full p-1 bg-gradient-to-br from-accent to-[#a78bfa]">
            <div className="w-full h-full rounded-full overflow-hidden bg-bg-2 text-[2.2rem]">
              <Image
                src="/profile-tushar.jpeg"
                alt="Tushar Ruhela"
                width={200}
                height={200}
                className="w-full h-full rounded-full object-cover block"
                priority
              />
            </div>
          </div>
          <div className="flex items-center gap-2 bg-surface border border-border px-4 py-2 rounded-full text-[0.8rem] text-text-2 font-medium">
            <span className="w-2 h-2 bg-green rounded-full animate-pulse-green shrink-0" />
            Available for opportunities
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[2px] h-[40px] bg-gradient-to-b from-accent to-transparent rounded-sm animate-scroll-anim" aria-hidden="true" />
    </section>
  );
}
