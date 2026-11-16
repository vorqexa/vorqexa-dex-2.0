import { features } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";

export function Features() {
  return (
    <Section id="features">
      <SectionHead title={features.heading} intro={features.intro} />
      <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line tablet:grid-cols-2 desktop:grid-cols-4">
        {features.items.map((item, i) => (
          <li key={item.title} className="bg-panel px-[22px] py-[26px] phone:px-7 phone:py-8">
            <div className="font-mono text-xs text-muted">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3.5 font-display text-base font-semibold phone:text-[17px]">
              {item.title}
            </h3>
            <p className="mt-2.5 text-sm leading-[1.6] text-muted phone:text-[14.5px]">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
