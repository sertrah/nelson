// components/ProjectsSection.tsx
import Image from "next/image";

export default function ProjectsSection() {
  const images = [
    "/placeholder.png",
    "/placeholder.png",
    "/placeholder.png",
    "/placeholder.png",
    "/placeholder.png",
  ];

  return (
    <section className="bg-white text-black px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-sm">Proyectos</p>
        <h2 className="text-2xl font-bold leading-tight">
          Carpintería y Herrería profesional con atención a la calidad <br />y
          una entrega exitosa
        </h2>
      </div>

      <div className="grid grid-cols-2 max-w-4xl mx-auto">
        {images.map((src, i) => (
          <div
            key={i}
            className={`relative w-full ${
              i === 4 ? "col-span-2 aspect-[4/2]" : "aspect-[4/3]"
            }`}
          >
            <Image
              src={src}
              alt={`Proyecto ${i + 1}`}
              fill
              className="object-cover rounded"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
