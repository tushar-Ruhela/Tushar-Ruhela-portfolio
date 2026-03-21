"use client";

import { useReveal } from "./useReveal";

export default function Education() {
  const ref = useReveal();

  return (
    <section className="bg-bg py-28 px-0" id="education">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>

        <div className="section-tag mb-4 reveal">Background</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-text leading-[1.1] mb-16 reveal delay-1">
          Education &<br />
          <span className="italic font-normal text-accent">learning path</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12">
          {/* Vertical line */}
          <div className="absolute left-[11px] sm:left-[15px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent via-[rgba(196,147,58,0.3)] to-transparent" />

          {/* Timeline entry */}
          <div className="relative reveal delay-1">
            {/* Circle dot */}
            <div className="absolute left-[-33px] sm:left-[-37px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-bg flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            </div>

            <div className="card p-8 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-[1.2rem] font-bold text-text mb-1">
                    Bachelor of Engineering — Computer Science
                  </h3>
                  <p className="font-body text-accent font-semibold text-[0.95rem]">
                    Chitkara University
                  </p>
                </div>
                <div className="flex gap-3 sm:flex-col sm:items-end shrink-0">
                  <span className="font-body text-[0.78rem] font-bold uppercase tracking-[0.12em] text-accent border border-[rgba(196,147,58,0.25)] bg-[rgba(196,147,58,0.08)] px-3 py-1.5 rounded-lg">
                    CSE
                  </span>
                  <span className="font-body text-text-3 text-[0.85rem]">2023 — Present</span>
                </div>
              </div>

              <p className="font-body text-text-2 text-[0.9rem] leading-[1.75]">
                Pursuing BE in Computer Science with a focus on software development,
                data structures, algorithms, and modern web technologies.
              </p>

              {/* Key subjects */}
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-[var(--border)]">
                {["Data Structures", "Algorithms", "Web Development", "DBMS", "OS", "Computer Networks"].map((s) => (
                  <span key={s} className="font-body px-3 py-1 rounded-md text-[0.78rem] text-text-3 border border-[var(--border)] bg-bg-3">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Future / ongoing */}
          <div className="relative mt-10 reveal delay-2">
            <div className="absolute left-[-33px] sm:left-[-37px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--border-2)] bg-bg flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-text-3" />
            </div>
            <div className="p-4 pl-0">
              <p className="font-body text-text-3 text-[0.85rem] italic">
                Continuing to learn · building · growing…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
