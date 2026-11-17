import { Container } from "@/components/ui/Container";
import { DocsNav } from "@/components/docs/DocsNav";
import { docsSections } from "@/content/docs";

const navItems = docsSections.map(({ id, label }) => ({ id, label }));

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="grid gap-7 pb-16 pt-8 tablet:grid-cols-[245px_minmax(0,1fr)] tablet:gap-[54px] tablet:pb-[90px] tablet:pt-[54px]">
      <aside className="tablet:sticky tablet:top-24 tablet:h-max">
        <DocsNav items={navItems} />
      </aside>
      <div className="min-w-0 max-w-[820px]">{children}</div>
    </Container>
  );
}
