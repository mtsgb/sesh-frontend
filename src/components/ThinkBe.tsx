import { ArrowRight, ArrowLeft, ArrowDown } from "lucide-react";

export default function ThinkBe() {
  return (
    <section className="bg-[#0E0E0E] py-20 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl px-6">
        {/* Think */}
        <div
          className="relative bg-[url('/images/think.jpg')] bg-cover bg-center rounded-2xl 
          flex flex-col justify-end p-6 md:col-span-2 h-60 md:h-72 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold flex items-center gap-2">
              Think <ArrowRight size={28} />
            </h2>
            <p className="mt-2 text-sm text-gray-200 max-w-sm">
              Uma marca que pensa e entende o mundo de forma diferente e relevante.
            </p>
          </div>
        </div>

        {/* Look */}
        <div
          className="relative bg-[url('/images/look.jpg')] bg-cover bg-center rounded-2xl
          flex flex-col justify-end p-6 h-60 md:h-72 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold flex items-center gap-2">
              Look <ArrowLeft size={28} />
            </h2>
            <p className="mt-2 text-sm text-gray-200 max-w-sm">
              Aquela que possui uma identidade visual e memorável.
            </p>
          </div>
        </div>

        {/* Be */}
        <div
          className="relative bg-[url('/images/be.jpg')] bg-cover bg-center rounded-2xl
          flex flex-col justify-end p-6 h-60 md:h-72 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold flex items-center gap-2">
              Be <ArrowDown size={28} />
            </h2>
            <p className="mt-2 text-sm text-gray-200 max-w-sm">
              Gera mudança e impacto na vida das pessoas na prática e não apenas no discurso.
            </p>
          </div>
        </div>

        {/* Original */}
        <div
          className="relative bg-[url('/images/original.jpg')] bg-cover bg-center rounded-2xl
          flex items-center justify-center p-6 h-60 md:h-72 text-white md:col-span-2 overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
          <h2 className="text-5xl font-bold relative z-10">Original</h2>
        </div>

        {/* Let’s Sesh */}
        <div
          className="bg-black rounded-2xl flex items-center justify-center h-60 md:h-72"
        >
          <h2 className="text-5xl font-bold text-white text-center">let’s<br />sesh</h2>
        </div>
      </div>
    </section>
  );
}
