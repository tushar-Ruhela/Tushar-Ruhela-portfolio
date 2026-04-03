"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback } from "react";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Hero() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-[var(--nav-h)] overflow-hidden"
      id="hero"
    >
      {/* Background orbs */}
      <div
        className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full pointer-events-none animate-orb-pulse"
        style={{
          background:
            "radial-gradient(circle, rgba(196,147,58,0.12) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-80px] right-[-80px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196,147,58,0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-center py-16 lg:py-24">

          {/* ── Text Column ── */}
          <div className="order-2 lg:order-1">
            {/* Label */}
            <div className="section-tag mb-6 animate-fadeup opacity-0" style={{ animationFillMode: "forwards" }}>
              Full Stack Developer
            </div>

            {/* Name */}
            <h1
              className="font-display text-[clamp(3rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-text mb-4 animate-fadeup opacity-0"
              style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
            >
              Tushar<br />
              <span className="italic font-normal text-accent">Ruhela</span>
            </h1>

            {/* Tagline */}
            <p
              className="font-body text-[1.05rem] text-text-2 max-w-[460px] leading-[1.8] mb-10 animate-fadeup opacity-0"
              style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
            >
              BE CSE student at Chitkara University — crafting{" "}
              <span className="text-text font-medium">scalable web apps</span> and turning ideas into{" "}
              <span className="text-text font-medium">real-world solutions</span>.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-10 animate-fadeup opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              <button onClick={() => scrollTo("projects")} className="btn-primary">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <a href="/Tusharruhela-1.pdf" download className="btn-ghost">
                Resume ↓
              </a>
            </div>

            {/* Social icons */}
            <div
              className="flex gap-3 animate-fadeup opacity-0"
              style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
            >
              {[
                { href: "https://github.com/tushar-Ruhela/", label: "GitHub", icon: <GitHubIcon /> },
                { href: "https://www.linkedin.com/in/tushar-ruhela-8966332a1", label: "LinkedIn", icon: <LinkedInIcon /> },
                { href: "mailto:ruhelat3@gmail.com", label: "Email", icon: (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.907 1.528-1.148C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                )},
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-[var(--border-2)] bg-surface text-text-2 transition-all hover:border-accent hover:text-accent hover:-translate-y-[3px] hover:shadow-[0_6px_20px_var(--accent-glow)]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Photo Column ── */}
          <div
            className="order-1 lg:order-2 flex flex-col items-center gap-5 animate-fadeup-delay opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            {/* Photo ring */}
            <div className="relative">
              <div className="w-[220px] h-[220px] lg:w-[280px] lg:h-[280px] rounded-[28px] overflow-hidden border-2 border-[rgba(196,147,58,0.3)] shadow-[0_0_60px_rgba(196,147,58,0.15)]">
                <Image
                  src="/profile-tushar.jpeg"
                  alt="Tushar Ruhela"
                  width={280}
                  height={280}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-accent rounded-tr-xl" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-accent rounded-bl-xl" />
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-2 bg-surface border border-[var(--border-2)] px-4 py-2.5 rounded-full text-[0.82rem] text-text-2 font-medium font-body">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse-green shrink-0" />
              Available for opportunities
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[1.5px] h-[45px] bg-gradient-to-b from-accent to-transparent rounded-sm animate-scroll-anim"
        aria-hidden="true"
      />
    </section>
  );
}
