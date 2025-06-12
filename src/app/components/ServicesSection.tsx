// components/ServicesSection.tsx
import Image from "next/image";

const services = [
  {
    title: "Ebanisteria",
    description: "Consectetur adipiscing elit, sed do eiusmod tempo.",
    icon: "/placeholder.png", // Replace with your icon path
  },
  {
    title: "Ebanisteria",
    description: "Consectetur adipiscing elit, sed do eiusmod tempo.",
    icon: "/placeholder.png",
  },
  {
    title: "Ebanisteria",
    description: "Consectetur adipiscing elit, sed do eiusmod tempo.",
    icon: "/placeholder.png",
  },
  {
    title: "Ebanisteria",
    description: "Consectetur adipiscing elit, sed do eiusmod tempo.",
    icon: "/placeholder.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-brown-700 mb-10">Mis servicios</h2>

      <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={service.icon}
              alt={service.title}
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="font-semibold text-brown-700 mb-1">
              {service.title}
            </h3>
            <p className="text-sm text-gray-800">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
