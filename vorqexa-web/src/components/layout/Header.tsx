import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/[0.82] backdrop-blur-[10px]">
      <Container>
        <nav
          aria-label="Main"
          className="flex items-center justify-between py-[15px] tablet:py-[18px]"
        >
          <Link href="/" aria-label="Vorqexa home">
            <Logo />
          </Link>

          <div className="hidden items-center gap-[22px] tablet:flex desktop:gap-[34px]">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[14.5px] text-muted transition-colors duration-150 hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ButtonLink href={siteConfig.dexUrl} size="nav" aria-label="Launch app">
              Launch app
            </ButtonLink>
            <MobileMenu />
          </div>
        </nav>
      </Container>
    </header>
  );
}