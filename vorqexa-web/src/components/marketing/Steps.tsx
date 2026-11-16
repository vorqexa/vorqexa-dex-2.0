import { steps } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";

export function Steps() {
  return (
    <Section id="how-it-works">
      <SectionHead title={steps.heading} intro={steps.intro} />
      <ol className="grid grid-cols-1 gap-6 tablet:grid-cols-4">
        {steps.items.map((item, i) => (
          <li key={item.title} className="border-l border-line pl-4 phone:pl-5">
            <div className="font-mono text-[13px] text-mint">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-2.5 font-display text-base font-semibold phone:text-[17px]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-[1.6] text-muted phone:text-[14.5px]">
              {item.text}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
