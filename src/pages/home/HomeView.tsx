import AboutSection from "@/components/AboutSection";
import ClientsSection from "@/components/ClientsSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorksSection from "@/components/WorksSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <WorksSection />
        <ClientsSection />
      </main>
    </div>
  );
}
