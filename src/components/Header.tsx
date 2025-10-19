import { useState, useEffect } from "react";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./Header.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "Quem somos", id: "about-section" },
    { label: "Nossos Cases", id: "works-section" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-[#0f0f0f]/80 border-b border-[#222]" : "bg-transparent"
      } text-white`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-3xl font-bold tracking-tight"
          >
            <span className="text-white">Let’s</span>
            <span className="text-[#7aa8ff]"> Sesh</span>
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[20px] tracking-wide hover:text-[#7aa8ff] transition-colors"
            >
              {item.label}
            </button>

            ))}
          </nav>

          {/* Botões sociais */}
          <div className="hidden md:flex items-center gap-3">
                    
              <Button
            size="icon"
            className="rounded-full bg-white border border-gray-500 hover:bg-gray-400 cursor-pointer"
            onClick={() => window.location.href = 'mailto:contato@empresa.com'}
          >
            <Mail className="h-5 w-5 text-black" />
          </Button>


            <Button
              size="icon"
              className="rounded-full bg-white border border-gray-500 hover:bg-gray-400 cursor-pointer"
              onClick={() => window.open('https://www.instagram.com/media.sesh', '_blank')}
            >
              <Instagram className="h-5 w-5 text-black" />
            </Button>
            <Button
              className="rounded-full border border-gray-500 hover:bg-gray-400 flex items-center gap-2 px-4 text-black bg-white cursor-pointer"
            >
              Contate-nos
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-black">
                <Phone className="h-4 w-4 text-white fill-white" />
              </span>
            </Button>
          </div>

          {/* Menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg text-left px-2 py-1 hover:text-[#7aa8ff] transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
