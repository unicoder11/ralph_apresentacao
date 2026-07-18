import type { ReactNode } from "react";

/* Shared building blocks for slides */

export function Slide({
  children,
  className = "",
  grid = true,
}: {
  children: ReactNode;
  className?: string;
  grid?: boolean;
}) {
  return (
    <section
      className={`relative flex h-full w-full flex-col justify-center overflow-hidden px-[7vw] py-[6vh] ${
        grid ? "bg-grid" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
}

export function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`anim-rise mb-4 text-[clamp(0.7rem,1.1vw,0.95rem)] font-bold uppercase tracking-[0.35em] text-coral ${className}`}
    >
      {children}
    </p>
  );
}

export function Title({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`anim-rise d-1 mb-8 max-w-5xl text-[clamp(1.8rem,4.2vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-white ${className}`}
    >
      {children}
    </h2>
  );
}

export function Coral({ children }: { children: ReactNode }) {
  return <span className="text-coral">{children}</span>;
}

export function Card({
  children,
  className = "",
  delay = "",
}: {
  children: ReactNode;
  className?: string;
  delay?: string;
}) {
  return (
    <div
      className={`anim-rise ${delay} rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function GlowOrb({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`anim-glow pointer-events-none absolute rounded-full blur-[120px] ${className}`}
    />
  );
}
