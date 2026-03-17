import styles from "./Background.module.css";

/**
 * Globally rendered animated background — floating gradient orbs + subtle grid.
 * Rendered in root layout so it appears on every page.
 */
export default function Background() {
  return (
    <div className={styles.bg} aria-hidden="true">
      {/* Subtle dot-grid */}
      <div className={styles.grid} />

      {/* Floating orbs */}
      <div className={`${styles.orb} ${styles.orb1}`} />
      <div className={`${styles.orb} ${styles.orb2}`} />
      <div className={`${styles.orb} ${styles.orb3}`} />
      <div className={`${styles.orb} ${styles.orb4}`} />

      {/* Moving diagonal lines */}
      <div className={styles.lines} />
    </div>
  );
}
