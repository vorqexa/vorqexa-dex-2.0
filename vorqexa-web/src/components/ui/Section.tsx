import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  id,
  children,
}: {
  id?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative z-[1] scroll-mt-20 py-[62px] phone:py-[76px] tablet:py-24"
    >
      <Container>{children}</Container>
    </section>
  );
}
