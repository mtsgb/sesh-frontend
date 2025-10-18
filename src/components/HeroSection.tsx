import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import heroImage from "@assets/stock_images/abstract_technology__67e1ff84.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorks = () => {
    const element = document.getElementById("works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0b0b0b] before:content-[''] before:absolute before:inset-0 before:bg-radial-gradient from-[#1a1a1a] via-[#0b0b0b] to-[#0b0b0b] before:opacity-80"
>
      <div
        className="absolute inset-0 bg-cover bg-center"
      >
        <div className="absolute inset-0" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white">
            Transformamos{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Ideias
            </span>{" "}
            em Realidade
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Somos especialistas em criar experiências digitais excepcionais que impulsionam o
            crescimento do seu negócio. Do design à implementação, entregamos soluções completas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={scrollToContact}
              data-testid="button-hero-contact"
              className="gap-2"
            >
              Fale Conosco
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToWorks}
              data-testid="button-hero-works"
              className="backdrop-blur-sm bg-background/50"
            >
              Ver Trabalhos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
