import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = {
    empresa: [
      { label: "Quem Somos", id: "about" },
      { label: "Trabalhos", id: "works" },
      { label: "Clientes", id: "clients" },
    ],
    contato: [
      { label: "Entre em Contato", id: "contact" },
      { label: "contato@nossaempresa.com", href: "mailto:contato@nossaempresa.com" },
      { label: "+55 11 9999-9999", href: "tel:+5511999999999" },
    ],
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="border-t bg-card">
      <div className=" mx-auto px-6 py-12">
        <div className="">
          <div>
            <h3 className="font-bold text-lg mb-4">Nossa Empresa</h3>
            <p className="text-muted-foreground text-sm">
              Transformando ideias em soluções digitais excepcionais desde 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {links.empresa.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              {links.contato.map((link, index) => (
                <li key={index}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid={`footer-contact-${index}`}
                    >
                      {link.label}
                    </a>
                  ) : link.id ? (
                    <button
                      onClick={() => scrollToSection(link.id!)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      data-testid={`footer-link-${link.id}`}
                    >
                      {link.label}
                    </button>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  data-testid={`button-social-${social.label.toLowerCase()}`}
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Nossa Empresa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
