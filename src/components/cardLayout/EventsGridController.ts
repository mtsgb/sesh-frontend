import { useState } from "react";
import type { Mode } from "./EventsGridType";

/**
 * Controller hook para grid de eventos.
 * - Gerencia filtros, ordenação, paginação, seleção e carregamento.
 * - Permite injetar um fetcher (útil para testes ou chamadas a API customizadas).
 */
export function useEventsGridController() {

    
  const [mode, setMode] = useState<Mode>("grid");

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "50px",

        responsive: [
            {
            breakpoint: 1024, // tablet
            settings: {
                slidesToShow: 2,
                centerMode: true,
                centerPadding: "80px",
            },
            },
            {
            breakpoint: 640, // mobile
            settings: {
                slidesToShow: 1,
                centerMode: true,
                centerPadding: "120px", // aumenta a largura visual
            },
            },
        ],
        };


    return {
        sliderSettings,
        mode,
        setMode,
    };
}