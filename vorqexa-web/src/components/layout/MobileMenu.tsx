"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="tablet:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-[42px] w-[42px] cursor-pointer flex-col items-center justify-center gap-1 rounded-[10px] border border-white/12 bg-white/4"
      >
        <span className="block h-0.5 w-[18px] rounded-sm bg-current" />
        <span className="block h-0.5 w-[18px] rounded-sm bg-current" />
        <span className="block h-0.5 w-[18px] rounded-sm bg-current" />
      </button>

      <nav
        ref={menuRef}
        id="mobile-menu"
        aria-label="Mobile navigation"
        hidden={!open}
        className="absolute inset-x-4 top-[calc(100%+8px)] z-[1000] flex-col rounded-[14px] border border-white/12 bg-panel p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.35)] not-[[hidden]]:flex"
      >
        {siteConfig.nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="rounded-[9px] px-3 py-[13px] text-fg"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}