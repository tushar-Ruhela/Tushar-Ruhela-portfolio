"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About",          href: "#about"          },
  { label: "Skills",         href: "#skills"         },
  { label: "Projects",       href: "#projects"       },
  { label: "Certifications", href: "#certifications" },
  { label: "Education",      href: "#education"      },
  { label: "Contact",        href: "#contact"        },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [active,    setActive]    = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // track active section via IntersectionObserver
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const handleAnchorClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] h-[var(--nav-h)] transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(8,8,8,0.92)] backdrop-blur-[20px] border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
      id="navbar"
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-[1100px]">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-[1.4rem] font-bold tracking-[-0.5px] text-text hover:text-accent transition-colors"
        >
          TR<span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`relative px-4 py-2 rounded-lg text-[0.875rem] font-medium font-body transition-all duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-text-2 hover:text-text"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-accent rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume CTA + Mobile toggle */}
        <div className="flex items-center gap-3">

          {/* Mobile hamburger */}
          <button
            className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-[2px] bg-text rounded-sm transition-all ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-text rounded-sm transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-text rounded-sm transition-all ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-[var(--nav-h)] left-0 right-0 bg-[rgba(8,8,8,0.97)] backdrop-blur-[20px] border-b border-[var(--border)] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-4 px-6 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="block px-3 py-3 rounded-lg text-text-2 hover:text-text hover:bg-surface font-medium text-[0.95rem] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
