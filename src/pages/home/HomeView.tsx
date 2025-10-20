import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101010]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ClientsSection />
        <ContactSection />
      </main>
    </div>
  );
}
