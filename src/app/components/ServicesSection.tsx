"use client";
import ScrollElement from "@/components/ui-layout/scroll-element";
import { Axe, BrickWall, PaintRoller } from "lucide-react";

const services = [
  /*   {
    title: "Instalación",
    description:
      "Instalación profesional de pisos, puertas, ventanas y sistemas básicos para tu hogar.",
    icon: <Drill />, // Replace with your icon path
  }, */
  {
    title: "Construcción",
    description:
      "Construcción y remodelación de espacios. Ampliaciones, muros y reformas estructurales.",
    icon: <BrickWall />,
  },
  {
    title: "Carpintería",
    description:
      "Muebles en madera a medida. Closets, estanterías y mobiliario personalizado de calidad.",
    icon: <Axe />,
  },
  {
    title: "Pintura",
    description:
      "Pintura interior y exterior con acabados profesionales. Renovamos y protegemos tus espacios.",
    icon: <PaintRoller />,
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-12 px-4 text-center md:my-20">
      <ScrollElement
        viewport={{ once: true, amount: 0.5, margin: "0px 0px 0px 0px" }}
      >
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-4">
          Mis servicios
        </p>
        <h2 className="2xl:text-5xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%] mb-20">
          Eleva tu espacio vital, mejora tu calidad de vida
        </h2>
      </ScrollElement>

      <div className="w-10/12 flex flex-col md:flex-row md:max-w-4xl gap-8 max-w-md mx-auto">
        {services.map((service, index) => (
          <ScrollElement
            key={`services-${index}`}
            delay={index * 0.2}
            viewport={{ once: true, amount: 0.5, margin: "0px 0px 0px 0px" }}
          >
            <div className="flex flex-col items-center">
              {service.icon}
              <h3 className="font-semibold text-brown-700 mb-1 md:text-2xl">
                {service.title}
              </h3>
              <p className="text-sm text-gray-800">{service.description}</p>
            </div>
          </ScrollElement>
        ))}
      </div>
    </section>
  );
}
