import { existsSync } from "node:fs";
import path from "node:path";

const EXTS = ["svg", "png", "webp"] as const;

/** Returns /chains/<slug>.<ext> if the file exists in /public/chains, else null. */
export function chainLogoSrc(slug: string): string | null {
  for (const ext of EXTS) {
    if (existsSync(path.join(process.cwd(), "public", "chains", `${slug}.${ext}`))) {
      return `/chains/${slug}.${ext}`;
    }
  }
  return null;
}
