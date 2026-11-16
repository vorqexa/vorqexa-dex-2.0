import { chains } from "@/content/chains";
import { Container } from "@/components/ui/Container";
import { ChainLogo } from "./ChainLogo";

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="hmarquee-row">
      {chains.list.map((c) => (
        <li
          key={c.slug}
          className="flex flex-none items-center gap-3.5 whitespace-nowrap text-base font-medium text-muted"
        >
          <ChainLogo slug={c.slug} short={c.short} size={32} />
          <span>{c.name}</span>
        </li>
      ))}
      <li className="flex-none whitespace-nowrap text-base font-medium text-mint">
        + {chains.moreCount} more
      </li>
    </ul>
  );
}

export function Chains() {
  return (
    <section
      id="chains"
      className="relative z-[1] border-t border-line py-[clamp(3rem,2rem+4vw,5rem)]"
    >
      <Container>
        <h2 className="text-center text-[13px] font-medium uppercase tracking-[0.3em] text-muted">
          {chains.heading}
        </h2>
      </Container>

      <div className="hmarquee mt-8 phone:mt-10">
        <div className="hmarquee-track">
          <Row />
          <Row hidden />
          <Row hidden />
          <Row hidden />
        </div>
      </div>
    </section>
  );
}
