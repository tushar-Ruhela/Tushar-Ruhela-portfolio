export default function Footer() {
  return (
    <footer className="bg-bg border-t border-[var(--border)] py-10">
      <div className="container mx-auto px-6 max-w-[1100px] flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <span className="font-display text-[1.2rem] font-bold tracking-[-0.5px] text-text">
          TR<span className="text-accent">.</span>
        </span>

        {/* Center */}
        <p className="font-body text-[0.85rem] text-text-3 text-center">
          Designed &amp; Built by{" "}
          <strong className="text-text-2 font-medium">Tushar Ruhela</strong>
          {" "}· 2026
        </p>

        {/* Right */}
        <p className="font-body text-[0.8rem] text-text-3">
          Open to opportunities ✦
        </p>
      </div>
    </footer>
  );
}
