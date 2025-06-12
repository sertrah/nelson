/* eslint-disable @typescript-eslint/no-explicit-any */
// components/CarouselKeen.tsx
"use client";

import "keen-slider/keen-slider.min.css";
import { KeenSliderInstance, useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/placeholder.png", caption: "Piezas hechas 100% a mano" },
  { src: "/placeholder.png", caption: "Diseño y detalle en cada corte" },
  { src: "/placeholder.png", caption: "Calidad que se siente y dura" },
];

const WheelControls = (slider: any) => {
  let touchTimeout: any;
  let position: any;
  let wheelActive: any;

  function dispatch(e: any, name: any) {
    position.x -= e.deltaX;
    position.y -= e.deltaY;
    slider.container.dispatchEvent(
      new CustomEvent(name, {
        detail: {
          x: position.x,
          y: position.y,
        },
      })
    );
  }

  function wheelStart(e) {
    position = {
      x: e.pageX,
      y: e.pageY,
    };
    dispatch(e, "ksDragStart");
  }

  function wheel(e) {
    dispatch(e, "ksDrag");
  }

  function wheelEnd(e) {
    dispatch(e, "ksDragEnd");
  }

  function eventWheel(e) {
    /*     const offset = e.deltaY;

    // Solo bloquear scroll cuando el movimiento es hacia arriba (negativo)
    if (offset <= 0) {
      return; // Permitir scroll normal del navegador
    }
 */
    e.preventDefault(); // Bloquear scroll hacia arriba
    if (!wheelActive) {
      wheelStart(e);
      wheelActive = true;
    }
    wheel(e);
    clearTimeout(touchTimeout);
    touchTimeout = setTimeout(() => {
      wheelActive = false;
      wheelEnd(e);
    }, 50);
  }

  slider.on("created", () => {
    slider.container.addEventListener("wheel", eventWheel, {
      passive: false,
    });
  });
};

export default function CarouselKeen() {
  const [loaded, setLoaded] = useState(false);

  const [opacities, setOpacities] = useState<number[]>([]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      mode: "snap",
      vertical: true,
      rubberband: false,
      slides: {
        origin: "center",
        perView: 1,
        spacing: 16,
      },
      detailsChanged(s: KeenSliderInstance) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion * 0.5 + 0.5
        );
        setOpacities(new_opacities);
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [WheelControls]
  );

  // Auto play cada 5 segundos
  /*   useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]); */

  return (
    <div className="relative max-w-5xl mx-auto h-[60svh]">
      <div ref={sliderRef} className="keen-slider h-full">
        {images.map((img, i) => (
          <div
            key={i}
            className="keen-slider__slide overflow-hidden shadow-md relative h-full"
          >
            <Image
              src={img.src}
              alt={`Imagen ${i}`}
              fill={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              quality={100}
              style={{ opacity: opacities[i], objectFit: "cover" }}
              className="h-64 w-full object-cover relative"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-40" />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
              <p className="text-lg font-semibold text-white">
                {images[currentSlide].caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}

      {/* Botones de navegación */}
      {/*       <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      >
        <ChevronRight />
      </button> */}

      {/* Texto */}
    </div>
  );
}
