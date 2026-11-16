import { infrastructure } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function Infrastructure() {
  return (
    <Section id="infrastructure">
      <Reveal>
        <div className="flex flex-col items-start gap-7 rounded-[10px] border border-line bg-panel px-5 py-6 phone:p-[30px] tablet:flex-row tablet:flex-wrap tablet:items-center tablet:justify-between tablet:gap-6 tablet:px-10 tablet:py-9">
          <div>
            <h3 className="font-display text-lg font-semibold tablet:text-[19px]">
              {infrastructure.heading}
            </h3>
            {infrastructure.paragraphs.map((p) => (
              <p key={p} className="mt-2 max-w-[680px] text-copy text-muted tablet:max-w-[420px]">
                {p}
              </p>
            ))}
          </div>

          <div className="grid w-full grid-cols-1 gap-3.5 min-[381px]:grid-cols-2 phone:flex phone:justify-between phone:gap-5 tablet:w-auto tablet:justify-start tablet:gap-9">
            {infrastructure.columns.map((c) => (
              <div key={c.title}>
                <h4 className="text-[17px] font-semibold text-mint phone:text-xl">{c.title}</h4>
                <span className="mt-[3px] block text-[10.5px] leading-[1.35] text-muted phone:text-xs">
                  {c.caption}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
