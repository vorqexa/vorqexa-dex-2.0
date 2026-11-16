import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/marketing/Hero";
import { Features } from "@/components/marketing/Features";
import { Steps } from "@/components/marketing/Steps";
import { Infrastructure } from "@/components/marketing/Infrastructure";
import { CtaBand } from "@/components/marketing/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <div className="border-t border-line" />
      </Container>
      <Features />
      <Steps />
      <Infrastructure />
      <CtaBand />
    </>
  );
}
