import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as Separator from "@radix-ui/react-separator";
import SeshLogo from "@/assets/icons/SeshLogo";
import WppIcon from "@/assets/icons/WppIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-background text-text-primary">
     
<div className="w-full bg-white rounded-3xl shadow-lg px-4 py-4 md:px-8 md:py-8 flex flex-col items-center">
  {/* Título centralizado */}
  <h1 className="text-3xl sm:text-4xl md:text-7xl text-text-dark font-light text-center">
    LET’S WORK <span className="font-bold">TOGETHER!</span>
  </h1>

  {/* Parágrafo + botão lado a lado */}
  <div className="mt-3 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
  <p className="text-gray-700 text-center sm:text-left text-sm sm:text-base">
    Mande um “Oi” pra gente!{' '}<br className="block sm:hidden" />
    Nós ficaremos felizes em ajudar sua marca a crescer!
  </p>
    <button
      className="bg-black text-white rounded-full px-4 py-2 text-sm sm:text-base font-medium hover:bg-accent transition-colors duration-200"
      onClick={() => window.location.href = 'mailto:larissabranches@letssesh.com.br'}
    >
      larissabranches@letssesh.com.br
    </button>
  </div>
</div>




      <div className="mx-auto px-6 py-12 flex flex-col items-center">
        <div className="w-[calc(100%-6rem)] flex items-end justify-between mb-4">
          {/* Logo */}
          <SeshLogo width={81} height={65} color="#FFFFFF" />

          {/* Ícones */}
          <div className="flex items-end space-x-4">
            {/* Instagram */}
            <Button
              size="icon"
              className="group h-10 w-1 border-none cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/media.sesh", "_blank")
              }
              aria-label="Instagram"
            >
              <InstagramIcon
                className="!h-6 !w-6"
              />
            </Button>

            <span className="group flex items-center justify-center w-10 h-10  cursor-pointer">
              <WppIcon
                className="!h-6 !w-6"
                color="white"
              />
            </span>
          </div>
        </div>

        {/* Separator menor, centralizado */}
        <Separator.Root
          className="w-[calc(100%-6rem)] h-px bg-gray-300 my-0 mx-auto"
          decorative
        />

        {/* Copyright */}
        <div className="mt-3 w-[calc(100%-6rem)] text-center">
          <p className="text-sm text-text-primary">
            Copyright © {new Date().getFullYear()} – Let’s Sesh – All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
