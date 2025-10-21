import home from '../assets/stock_images/home.png';

export default function HeroSection() {
  return (
    <>
<div className="background-glow"></div>
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 
          flex flex-col lg:flex-row items-center gap-10 lg:gap-20"> 
          {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
          {/* flex-col: padrão (mobile/tablet) -> empilhado (imagem abaixo) */}
          {/* lg:flex-row: 1024px e acima -> lado a lado */}
          
          {/* Texto */}
          <div className="text-center md:text-left w-full lg:w-1/2"> 
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            {/* w-full: ocupa 100% da largura em mobile */}
            {/* lg:w-1/2: ocupa 50% da largura em desktop (1024px+) */}
            <h2 className="text-4xl md:text-5xl font-semibold leading-snug">
              Como <span className="text-blue-400 font-bold">human</span> é sua <span className="text-blue-400 font-bold">marca</span>?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-700">
              Aqui vai uma descrição ou subtítulo que explica melhor.
            </p>
          </div>

          {/* Imagem */}
          <div className="w-full lg:w-1/2"> 
            {/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ */}
            {/* w-full: ocupa 100% da largura em mobile */}
            {/* lg:w-1/2: ocupa 50% da largura em desktop (1024px+) */}
            <img 
              src={home} 
              alt="Home" 
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </section>



    </>
  );
}
