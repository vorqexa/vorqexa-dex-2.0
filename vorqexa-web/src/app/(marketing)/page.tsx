import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <Container className="py-24">
      <h1 className="font-display text-[34px] font-semibold tracking-[-0.025em] phone:text-5xl">
        Trade Perpetuals. Your Way.
      </h1>
      <p className="mt-5 max-w-[480px] text-muted">
        Layout check: header, footer and mobile menu are live. Hero comes next.
      </p>
    </Container>
  );
}