import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children
}: {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-12 sm:scroll-mt-24 sm:py-16 lg:py-20">
      <div className="mb-6 max-w-3xl sm:mb-8">
        {eyebrow && <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">{eyebrow}</p>}
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-panel/78 p-5 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/18 hover:bg-panel sm:p-6 ${className}`}>
      {children}
    </div>
  );
}

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 sm:gap-2">
      {items.map((tag) => (
        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 text-[11px] leading-5 text-zinc-300 sm:px-3 sm:text-xs">
          {tag}
        </span>
      ))}
    </div>
  );
}
