import home from '../assets/stock_images/home.png';

export default function HeroSection() {
  return (
    <>
      <div className="background-glow"></div>

      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-r text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-6 w-full">

          {/* Texto */}
          <div className="flex-1 min-w-[300px] md:min-w-[400px] lg:min-w-[500px] space-y-4 md:space-y-6">
            <p className="text-lg font-poppins text-primary italic mb-0 text-[32px] md:text-[48px]">
              Let’s Sesh
            </p>

            <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] leading-[0.95] font-light text-[#E5E7EB]">
              <span className="block">Uma experiência</span>
              <span className="block font-medium text-accent">única e criativa.</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Lorem ipsum dolor <strong>sit amet</strong>, consectetur adipiscing elit.
              Suspendisse <strong>id porttitor orci</strong>, condimentum facilisis diam.
              Sed in felis at urna mollis <strong>aliquet efficitur</strong> in arcu.
              <strong> Mauris suscipit lacus</strong> sed justo tincidunt convallis.
            </p>

            <button className="w-[14.25rem] h-[3rem] font-medium bg-accent text-white text-[18px] md:text-[20px] rounded-3xl hover:bg-[#6a8b99] transition">
              Ver nosso trabalho
            </button>
          </div>

          {/* Imagem */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={home}
              alt="Human Brand"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-2xl"
            />
          </div>

        </div>
      </section>
    </>
  );
}
