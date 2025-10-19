// import heroImage from "@assets/stock_images/abstract_technology__67e1ff84.jpg";

export default function HeroSection() {
  // const scrollToContact = () => {
  //   const element = document.getElementById("contact");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  // const scrollToWorks = () => {
  //   const element = document.getElementById("works");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
  <section
    id="hero"
    className="relative min-h-screen flex items-center bg-[#0b0b0b] px-6"
  >
    <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
      {/* Lado do Texto */}
      <div className="text-left">
        <p className="text-lg text-gray-400 italic mb-2">Let’s Sesh</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
          Uma experiência <span className="text-blue-400 font-bold">única e criativa.</span>
        </h1>
        <p className="text-gray-300 mb-6 max-w-xl">
          Lorem ipsum dolor <strong>sit amet</strong>, consectetur adipiscing elit. 
          Suspendisse <strong>id porttitor orci, condimentum</strong> facilisis diam. 
          Sed in felis at urna mollis <strong>aliquet efficitur</strong> in arcu. 
          <strong>Mauris suscipit lacus</strong> sed justo tincidunt convallis.
        </p>

        {/* Botão */}
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
            Ver nosso trabalho
          </button>
        </div>
      </div>

      {/* Lado vazio para imagem ou espaço visual */}
      <div className="hidden md:block">
        {/* Aqui poderia ir uma imagem ou efeito visual, se quiser */}
      </div>

    </div>
  </section>

  );
}
