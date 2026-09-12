export function PageAtmosphere() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_58%_at_50%_-18%,var(--hero-wash),transparent_72%)] opacity-100 dark:opacity-40" />
      <div className="absolute inset-0 bg-dot-grid opacity-[0.78] dark:opacity-[0.9] mask-[linear-gradient(to_bottom,black_0%,black_38%,rgb(0_0_0_/0.45)_68%,transparent_100%)]" />
    </div>
  );
}
