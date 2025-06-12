// components/AboutSection.tsx
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#6b3e1d] text-white px-6 py-12 relative">
      <div className="max-w-md mx-auto">
        <h3 className="text-sm mb-2">Acerca de mí</h3>
        <h2 className="text-2xl font-bold leading-tight mb-4">
          calidad de <br /> construcción para siempre
        </h2>

        <p className="text-sm mb-6">
          Soy un profesional especializado en construcción y reparaciones
          integrales con amplia experiencia trabajando con diversos materiales y
          técnicas. Mi pasión es transformar espacios y resolver las necesidades
          específicas de cada hogar.
        </p>

        <ul className="text-sm space-y-3 mb-6">
          <li>01. Calidad garantizada en cada trabajo realizado</li>
          <li>02. Puntualidad y responsabilidad en todos mis compromisos</li>
          <li>03. Precios justos y transparentes sin sorpresas</li>
          <li>04. Atención al detalle que marca la diferencia</li>
        </ul>

        <div className="relative w-full h-56 mb-6">
          <Image
            src="/placeholder.png" // coloca aquí tu imagen en /public/images/
            alt="Foto personal"
            fill
            className="object-cover rounded"
          />
          <div className="absolute bottom-0 left-0 bg-black text-white px-4 py-2 text-sm font-semibold">
            Elaborado con <br /> pasión y precisión
          </div>
        </div>

        <div className="text-center">
          <button className="bg-[#f5f0e6] text-brown-700 font-semibold px-4 py-2 rounded shadow">
            Quiero que me llamen
          </button>
        </div>
      </div>
    </section>
  );
}
