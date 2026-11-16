import Image from "next/image";
import { siteConfig } from "@/config/site";
import { hero } from "@/content/home";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { OrderBookPreview } from "./OrderBookPreview";

export function Hero() {
  return (
    <section className="relative overflow-x-clip">
      <Image
        src="/brand/hero-watermark.png"
        alt=""
        aria-hidden="true"
        width={520}
        height={520}
        className="pointer-events-none absolute -right-[120px] -top-[60px] -z-10 hidden h-auto w-[520px] opacity-5 tablet:block"
      />

      <Container className="grid grid-cols-1 items-start gap-8 pb-[58px] pt-12 phone:gap-[42px] phone:pb-[76px] phone:pt-16 tablet:grid-cols-[1.05fr_0.95fr] tablet:items-center tablet:gap-[34px] tablet:pb-[100px] tablet:pt-[88px] desktop:gap-[50px]">
        <div className="min-w-0">
          <div className="mb-3.5 flex items-center gap-[9px] text-[13px] font-medium text-mint phone:mb-[18px] phone:text-sm">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_0_3px_rgba(184,255,228,0.18)]"
            />
            {hero.kicker}
          </div>

          <h1 className="max-w-[680px] font-display text-[31px] font-semibold leading-[1.08] tracking-[-0.025em] min-[381px]:text-[34px] phone:text-[42px] phone:tracking-[-0.02em] tablet:max-w-[560px] tablet:text-[46px] desktop:text-[52px]">
            {hero.title}
          </h1>

          <p className="mt-[17px] max-w-[680px] text-[15px] leading-[1.6] text-muted phone:mt-[22px] phone:text-base phone:leading-[1.65] tablet:max-w-[480px] tablet:text-[17px] tablet:leading-[1.6]">
            {hero.lead}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 phone:mt-7 phone:flex-row phone:gap-3.5 tablet:mt-[34px]">
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

          <div className="mt-[38px] grid grid-cols-2 gap-x-[18px] gap-y-[22px] border-t border-line pt-5 phone:mt-11 phone:flex phone:max-w-[680px] phone:gap-[30px] phone:pt-6 tablet:mt-14 tablet:max-w-[520px] tablet:gap-10">
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
