// components/TestimonialsCarousel.tsx
"use client";

// import "keen-slider/keen-slider.min.css";
/* import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import Image from "next/image"; */
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "../helpers/ui-layouts-utils";

/* const testimonials = [
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
]; */

const reviews = [
  {
    name: "Cecillia C.",
    username: "@jack",
    body: "Me encantó, estupendo!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Carlos A.",
    username: "@jill",
    body: "Gran calidad!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Laura M.",
    username: "@john",
    body: "Los materiales y acabados son impresionantes. Volveré a comprar.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Excelente servicio y atención al cliente. Muy recomendable.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Todo perfecto, excelente atención y servicio.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Muy satisfecho con el resultado final. Superó mis expectativas.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function TestimonialsCarousel() {
  return (
    <div className="relative flex w-full lg:max-w-[1280px] m-auto mt-16 flex-col items-center justify-center overflow-hidden">
      <div className="w-10/12 mx-auto">
        <h2 className="text-center text-black text-4xl mb-10"></h2>
        <p className="text-center text-sm uppercase tracking-widest text-gray-500 mb-4">
          Testimonios
        </p>
        <h2 className="2xl:text-5xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%] mb-20">
          Mira lo que dicen nuestros clientes
        </h2>
      </div>

      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
