import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar, HeroSection, BenefitsSection, ComparisonSection, GuaranteeSection, FinalCTASection, Footer, MobileStickyCTA } from "@/components/landing/Sections";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";

const title = "Protetor UV Premium 2 em 1 | Luminária Mata-Mosquitos";
const description = "Mata-mosquitos UV recarregável e abajur de amamentação: proteção contra picadas e dengue sem química, sem cheiro e silencioso. Frete grátis.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <AnnouncementBar />
      <HeroSection />
      <BenefitsSection />
      <ComparisonSection />
      <PricingSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}
