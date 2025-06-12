// components/WorkProcessSection.tsx
import { CheckCircle } from "lucide-react";

export default function WorkProcessSection() {
  const steps = [
    {
      title: "Planeación Personalizada",
      description: [
        "Escuchamos tus ideas y necesidades",
        "Diseñamos una solución funcional y estética",
        "Organizamos los tiempos y materiales",
      ],
    },
    {
      title: "Construcción Profesional",
      description: [
        "Mano de obra especializada y materiales de calidad",
        "Seguimiento diario del avance",
        "Ajustes según tus comentarios",
      ],
    },
    {
      title: "Control de Calidad",
      description: [
        "Inspección en cada fase del proceso",
        "Verificación de acabados y funcionalidad",
        "Pruebas de resistencia y durabilidad",
      ],
    },
    {
      title: "Entrega y Satisfacción",
      description: [
        "Limpieza y entrega a tiempo",
        "Garantía de satisfacción",
        "Acompañamiento post-entrega",
      ],
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="uppercase text-sm tracking-wide text-gray-400">
          Crafting perfection
        </p>
        <h2 className="text-3xl font-bold">Así trabajo en tu sueño</h2>
        <p className="mt-4 text-gray-300">
          Cada proyecto es una oportunidad para crear algo duradero, funcional y
          hecho con detalle.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="shrink-0">
              <CheckCircle className="text-yellow-500 w-6 h-6 mt-1" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {step.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
