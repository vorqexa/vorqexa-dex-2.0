import { steps } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { SectionHead } from "@/components/ui/SectionHead";
import { Reveal } from "@/components/ui/Reveal";

export function Steps() {
  return (
    <Section id="how-it-works">
      <SectionHead title={steps.heading} intro={steps.intro} />
      <Reveal group>
        <ol className="grid grid-cols-1 gap-6 tablet:grid-cols-4">
          {steps.items.map((item, i) => (
            <li
              key={item.title}
              style={{ "--i": i } as React.CSSProperties}
              className="reveal-item border-l border-line pl-4 transition-colors duration-300 hover:border-mint phone:pl-5"
            >
              <div className="font-mono text-[13px] text-mint">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-2.5 font-display text-card font-semibold">{item.title}</h3>
              <p className="mt-2 text-copy text-muted">{item.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
