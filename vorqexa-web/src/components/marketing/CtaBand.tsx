import { siteConfig } from "@/config/site";
import { cta } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function CtaBand() {
  return (
    <Section>
      <Reveal>
        <div className="rounded-xl border border-line bg-panel px-5 py-11 text-center phone:px-7 phone:py-14 tablet:px-10 tablet:py-[70px]">
          <h2 className="mx-auto max-w-[480px] font-display text-title font-semibold">
            {cta.heading}
          </h2>
          <p className="mt-3.5 text-lead text-muted">{cta.text}</p>
          <div className="mt-7 flex flex-col gap-2.5 phone:flex-row phone:justify-center phone:gap-3.5">
            <ButtonLink
              href={siteConfig.dexUrl}
              aria-label="Launch app"
              className="w-full phone:w-auto"
            >
              Launch app
            </ButtonLink>
            <ButtonLink href="/docs" variant="ghost" className="w-full phone:w-auto">
              Read the docs
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
