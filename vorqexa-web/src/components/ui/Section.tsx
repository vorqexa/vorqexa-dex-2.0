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
    <section id={id} className="relative z-[1] py-section">
      <Container>{children}</Container>
    </section>
  );
}
