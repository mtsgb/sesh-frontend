import { useState, useEffect } from "react";
import SeshLogo from "@/assets/icons/SeshLogo"
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import WppIcon from "@/assets/icons/WppIcon";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-[#0f0f0f]/80 border-b border-[#222]" : "bg-transparent"
        } text-white`}
    >
      <div className="max-w mx-auto px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-3xl font-bold tracking-tight"
          >
            <SeshLogo width={81} height={65} color="#FFFFFF" />
          </button>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-8 md:ml-auto md:mr-32">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[20px] tracking-wide font-thin text-white/70 hover:text-white transition-all duration-300 ease-in-out"
              >
                {item.label}
              </button>

            ))}
          </nav>

          {/* Botões sociais */}
          <div className="hidden md:flex items-center gap-3">

            <Button
              size="icon"
              className="group h-10 w-10 rounded-full bg-button-contact border border-gray-500 
             hover:bg-accent cursor-pointer transition-colors duration-200"
              onClick={() => window.location.href = 'mailto:larissabranches@letssesh.com.br'}
            >
              <Mail className="!h-6 !w-6 text-black group-hover:text-white transition-colors duration-200" />
            </Button>

            <Button
              size="icon"
              className="group h-10 w-10 rounded-xl bg-button-contact border border-gray-500 
               hover:bg-accent cursor-pointer transition-colors duration-200"
              onClick={() => window.open('https://www.instagram.com/media.sesh', '_blank')}
            >
              <Instagram className="!h-6 !w-6 text-black group-hover:text-white transition-colors duration-200" />
            </Button>

            <Button
              className="group rounded-full border border-gray-500 hover:bg-accent 
             flex items-center gap-2 px-4 py-1
             text-[#161616] text-base font-thin bg-button-contact cursor-pointer
             transition-colors duration-200"
            >
              <span className="transition-colors duration-200 group-hover:text-white">
                Contate-nos
              </span>
              <WppIcon
                className="!h-8 !w-6 text-black group-hover:text-white transition-colors duration-200"
                color="currentColor"
              />
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
