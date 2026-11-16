"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    rootRef.current?.querySelector<HTMLAnchorElement>("nav a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointer = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const bar = "block h-0.5 w-[18px] rounded-sm bg-current transition duration-200";

  return (
    <div ref={rootRef} className="tablet:hidden">
      <button
        ref={toggleRef}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1 rounded-[10px] border border-white/12 bg-white/4 transition-colors hover:bg-white/8"
      >
        <span className={`${bar} ${open ? "translate-y-1.5 rotate-45" : ""}`} />
        <span className={`${bar} ${open ? "opacity-0" : ""}`} />
        <span className={`${bar} ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="anim-menu absolute inset-x-3 top-[calc(100%+8px)] z-[1000] flex flex-col rounded-[14px] border border-white/12 bg-panel/98 p-2.5 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-md"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-[9px] px-3 text-fg transition-colors hover:bg-white/5"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
