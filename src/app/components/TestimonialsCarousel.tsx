// components/TestimonialsCarousel.tsx
"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Cecillia C.",
    quote: "Me encantó, estupendo!",
    comment:
      "Sed ut perspiciatis unde omnis iste natus ut perspiciatis unde omnis iste perspiciatis.",
    img: "/placeholder.png",
  },
  {
    name: "Carlos A.",
    quote: "Gran calidad!",
    comment:
      "Increíble atención al detalle y excelente servicio. ¡Recomendado!",
    img: "/placeholder.png",
  },
  {
    name: "Laura M.",
    quote: "Perfecto en cada detalle",
    comment: "Los materiales y acabados son impresionantes. Volveré a comprar.",
    img: "/placeholder.png",
  },
];

export default function TestimonialsCarousel() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 16,
    },
  });

  /*   const [sliderRef2, instanceRef2] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 16,
    },
  }); */

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    /*     const interval2 = setInterval(() => {
      instanceRef2.current?.next();
    }, 4000); */

    return () => {
      clearInterval(interval);
      /*       clearInterval(interval2); */
    };
  }, [instanceRef]);

  return (
    <section className="bg-[#744C28] py-16">
      <h2 className="text-center text-white text-lg mb-2">
        Mira algunos testimonios reales
      </h2>
      <h3 className="text-center text-white text-3xl font-bold mb-8">
        Testimonios
      </h3>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div ref={sliderRef} className="keen-slider max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-white rounded-xl flex flex-row md:flex-row  items-center shadow-md"
            >
              <div className="w-[50%] h-full relative overflow-hidden border">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <div className="text-left md:text-left p-4">
                <h4 className="font-bold text-lg">{t.quote}</h4>
                <p className="text-sm text-gray-600 my-2">“{t.comment}”</p>
                <p className="font-bold text-black text-right">- {t.name}</p>
              </div>
            </div>
          ))}
        </div>
        {/*         <div ref={sliderRef2} className="keen-slider max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="keen-slider__slide bg-white rounded-xl flex flex-row md:flex-row  items-center shadow-md"
            >
              <div className="w-[50%] h-full relative overflow-hidden border">
                <Image src={t.img} alt={t.name} fill className="object-cover" />
              </div>
              <div className="text-left md:text-left p-4">
                <h4 className="font-bold text-lg">{t.quote}</h4>
                <p className="text-sm text-gray-600 my-2">“{t.comment}”</p>
                <p className="font-bold text-black text-right">- {t.name}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
