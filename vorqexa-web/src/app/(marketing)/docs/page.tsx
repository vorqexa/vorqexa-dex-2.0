import type { Metadata } from "next";
import { DocBlocks } from "@/components/docs/DocBlocks";
import { docsIntro, docsSections } from "@/content/docs";

export const metadata: Metadata = {
  title: "Vorqexa Docs — Trading Guide",
  description: docsIntro.lead,
};

export default function DocsPage() {
  return (
    <article className="[overflow-wrap:anywhere]">
      <p className="text-[13px] font-bold uppercase tracking-[0.1em] text-mint">
        {docsIntro.eyebrow}
      </p>
      <h1 className="mb-[18px] mt-2.5 font-display text-display font-semibold">
        {docsIntro.title}
      </h1>
      <p className="mb-4 max-w-[730px] text-[1.0625rem] leading-[1.65] text-prose phone:text-lg">
        {docsIntro.lead}
      </p>
      {docsIntro.paragraphs.map((text) => (
        <p key={text} className="mb-4 text-lead text-prose">
          {text}
        </p>
      ))}

      {docsSections.map((section, i) => (
        <section key={section.id} id={section.id} className="mt-12 phone:mt-[62px]">
          <h2 className="mb-3.5 font-display text-2xl font-semibold leading-tight tracking-[-0.025em] phone:text-[1.6875rem]">
            {i + 1}. {section.title}
          </h2>
          <DocBlocks blocks={section.blocks} />
        </section>
      ))}
    </article>
  );
}
