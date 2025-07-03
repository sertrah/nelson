// components/AboutSection.tsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#141414] text-white px-6 py-12 relative ">
      <div className="md:max-w-7xl md:w-[80%] max-w-md mx-auto">
        <div className="flex flex-col gap-10 md:flex-row-reverse md:gap-10">
          <div className="md:basis-[50%] space-y-6 md:space-y-8">
            <p className="text-center text-sm uppercase tracking-widest text-white mb-4">
              cerca de mí
            </p>
            <h2 className="2xl:text-5xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%] mb-20">
              calidad de <br /> construcción para siempre
            </h2>

            <p className="text-sm mb-6">
              Soy un artesano de la construcción con años perfeccionando mi
              oficio en cada proyecto. Mi experiencia abarca desde complejas
              estructuras hasta los acabados más delicados, siempre con un
              enfoque meticuloso que distingue mi trabajo. Cada clavo, cada
              trazo de pincel y cada corte de madera refleja mi compromiso con
              la excelencia. No solo construyo o reparo: creo espacios que
              perduran en el tiempo, donde cada elemento ha sido cuidadosamente
              pensado y ejecutado. Mi filosofía se basa en cuatro pilares
              fundamentales:
            </p>

            <ul className="text-sm space-y-3 mb-6">
              <li>
                <b>01. Maestría Técnica</b> - Dominio completo de materiales,
                herramientas y técnicas especializadas
              </li>
              <li>
                <b>02. Precisión Milimétrica</b> - Cada medida, cada acabado
                ejecutado con exactitud profesional
              </li>
              <li>
                <b>03. Compromiso Total</b> - Puntualidad, transparencia y
                responsabilidad en cada proyecto
              </li>
              <li>
                <b>04. Visión Integral</b> - Entiendo tu espacio como un todo,
                cuidando hasta el mínimo detalle
              </li>
            </ul>

            <div className="text-center md:text-left">
              <button className="bg-[#8A181A] text-white font-semibold px-4 py-2 rounded shadow hover:bg-[#6f1416] transition-colors">
                Hablemos de tu proyecto
              </button>
            </div>
          </div>
          <div className="relative w-full h-56 mb-6 md:h-auto md:basis-[50%]">
            <Image
              src="/placeholder.png" // coloca aquí tu imagen en /public/images/
              alt="Foto personal"
              fill
              className="object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
