import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import DifferentiationGrid from "@/components/DifferentiationGrid";
import ServicesGrid from "@/components/ServicesGrid";
import TechEvidence from "@/components/TechEvidence";
import LeadMagnet from "@/components/LeadMagnet";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <SocialProof />
      <DifferentiationGrid />
      <ServicesGrid />
      <TechEvidence />
      <LeadMagnet />
    </main>
  );
}
