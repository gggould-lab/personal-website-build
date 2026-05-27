"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">Gao Hongfei</a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-zinc-400 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <button className="rounded-lg border border-line p-2 text-zinc-300 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line bg-ink/95 px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm text-zinc-300">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
