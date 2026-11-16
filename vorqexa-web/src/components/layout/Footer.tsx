import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import {
  XIcon,
  TelegramIcon,
  GithubIcon,
  YoutubeIcon,
  DocIcon,
} from "./SocialIcons";

const linkClass =
  "group inline-flex min-h-7 items-center gap-[9px] text-[13px] text-muted transition-colors duration-150 hover:text-mint phone:text-[13.5px]";

export function Footer() {
  const { socials } = siteConfig;

  return (
    <footer className="relative z-[1] border-t border-line pb-[30px] pt-[34px] phone:pb-10 phone:pt-11">
      <Container>
        <div className="flex flex-col items-start gap-[18px] phone:flex-row phone:flex-wrap phone:items-center phone:justify-between phone:gap-5">
          <Link href="/" aria-label="Vorqexa home">
            <Logo compact />
          </Link>

          <div className="grid w-full grid-cols-[repeat(2,minmax(0,1fr))] items-center gap-x-5 gap-y-3 phone:w-auto phone:grid-cols-[repeat(2,minmax(120px,1fr))] phone:gap-x-7 phone:gap-y-3.5">
            {socials.x ? (
              <a href={socials.x} target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" className={linkClass}>
                <XIcon />
                <span>X / Twitter</span>
              </a>
            ) : (
              <span aria-label="X / Twitter — link not configured yet" className={`${linkClass} cursor-default opacity-[0.72] hover:text-muted`}>
                <XIcon />
                <span>X / Twitter</span>
              </span>
            )}
            <a href={socials.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className={linkClass}>
              <TelegramIcon />
              <span>Telegram</span>
            </a>
            <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={linkClass}>
              <GithubIcon />
              <span>GitHub</span>
            </a>
            <a href={socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={linkClass}>
              <YoutubeIcon />
              <span>YouTube</span>
            </a>
            <Link href="/docs" aria-label="Documentation" className={linkClass}>
              <DocIcon />
              <span>Docs</span>
            </Link>
          </div>
        </div>

        <p className="mt-5 text-[11.5px] leading-[1.55] text-muted phone:mt-[18px] phone:text-[12.5px]">
          Vorqexa
          <br />
          {siteConfig.tagline}
        </p>
      </Container>

      <p className="mt-[18px] text-center text-xs leading-normal text-fg/55">
        Underlying trading infrastructure provided by Orderly Network.
      </p>
    </footer>
  );
}