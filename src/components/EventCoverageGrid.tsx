import { useEffect, useState } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  image: string;
}

export default function EventCoverageGrid() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Erro ao carregar eventos:", err));
  }, []);

  if (events.length === 0) return null;

  return (
    <section className="py-20 bg-[#0e0e0e] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-2">Coberturas</h2>
        <h3 className="text-3xl text-gray-400 mb-10">de Eventos</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {/* Linha 1 */}
          <div className="md:col-span-2 relative rounded-2xl overflow-hidden">
            <EventCard event={events[0]} />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <EventCard event={events[1]} />
          </div>

          {/* Linha 2 */}
          <div className="relative rounded-2xl overflow-hidden">
            <EventCard event={events[2]} />
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <EventCard event={events[3]} />
          </div>

          {/* Linha 3 */}
          <div className="md:col-span-3 relative rounded-2xl overflow-hidden">
            <EventCard event={events[4]} />
          </div>
        </div>

        <p className="text-gray-400 mt-6 text-sm underline underline-offset-2">
          Veja todos os eventos que a Let’s Sesh já cobriu
        </p>
      </div>
    </section>
  );
}

function EventCard({ event }: { event?: Event }) {
  if (!event) return null;
  return (
    <div className="w-full h-full relative group">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
        <h4 className="text-xl font-semibold">{event.title}</h4>
        <p className="text-gray-300 text-sm">{event.date}</p>
      </div>
    </div>
  );
}
