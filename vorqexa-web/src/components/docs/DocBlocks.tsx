import Link from "next/link";
import type { DocBlock } from "@/content/docs";

const h3 = "mb-2 mt-7 font-display text-[1.1875rem] font-semibold text-fg";
const p = "mb-4 text-lead text-prose";

function EntryTitle({ title, href }: { title: string; href?: string }) {
  if (!href) return <>{title}</>;
  const cls =
    "underline decoration-line decoration-1 underline-offset-4 transition-colors duration-150 hover:text-mint hover:decoration-mint";
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {title}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {title}
    </Link>
  );
}

function Block({ block }: { block: DocBlock }) {
  switch (block.type) {
    case "p":
      return <p className={p}>{block.text}</p>;

    case "h3":
      return <h3 className={h3}>{block.text}</h3>;

    case "list":
      return (
        <ul className="mb-4 list-disc space-y-1.5 pl-5 text-lead text-prose marker:text-mint">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );

    case "steps":
      return (
        <ol role="list" className="my-5 grid gap-3">
          {block.items.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-panel border border-line bg-panel py-4 pl-12 pr-4 phone:py-[19px] phone:pl-[58px] phone:pr-5"
            >
              <span
                aria-hidden="true"
                className="absolute left-3.5 top-4 grid size-[25px] place-items-center rounded-full bg-mint text-[13px] font-extrabold text-on-mint phone:left-[18px] phone:top-[18px]"
              >
                {i + 1}
              </span>
              <h3 className="font-display text-card font-semibold text-fg">
                {step.title}
              </h3>
              <p className="mt-1 text-copy text-prose">{step.text}</p>
            </li>
          ))}
        </ol>
      );

    case "callout":
      return (
        <p className="my-6 border-l-[3px] border-mint py-1 pl-4 text-lead text-prose">
          <strong className="font-semibold text-fg">{block.label}</strong>{" "}
          {block.text}
        </p>
      );

    case "entries":
      return (
        <>
          {block.items.map((item) => (
            <div key={item.title}>
              <h3 className={h3}>
                <EntryTitle title={item.title} href={item.href} />
              </h3>
              <p className={p}>{item.text}</p>
            </div>
          ))}
        </>
      );

    default: {
      const unreachable: never = block;
      return unreachable;
    }
  }
}

export function DocBlocks({ blocks }: { blocks: readonly DocBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
