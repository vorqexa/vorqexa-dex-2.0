import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[1100] focus:rounded-[7px] focus:bg-mint focus:px-4 focus:py-2 focus:font-semibold focus:text-on-mint"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="relative z-[1]">
        {children}
      </main>
      <Footer />
    </>
  );
}
