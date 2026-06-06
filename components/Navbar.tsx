"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/profile";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/82 backdrop-blur-xl">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-5">
        <a href="#" className="text-sm font-semibold tracking-wide text-white">
          Gao Hongfei
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.06] hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="rounded-lg border border-line p-2 text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.06] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="打开或关闭导航菜单"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line bg-ink/96 px-4 py-3 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.06] hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
