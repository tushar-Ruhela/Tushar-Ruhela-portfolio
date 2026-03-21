"use client";

import { useReveal } from "./useReveal";

const CertIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

const DownloadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 3v12" />
  </svg>
);

const CERTIFICATIONS = [
  {
    title: "Cloud Computing",
    issuer: "NPTEL — IIT Kharagpur",
    date: "2024",
    description:
      "Completed the NPTEL course on Cloud Computing, covering virtualization, cloud architecture, deployment models (IaaS, PaaS, SaaS), cloud security, and hands-on with leading cloud platforms.",
    skills: ["Cloud Architecture", "Virtualization", "IaaS / PaaS / SaaS", "Cloud Security", "AWS Basics"],
    credentialFile: "/Cloud Computing.pdf",
    color: "rgba(59,130,246,0.12)",   // blue tint for cloud
    borderColor: "rgba(59,130,246,0.25)",
    iconColor: "#60a5fa",
    badge: "NPTEL",
  },
];

export default function Certifications() {
  const ref = useReveal();

  return (
    <section className="bg-bg py-28 px-0" id="certifications">
      <div className="container mx-auto px-6 max-w-[1100px]" ref={ref}>

        <div className="section-tag mb-4 reveal">Credentials</div>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-text leading-[1.1] mb-4 reveal delay-1">
          Certifications &<br />
          <span className="italic font-normal text-accent">achievements</span>
        </h2>
        <p className="font-body text-text-2 mb-16 reveal delay-1">
          Courses completed and credentials earned.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title}
              className={`relative bg-surface border border-[var(--border)] rounded-[var(--radius)] overflow-hidden transition-all duration-300 hover:border-[rgba(196,147,58,0.3)] hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(0,0,0,0.6)] group reveal delay-${i % 3}`}
            >
              {/* Coloured top stripe */}
              <div
                className="h-[3px] w-full"
                style={{ background: `linear-gradient(90deg, ${cert.iconColor}, transparent)` }}
              />

              {/* Card body */}
              <div className="p-8">
                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: cert.color, border: `1px solid ${cert.borderColor}`, color: cert.iconColor }}
                  >
                    <CertIcon />
                  </div>
                  <span
                    className="font-body text-[0.72rem] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-md"
                    style={{ color: cert.iconColor, background: cert.color, border: `1px solid ${cert.borderColor}` }}
                  >
                    {cert.badge}
                  </span>
                </div>

                {/* Title + meta */}
                <h3 className="font-display text-[1.25rem] font-bold text-text mb-1 group-hover:text-accent-light transition-colors">
                  {cert.title}
                </h3>
                <p className="font-body text-[0.88rem] font-semibold mb-0.5" style={{ color: cert.iconColor }}>
                  {cert.issuer}
                </p>
                <p className="font-body text-text-3 text-[0.82rem] mb-4">{cert.date}</p>

                {/* Description */}
                <p className="font-body text-text-2 text-[0.88rem] leading-[1.75] mb-5">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="font-body px-2.5 py-1 rounded-md text-[0.78rem] text-text-3 border border-[var(--border)] bg-bg-3"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-5 border-t border-[var(--border)]">
                  <a
                    href={cert.credentialFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !py-2.5 !px-4 !text-[0.85rem] flex-1 justify-center"
                  >
                    <ExternalIcon />
                    View Certificate
                  </a>
                  <a
                    href={cert.credentialFile}
                    download
                    className="btn-primary !py-2.5 !px-4 !text-[0.85rem] flex-1 justify-center"
                  >
                    <DownloadIcon />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* "More coming" placeholder card */}
          <div className="relative bg-surface border border-dashed border-[var(--border-2)] rounded-[var(--radius)] p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[260px] reveal delay-1 group hover:border-[rgba(196,147,58,0.3)] transition-all">
            <div className="w-12 h-12 rounded-2xl border border-[var(--border-2)] flex items-center justify-center text-text-3 group-hover:border-accent group-hover:text-accent transition-all">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                <path d="M12 4v16m-8-8h16" />
              </svg>
            </div>
            <p className="font-display text-[1rem] font-semibold text-text-3 group-hover:text-text-2 transition-colors">
              More certifications on the way
            </p>
            <p className="font-body text-[0.83rem] text-text-3">
              Currently pursuing AWS Cloud Practitioner &amp; other courses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
