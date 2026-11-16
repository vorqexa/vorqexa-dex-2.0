"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll-reveal. Content is fully visible on the server and without JS.
 * Only elements that start below the fold are hidden after hydration,
 * then revealed once as they enter the viewport.
 * `group` reveals children marked with the `reveal-item` class in sequence.
 */
export function Reveal({
  children,
  group = false,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  group?: boolean;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    const attr = group ? "data-reveal-group" : "data-reveal";
    el.setAttribute(attr, "hidden");

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute(attr, "shown");
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [group]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ "--d": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
