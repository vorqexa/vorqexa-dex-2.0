"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/** Offset from the top of the viewport (sticky header + breathing room). */
const ACTIVE_OFFSET = 120;

export function DocsNav({ items }: { items: readonly Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  // Scroll-spy: the active item is the last section whose top has passed the
  // offset line; at the very bottom of the page it is always the last item.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let current = items[0]?.id ?? "";
      if (atBottom) {
        current = items[items.length - 1]?.id ?? current;
      } else {
        for (const { id } of items) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = id;
        }
      }
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  return (
    <nav
      aria-label="Documentation"
      className="rounded-xl border border-line bg-panel p-4 tablet:border-0 tablet:bg-transparent tablet:p-0"
    >
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-muted">
        Documentation
      </p>
      <ul className="grid max-h-60 gap-0.5 overflow-auto phone:max-h-none phone:grid-cols-2 tablet:grid-cols-1">
        {items.map(({ id, label }) => {
          const isActive = id === active;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={isActive ? "location" : undefined}
                className={`block rounded-lg px-2.5 py-[7px] text-sm transition-colors duration-150 ${
                  isActive
                    ? "bg-panel-2 text-mint"
                    : "text-muted hover:bg-panel hover:text-fg"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
