import { siteConfig } from "@/config/site";
import { cta } from "@/content/home";
import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaBand() {
  return (
    <Section>
      <div className="rounded-xl border border-line bg-panel px-5 py-11 text-center phone:px-7 phone:py-14 tablet:px-10 tablet:py-[70px]">
        <h2 className="mx-auto max-w-[480px] font-display text-2xl font-semibold leading-[1.25] phone:text-[26px] tablet:text-[30px]">
          {cta.heading}
        </h2>
        <p className="mt-3.5 text-sm text-muted phone:text-[15px]">{cta.text}</p>
        <div className="mt-6 flex flex-col gap-2.5 phone:mt-7 phone:flex-row phone:justify-center phone:gap-3.5">
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
    </Section>
  );
}
