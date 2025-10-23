import './WorksSection.scss';
import hcine from '../assets/stock_images/hcine.png';

export default function WorksSection() {
  return (
<section
  id="works-section"
  className="py-12 md:py-32 bg-gradient-to-r text-white"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center">

    <div className="w-full flex md:contents gap-4"> 
      
      <div className="flex-shrink-0 w-2/4 md:w-full flex justify-start">
        <img
          src={hcine}
          alt="Human Brand"
          className="w-full h-auto rounded-md" 
        />
      </div>
  
      <div className="w-3/5 space-y-2 md:space-y-6">
        
          <h2 className="text-xl sm:text-3xl md:text-5xl leading-tight md:leading-snug">
            How <br />
            <span className="font-semibold md:ml-10" style={{ color: "#5C7481" }}>
              human
            </span>
            <br />  
            is your <br />
            <span
              className="font-semibold sm:ml-16 md:ml-25"
              style={{ color: "#5C7481" }}
            >
              brand
            </span>
            ?
          </h2>

        <div className="mt-6 md:mt-12 w-full md:w-5/6 lg:w-4/5 xl:w-4/2 mx-auto">
          <p className="text-xs sm:text-lg md:text-[32px] leading-relaxed md:leading-[1.8] tracking-wide text-gray-200 mb-6 md:mb-10">
            Pessoas respondem melhor a marcas que as enxergam como indivíduos. 
            Acreditamos na humanização das relações entre marcas e pessoas. 
            Através da nossa metodologia em todo o nosso processo de criação, 
            desenvolvimento ou evolução de uma marca, colocamos sempre o ser humano no centro.
          </p>

          <p className="text-xs sm:text-lg md:text-[32px] leading-relaxed md:leading-[1.8] tracking-wide text-gray-200">
            Somado a isso, a importância de definir o propósito dessa marca no mundo 
            é fundamental para gerar valor e engajamento nessa relação.
          </p>
        </div>


      </div>
    </div>

  </div>
</section>

  );
}