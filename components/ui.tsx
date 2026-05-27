import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mb-8">
        {eyebrow && <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">{eyebrow}</p>}
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-line bg-white/[0.045] p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.065] ${className}`}>
      {children}
    </div>
  );
}

export function Tags({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((tag) => (
        <span key={tag} className="rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
          {tag}
        </span>
      ))}
    </div>
  );
}
