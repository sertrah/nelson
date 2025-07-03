"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const items = [
  { id: "1", url: "/placeholder.png" },
  { id: "2", url: "/placeholder.png" },
  { id: "3", url: "/placeholder.png" },
  { id: "4", url: "/placeholder.png" },
  { id: "5", url: "/placeholder.png" },
  { id: "6", url: "/placeholder.png" },
  { id: "7", url: "/placeholder.png" },
  { id: "8", url: "/placeholder.png" },
];

function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current === null) return;
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [carousel]);

  return (
    <div className="relative w-full max-w-[1280px] overflow-hidden mx-auto my-20 flex flex-col align-center gap-10">
      <motion.div
        ref={carousel}
        drag="x"
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragConstraints={{ right: 0, left: -width }}
        dragTransition={{ bounceDamping: 30 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="flex will-change-transform cursor-grab active:cursor-grabbing"
      >
        {items.slice(0, 8)?.map((itemData, index) => {
          return (
            <motion.div
              key={`sss${index}`}
              className="min-w-[20rem] min-h-[25rem] p-2"
            >
              <Image
                src={itemData?.url}
                width={1000}
                height={1000}
                alt="img"
                className="w-full h-full object-cover pointer-events-none  rounded-md"
              />
            </motion.div>
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[6%] bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[6%] bg-gradient-to-l from-background"></div>
      <button className="bg-[#8A181A] self-center text-white font-semibold px-4 py-2 rounded shadow hover:bg-[#6f1416] transition-colors">
        Tienes un proyecto en mente?
      </button>
    </div>
  );
}

export default Carousel;
