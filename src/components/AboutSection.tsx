import './AboutSection.scss'
import tv from '../assets/stock_images/tv.png';
import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Social Media Management",
    description:
      "Planejamento de conteúdo, otimização de perfil e engajamento.",
  },
  {
    id: 2,
    title: "Criação de Conteúdo",
    description:
      "Fotos, gravações, artes para redes sociais, edição e copywriting.",
    image: tv,
  },
  {
    id: 3,
    title: "Análise & Brand Growth",
    description:
      "Relatórios mensais, insights de performance, análise de concorrentes e estratégias.",
  },
  {
    id: 4,
    title: "Anúncios Direcionados",
    description:
      "Facebook e Google Ads, audiência direcionada, testes A/B e otimização de verba.",
  },
];

export default function AboutSection() {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

 return (
    <section className="agency-section">
      <h1 className="agency-title">
        Somos a <span className="highlight">agência</span> da{" "}
        <span className="highlight">nova geração</span>
      </h1>

      <div className="cards-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${selectedCard === card.id ? "active" : ""}`}
            onClick={() => handleCardClick(card.id)}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>

            {/* imagem aparece apenas se for o card ativo e tiver imagem */}
            {selectedCard === card.id && card.image && (
              <img src={card.image} alt={card.title} className="card-image" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};