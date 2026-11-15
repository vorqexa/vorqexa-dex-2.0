import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const html = readFileSync("legacy/index.html", "utf8");
mkdirSync("public/brand", { recursive: true });

const imgs = [...html.matchAll(/data:image\/png;base64,([A-Za-z0-9+/=]+)/g)].map((m) => m[1]);
const unique = [...new Set(imgs)].sort((a, b) => a.length - b.length);
const [logo, watermark] = [unique[0], unique[unique.length - 1]];
writeFileSync("public/brand/logo.png", Buffer.from(logo, "base64"));
writeFileSync("public/brand/hero-watermark.png", Buffer.from(watermark, "base64"));

const docs = html.match(/var docsData = "([A-Za-z0-9+/=]+)"/);
if (!docs) throw new Error("docsData not found");
writeFileSync("legacy/docs.html", Buffer.from(docs[1], "base64").toString("utf8"));

console.log("unique images:", unique.length, "| docs.html written");
