// components/HeroSection.tsx
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full">
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

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4 text-center">
        <h1 className="mt-6 text-6xl font-extrabold sm:text-5xl leading-tight">
          MAESTRO <br /> PEREIRA
        </h1>
        <p className="text-lg leading-tight sm:text-xl">
          De la madera al hierro, construimos tus sueños.
        </p>
      </div>
    </section>
  );
}
