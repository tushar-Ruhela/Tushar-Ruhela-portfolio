"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About",     href: "/about"     },
  { label: "Skills",    href: "/skills"    },
  { label: "Projects",  href: "/projects"  },
  { label: "Education", href: "/education" },
  { label: "Contact",   href: "/contact"   },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [mounted,   setMounted]   = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] h-[var(--nav-h)] transition-all duration-300 ${scrolled ? "bg-bg shadow-[0_1px_0_var(--border)] backdrop-blur-[12px]" : "bg-transparent"}`} id="navbar">
      <div className="container mx-auto px-6 h-full flex items-center justify-between pointer-events-auto">
        <Link href="/" className="text-[1.5rem] font-extrabold tracking-[-0.5px] text-text transition-colors hover:text-accent">
          TR<span className="text-accent">.</span>
        </Link>

        <ul className={`fixed md:static top-[var(--nav-h)] md:top-auto left-0 right-0 bg-bg md:bg-transparent flex flex-col md:flex-row items-center gap-1 py-4 md:py-0 border-b border-border md:border-none transition-transform duration-300 ${menuOpen ? "translate-y-0" : "-translate-y-[120%] md:translate-y-0"}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-8 md:px-3.5 py-2.5 md:py-1.5 rounded-lg text-base md:text-[0.9rem] font-medium transition-colors ${pathname === link.href ? "text-accent bg-accent-glow" : "text-text-2 hover:text-text hover:bg-surface"}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2.5">
          {mounted && (
            <button
              className="w-10 h-10 rounded-[10px] border border-border bg-surface cursor-pointer text-base flex items-center justify-center transition-all hover:bg-surface-2 hover:scale-105"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
          <button
            className="flex md:hidden flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1.5 z-10"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-[2px] bg-text rounded-sm transition-all ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-text rounded-sm transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-text rounded-sm transition-all ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
    </nav>
  );
}
