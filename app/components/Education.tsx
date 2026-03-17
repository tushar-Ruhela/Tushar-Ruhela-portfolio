"use client";

import { useReveal } from "./useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section className="bg-bg py-[100px] px-0" id="education">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>
        <h2 className="text-[clamp(1.6rem,3vw,2rem)] font-bold text-text relative inline-block mb-3 after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-10 after:h-1 after:bg-accent after:rounded-sm reveal">Education</h2>

        <div className="flex flex-col min-[480px]:flex-row items-start gap-6 bg-surface border border-border rounded-[20px] p-8 mt-10 relative transition-all hover:border-accent hover:-translate-y-1 hover:shadow-var(--shadow) reveal delay-1">
          <div className="text-[2.5rem] shrink-0">🎓</div>
          <div>
            <h3 className="text-[1.15rem] font-bold text-text mb-1">Bachelor of Engineering — Computer Science</h3>
            <p className="text-accent font-semibold text-[0.95rem] mb-1">Chitkara University</p>
            <p className="text-text-3 text-[0.85rem] mb-3">2023 — Present</p>
            <p className="text-text-2 text-[0.9rem] leading-[1.65]">
              Pursuing BE in Computer Science with a focus on software development,
              data structures, algorithms, and modern web technologies.
            </p>
          </div>
          <div className="static min-[480px]:absolute min-[480px]:top-8 min-[480px]:right-8 mt-2 min-[480px]:mt-0 self-start bg-accent-glow text-accent border border-[rgba(79,142,247,0.25)] px-3.5 py-1.5 rounded-lg text-[0.78rem] font-bold tracking-[1px]">CSE</div>
        </div>
      </div>
    </section>
  );
}
