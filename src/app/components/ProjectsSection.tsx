// components/ProjectsSection.tsx
"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

// import Image from "next/image";

interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
}
const projects: ProjectsTypes[] = [
  {
    id: "01",
    img: "/placeholder.png",
    title: "Trabajo en madera",
  },
  {
    id: "02",
    img: "/placeholder.png",
    title: "Herrería y metal",
  },
  {
    id: "03",
    img: "/placeholder.png",
    title: "Acabados y pintura",
  },
  {
    id: "04",
    img: "/placeholder.png",
    title: "Acabados de lujo",
  },
];

export default function index() {
  return (
    <section className="lg:w-[80%] lg:max-w-[1280px] mx-auto my-20">
      <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-4">
        Proyectos Realizados
      </p>
      <h2 className="2xl:text-5xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%] mb-20">
        Profesional en Construcción y carpintería ejecutadas con precisión y
        resultados excepcionales
      </h2>
      <div className="grid grid-cols-12  gap-4 overflow-hidden px-5 lg:pb-5 pb-2">
        {projects.map((project, index) => {
          let colSpanClass = "sm:col-span-6 col-span-12 ";
          if (index === 0) {
            colSpanClass = " sm:col-span-5 col-span-12 ";
          } else if (index === 1) {
            colSpanClass = "sm:col-span-7 col-span-12 ";
          } else if (index === projects.length - 2) {
            colSpanClass = "sm:col-span-7 col-span-12 ";
          } else if (index === projects.length - 1) {
            colSpanClass = "sm:col-span-5 col-span-12 ";
          }
          return (
            <React.Fragment key={project.id}>
              <motion.article
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut" }}
                viewport={{ once: false }}
                className={` relative  ${colSpanClass} `}
              >
                <div className="w-auto h-full">
                  <Image
                    src={project?.img}
                    alt={"image"}
                    height={600}
                    width={1200}
                    className="h-full w-full object-cover rounded-xl"
                  />
                </div>
                <div className="absolute lg:bottom-2 bottom-0 text-black w-full p-4 flex justify-between items-center">
                  <h3 className="lg:text-xl text-sm bg-black text-white rounded-xl p-2 px-4">
                    {project.title}
                  </h3>
                </div>
              </motion.article>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}

/* export default function ProjectsSection() {
  return (
    <section className="bg-white text-black px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-sm">Proyectos</p>
        <h2 className="text-2xl font-bold leading-tight">
          Carpintería y Herrería profesional con atención a la calidad <br />y
          una entrega exitosa
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 max-w-4xl mx-auto md:w-full md:max-w-7xl md:h-[50vh]">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
} */
