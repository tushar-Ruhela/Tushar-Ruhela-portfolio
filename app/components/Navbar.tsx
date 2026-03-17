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
    <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
      <div className="nav-inner container">
        <Link href="/" className="nav-logo">
          TR<span className="nav-logo-dot">.</span>
        </Link>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link${pathname === link.href ? " active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          {mounted && (
            <button
              className="theme-btn"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
          <button
            className={`hamburger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
