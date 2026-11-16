import { Reveal } from "./Reveal";

export function SectionHead({
  title,
  intro,
}: {
  title: string;
  intro: string;
}) {
  return (
    <Reveal className="mb-head max-w-[560px]">
      <h2 className="font-display text-title font-semibold">{title}</h2>
      <p className="mt-3.5 text-lead text-muted">{intro}</p>
    </Reveal>
  );
}
