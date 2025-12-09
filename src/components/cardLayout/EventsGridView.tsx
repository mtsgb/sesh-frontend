import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEventsGridController } from "./EventsGridController";
import EventCardView from "../eventCard/EventCardView";

const events = [
  { title: "Festival X", img: "/images/festival.jpg", date: "Janeiro, 2024 – Manaus, AM" },
  { title: "Motocross MonsterX", img: "/images/motocross.jpg", date: "Maio, 2025 – São Paulo, SP" },
  { title: "Maratona BSX", img: "/images/maratona.jpg", date: "Junho, 2025 – Manaus, AM" },
  { title: "Campeonato Amazonense Sub-18", img: "/images/sub18.jpg", date: "Jan 24 até Dez 24 – Manaus, AM" },
  { title: "Convenção Grow de Startups", img: "/images/convecao.jpg", date: "Fevereiro, 2024 – Manaus, AM" },
];

export default function EventsGridView() {
  const { sliderSettings, mode, setMode } = useEventsGridController();


  return (
    <div className="w-full min-h-screen px-4 sm:px-6 py-8 flex flex-col items-center gap-8 bg-black">
      {/* TOP SELECTOR */}
      <div className="flex gap-6 text-white text-lg font-semibold">
        <button onClick={() => setMode("grid")} className={`${mode === "grid" ? "text-blue-400" : "opacity-60"} hover:opacity-100`}>Grid</button>
        <button onClick={() => setMode("list")} className={`${mode === "list" ? "text-blue-400" : "opacity-60"} hover:opacity-100`}>Lista</button>
        <button onClick={() => setMode("carousel")} className={`${mode === "carousel" ? "text-blue-400" : "opacity-60"} hover:opacity-100`}>Carrossel</button>
      </div>

      {/* ======= GRID (sempre 3 colunas, apenas heights responsivos) ======= */}
      {mode === "grid" && (
        <div className="grid grid-cols-3 gap-6 w-full max-w-[1400px]">
          {/* ESQUERDA - ocupa 2 colunas */}
          <div className="col-span-2 flex flex-col gap-6">
            {/* maior (em cima) */}
            <EventCardView
              title={events[0].title}
              date={events[0].date}
              img={events[0].img}
              className="w-full h-[140px] sm:h-[220px] md:h-[320px] lg:h-[360px] xl:h-[420px]"
              onClick={() => console.log("clicou", events[0].title)}
            />

            {/* menor (embaixo) */}
            <EventCardView
              title={events[1].title}
              date={events[1].date}
              img={events[1].img}
              className="w-full h-[120px] sm:h-[180px] md:h-[260px] lg:h-[300px] xl:h-[340px]"
              onClick={() => console.log("clicou", events[1].title)}
            />
          </div>

          {/* DIREITA - ocupa 1 coluna */}
          <div className="flex flex-col gap-6">
            {/* menor (em cima) */}
            <EventCardView
              title={events[2].title}
              date={events[2].date}
              img={events[2].img}
              className="w-full h-[120px] sm:h-[180px] md:h-[260px] lg:h-[300px] xl:h-[340px]"
              onClick={() => console.log("clicou", events[2].title)}
            />

            {/* maior (embaixo) */}
            <EventCardView
              title={events[3].title}
              date={events[3].date}
              img={events[3].img}
              className="w-full h-[140px] sm:h-[220px] md:h-[320px] lg:h-[360px] xl:h-[420px]"
              onClick={() => console.log("clicou", events[3].title)}
            />
          </div>

          {/* FULL BOTTOM (ocupa as 3 colunas) */}
          <div className="col-span-3">
            <EventCardView
              title={events[4].title}
              date={events[4].date}
              img={events[4].img}
              className="w-full h-[160px] sm:h-[240px] md:h-[340px] lg:h-[400px] xl:h-[480px] shadow-2xl"
              onClick={() => console.log("clicou", events[4].title)}
            />
          </div>
        </div>
      )}

      {/* ======= LIST MODE ======= */}
      {mode === "list" && (
        <div className="flex flex-col gap-6 w-full max-w-[1100px]">
          {events.map((ev) => (
            <EventCardView
              key={ev.title}
              title={ev.title}
              date={ev.date}
              img={ev.img}
              className="w-full h-[140px] sm:h-[180px] md:h-[220px]"
              onClick={() => console.log("clicou", ev.title)}
            />
          ))}
        </div>
      )}

      {/* ======= CAROUSEL MODE (responsive 3/2/1) ======= */}
{mode === "carousel" && (
  <div className="w-full max-w-[1600px] px-4">
    <Slider {...sliderSettings}>
      {events.map((ev) => (
        <div key={ev.title} className="px-3">
          <EventCardView
            title={ev.title}
            date={ev.date}
            img={ev.img}
            className="
              w-full 
              h-[360px]   /* maior no mobile */
              sm:h-[260px]
              md:h-[340px]
              lg:h-[400px]
              xl:h-[450px]
            "
            onClick={() => console.log('clicou', ev.title)}
          />
        </div>
      ))}
    </Slider>
  </div>
)}

    </div>
  );
}
