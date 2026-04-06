"use client";

import { motion } from "framer-motion";

export default function PrincipalSection() {
  return (
    <section
      className="w-full py-20 bg-white"
      aria-label="Principal message of The EduGate School Mirpurkhas"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* VIDEO SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-[260px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">

            {/* Video */}
            <motion.video
              src="/principal.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Glass Label */}
            <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
              Principal Message
            </div>

          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
              Message from the Principal – The EduGate School Mirpurkhas
            </h2>

            <p className="text-blue-600 font-semibold mt-2">
              Leading Education with Vision, Discipline & Excellence
            </p>
          </div>

          {/* Message */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            At The EduGate School Mirpurkhas, our mission is to nurture young minds
            with knowledge, discipline, and confidence. We believe that every child
            has the potential to succeed when guided with the right values and
            quality education.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Our academy focuses not only on academic excellence but also on character
            building, ensuring that students grow into responsible individuals
            prepared for future academic and life challenges.
          </p>

          {/* Signature */}
          <div className="pt-4">
            <p className="font-semibold text-gray-900">
              — Salman Hussain 
            </p>
            <p className="text-sm text-gray-500">
              Principal, The EduGate School Mirpurkhas
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}