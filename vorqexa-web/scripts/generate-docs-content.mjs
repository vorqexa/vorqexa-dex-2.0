// One-off migration helper: turns the legacy docs HTML into a typed content
// file (src/content/docs.ts). After it runs, edit docs.ts by hand; this
// script is not part of the build.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const html = readFileSync("legacy/docs.html", "utf8");

const text = (s) =>
  s
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
const stripNumber = (s) => s.replace(/^\d+\.\s+/, "");

const META = {
  "What Is Vorqexa?": { id: "overview", label: "Overview" },
  "How Vorqexa Works": { id: "how-it-works", label: "How it works" },
  Trading: { id: "trading", label: "Trading" },
  "Accounts & Deposits": { id: "funds", label: "Accounts & deposits" },
  "Perpetual Trading": { id: "perpetuals", label: "Perpetuals" },
  Fees: { id: "fees", label: "Fees" },
  "Security & Wallet Safety": { id: "security", label: "Security" },
  "Markets & Availability": { id: "markets", label: "Markets" },
  Infrastructure: { id: "infrastructure", label: "Infrastructure" },
  "Frequently Asked Questions": { id: "faq", label: "FAQ" },
  Glossary: { id: "glossary", label: "Glossary" },
  Disclaimer: { id: "disclaimer", label: "Disclaimer" },
  "Official Resources": { id: "resources", label: "Official resources" },
};
const ENTRY_SECTIONS = new Set(["faq", "glossary", "resources"]);
const RESOURCE_HREFS = {
  "Launch App": "siteConfig.dexUrl",
  Documentation: '"/docs"',
  GitHub: "siteConfig.socials.github",
  Community: "siteConfig.socials.telegram",
};

class Raw {
  constructor(code) {
    this.code = code;
  }
}

const article = html.match(/<article class="content">([\s\S]*?)<\/article>/)?.[1];
if (!article) throw new Error("article.content not found");

const intro = {
  eyebrow: text(article.match(/<div class="eyebrow">([\s\S]*?)<\/div>/)[1]),
  title: text(article.match(/<h1>([\s\S]*?)<\/h1>/)[1]),
  lead: text(article.match(/<p class="lead">([\s\S]*?)<\/p>/)[1]),
  paragraphs: [
    ...article
      .slice(0, article.indexOf("<section"))
      .matchAll(/<p>([\s\S]*?)<\/p>/g),
  ].map((m) => text(m[1])),
};

const TOKEN =
  /<h3>([\s\S]*?)<\/h3>|<p>([\s\S]*?)<\/p>|<ul>([\s\S]*?)<\/ul>|<div class="steps">((?:\s*<div class="step">[\s\S]*?<\/div>)+)\s*<\/div>/g;

let expected = 0;
let emitted = 0;
const count = (n = 1) => (emitted += n);

const sections = [];
for (const m of article.matchAll(/<section(?: id="([^"]+)")?>([\s\S]*?)<\/section>/g)) {
  const body = m[2];
  const h2 = text(body.match(/<h2>([\s\S]*?)<\/h2>/)[1]);
  const title = stripNumber(h2);
  const meta = META[title];
  if (!meta) throw new Error(`No META entry for section "${title}"`);
  if (m[1] && m[1] !== meta.id) throw new Error(`id mismatch for "${title}"`);

  expected += (body.match(/<(h2|h3|p|li)[\s>]/g) ?? []).length;
  count();

  const tokens = [];
  for (const t of body.slice(body.indexOf("</h2>")).matchAll(TOKEN)) {
    if (t[1] !== undefined) tokens.push({ type: "h3", text: text(t[1]) });
    else if (t[2] !== undefined) {
      const strong = t[2].match(/^<strong>([\s\S]*?)<\/strong>\s*([\s\S]*)$/);
      tokens.push(
        strong
          ? { type: "callout", label: text(strong[1]), text: text(strong[2]) }
          : { type: "p", text: text(t[2]) },
      );
    } else if (t[3] !== undefined) {
      tokens.push({
        type: "list",
        items: [...t[3].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => text(x[1])),
      });
    } else {
      tokens.push({
        type: "steps",
        items: [...t[4].matchAll(/<div class="step"><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>/g)].map(
          (x) => ({ title: stripNumber(text(x[1])), text: text(x[2]) }),
        ),
      });
    }
  }

  let blocks = tokens;
  if (ENTRY_SECTIONS.has(meta.id)) {
    const items = [];
    for (let i = 0; i < tokens.length; i += 2) {
      if (tokens[i].type !== "h3" || tokens[i + 1]?.type !== "p")
        throw new Error(`Expected h3+p pairs in "${title}"`);
      const item = { title: tokens[i].text, text: tokens[i + 1].text };
      if (meta.id === "resources" && RESOURCE_HREFS[item.title])
        item.href = new Raw(RESOURCE_HREFS[item.title]);
      items.push(item);
    }
    blocks = [{ type: "entries", items }];
  }

  for (const b of blocks) {
    if (b.type === "list") count(b.items.length);
    else if (b.type === "steps") count(b.items.length * 2);
    else if (b.type === "entries") count(b.items.length * 2);
    else if (b.type === "callout") count(1);
    else count();
  }
  sections.push({ ...meta, title, blocks });
}

if (sections.length !== Object.keys(META).length)
  throw new Error(`Expected ${Object.keys(META).length} sections, got ${sections.length}`);
if (expected !== emitted)
  throw new Error(`Text node mismatch: source ${expected}, output ${emitted}`);

const q = (s) => JSON.stringify(s);
const val = (v, pad) => {
  if (v instanceof Raw) return v.code;
  if (typeof v === "string") return q(v);
  if (Array.isArray(v)) {
    if (v.every((x) => typeof x === "string") && v.join("").length < 60)
      return `[${v.map(q).join(", ")}]`;
    const inner = v.map((x) => `${pad}  ${val(x, pad + "  ")},`).join("\n");
    return `[\n${inner}\n${pad}]`;
  }
  const entries = Object.entries(v).map(([k, x]) => `${k}: ${val(x, pad + "  ")}`);
  const oneLine = `{ ${entries.join(", ")} }`;
  if (oneLine.length + pad.length <= 100 && !oneLine.includes("\n")) return oneLine;
  return `{\n${entries.map((e) => `${pad}  ${e},`).join("\n")}\n${pad}}`;
};

const out = `import { siteConfig } from "@/config/site";

export type DocBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: readonly string[] }
  | { type: "steps"; items: readonly { title: string; text: string }[] }
  | { type: "callout"; label: string; text: string }
  | {
      type: "entries";
      items: readonly { title: string; text: string; href?: string }[];
    };

export type DocSection = {
  /** URL hash and sidebar anchor. */
  id: string;
  /** Short sidebar label. */
  label: string;
  /** Heading shown in the page (the number is added automatically). */
  title: string;
  blocks: readonly DocBlock[];
};

export const docsIntro = ${val(intro, "")};

export const docsSections: readonly DocSection[] = ${val(sections, "")};
`;

mkdirSync("src/content", { recursive: true });
writeFileSync("src/content/docs.ts", out);
console.log(`docs.ts written: ${sections.length} sections, ${emitted} text nodes (source ${expected})`);
