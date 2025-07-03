// components/HeroSection.tsx
"use client";
import { TimelineContent } from "@/components/ui-layout/framer-timeline";
import type { Variants } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef(null);

  // Subtle reveal animation
  const revealVariants: Variants = {
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.4,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hidden: {
      opacity: 0,
      y: 15,
    },
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full">
      {/* Background Image */}
      <Image
        src="/hero-bg.png" // Replace with your image path
        alt="Casa moderna"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-40" />

      <div className="z-20 absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        <TimelineContent
          as="h1"
          animationNum={0}
          timelineRef={heroRef}
          variants={revealVariants}
          className="mt-6 md:text-6xl lg:text-8xl font-extrabold text-5xl leading-tight"
        >
          MAESTRO <br /> PEREIRA
        </TimelineContent>

        <TimelineContent
          as="h1"
          animationNum={1}
          timelineRef={heroRef}
          variants={revealVariants}
          className="text-lg leading-tight sm:text-xl lg:text-2xl"
        >
          De la madera al hierro, construimos tus sueños.
        </TimelineContent>
      </div>
    </section>
  );
}
