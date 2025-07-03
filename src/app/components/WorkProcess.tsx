import React from "react";
import {
  Accordion,
  AccordionContainer,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionWrapper,
} from "@/components/ui-layout/accordion";

export default function WorkProcessSection() {
  const steps = [
    {
      title: "Planeación Personalizada",
      description: (
        <ul>
          <li>Visita al sitio para analizar necesidades específicas</li>
          <li>Evaluación técnica del estado actual del espacio</li>
          <li>Toma de medidas precisas y identificación de desafíos</li>
          <li>Escucha activa de tus ideas y expectativas</li>
          <li>Propuesta de soluciones personalizadas</li>
        </ul>
      ),
    },
    {
      title: "Diseño y Planificación",
      description: (
        <ul>
          <li>Desarrollo de plan detallado basado en tu visión</li>
          <li>Selección de materiales y cronograma optimizado</li>
          <li>Presentación de opciones y alternativas</li>
          <li>Explicación clara de cada decisión técnica</li>
        </ul>
      ),
    },
    {
      title: "Presupuesto Transparente",
      description: (
        <ul>
          <li>Cumplimiento estricto del cronograma establecido</li>
          <li>Uso de herramientas profesionales y materiales de calidad</li>
          <li>Comunicación regular sobre el progreso</li>
          <li>Aplicación de técnicas especializadas</li>
        </ul>
      ),
    },
    {
      title: "Ejecución del Trabajo",
      description: [
        "Limpieza y entrega a tiempo",
        "Garantía de satisfacción",
        "Acompañamiento post-entrega",
      ],
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-24 ">
      <div className="flex flex-col items-left md:flex-row  md:max-w-7xl md:mx-auto md:items-start md:justify-between gap-14 space-">
        <div className="basis-[50%] text-center mb-12 md:text-left">
          <p className="uppercase text-sm tracking-wide text-gray-400">
            Perfeccion y atencion en cada detalle.
          </p>
          <h2 className="text-3xl font-bold">
            Metodología probada para resultados excepcionales en cada proyecto
          </h2>
          <p className="mt-4 text-gray-300">
            Cada proyecto es una oportunidad para crear algo duradero, funcional{" "}
            <br />y hecho con detalle.
          </p>
        </div>

        <div className="basis-[50%] space-y-10">
          {/* {steps.map((step, i) => (
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
          ))} */}
          <AccordionContainer className="w-full">
            <AccordionWrapper>
              <Accordion defaultValue={"item-1"}>
                {steps.map((step, i) => (
                  <AccordionItem value={`item-${i + 1}`} key={i}>
                    <AccordionHeader className="2xl:text-base text-sm">
                      {step.title}
                    </AccordionHeader>
                    <AccordionPanel className="2xl:text-base text-sm">
                      {step.description}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </AccordionWrapper>
          </AccordionContainer>
        </div>
      </div>
    </section>
  );
}
