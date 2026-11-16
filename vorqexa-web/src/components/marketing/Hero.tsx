import { siteConfig } from "@/config/site";
import { hero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { OrderBookPreview } from "./OrderBookPreview";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section className="relative overflow-x-clip">

      <Container className="grid grid-cols-1 items-start gap-10 pb-[clamp(3.5rem,2.5rem+5vw,6.25rem)] pt-[clamp(3rem,2rem+5vw,5.5rem)] tablet:grid-cols-[1.05fr_0.95fr] tablet:items-center tablet:gap-10 desktop:gap-[50px]">
        <div className="min-w-0">

          <h1
            style={d(80)}
            className="anim-fade-up max-w-[680px] font-display text-display font-semibold tablet:max-w-[560px]"
          >
            {hero.title}
          </h1>

          <p
            style={d(160)}
            className="anim-fade-up mt-5 max-w-[680px] text-lead text-muted tablet:mt-[22px] tablet:max-w-[480px]"
          >
            {hero.lead}
          </p>

          <div
            style={d(240)}
            className="anim-fade-up mt-7 flex flex-col gap-2.5 phone:flex-row phone:gap-3.5 tablet:mt-[34px]"
          >
            <ButtonLink
              href={siteConfig.dexUrl}
              aria-label="Launch app"
              className="w-full phone:w-auto"
            >
              Launch app
            </ButtonLink>
            <ButtonLink
              href="/#how-it-works"
              variant="ghost"
              className="w-full phone:w-auto"
            >
              How it works
            </ButtonLink>
          </div>

          <div
            style={d(320)}
            className="anim-fade-up mt-10 grid grid-cols-2 gap-x-[18px] gap-y-[22px] border-t border-line pt-5 phone:mt-11 phone:flex phone:max-w-[680px] phone:gap-[30px] phone:pt-6 tablet:mt-14 tablet:max-w-[520px] tablet:gap-10"
          >
            {hero.stats.map((s) => (
              <div key={s.title} className="min-w-0">
                <h4 className="text-lg font-semibold phone:text-[22px]">{s.title}</h4>
                <span className="mt-1 block text-xs leading-[1.4] text-muted phone:text-[13px]">
                  {s.caption}
                </span>
              </div>
            ))}
          </div>
        </div>

        <OrderBookPreview />
      </Container>
    </section>
  );
}
