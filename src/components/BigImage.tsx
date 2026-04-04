"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollOverlayImage() {
  const ref = useRef(null);

  // Track scroll inside this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Scale effect (zoom in)
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  // Opacity fade
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        <motion.div
          style={{ scale, opacity }}
          className="absolute inset-0"
        >
          {/* Image */}
          <Image
            src="/bigimage.jpeg" // replace
            alt="Overlay"
            fill
            className="object-cover"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content (Optional) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-white text-3xl md:text-5xl font-extrabold text-center">
              Experience Our Environment
            </h2>
          </div>
        </motion.div>

      </div>
    </section>
  );
}