"use client";

import { motion } from "framer-motion";

export default function ActivitySection() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* VIDEO SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[260px] md:w-[300px] aspect-[9/16] rounded-2xl overflow-hidden shadow-xl group">

            {/* Video */}
            <motion.video
              src="/activity.mp4" // replace
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25"></div>

            {/* Label */}
            <div className="absolute bottom-4 left-4 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800">
              Student Activities
            </div>

          </div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* Heading */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Engaging Activities That Build Confidence
            </h2>

            <p className="text-blue-600 font-semibold mt-2">
              Learning Beyond the Classroom
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            At The EduGate, we believe education is more than just books.
            Our students actively participate in creative, physical, and
            intellectual activities that help them grow with confidence,
            teamwork, and real-world skills.
          </p>

          {/* Highlights */}
          <div className="space-y-3 pt-2">
            {[
              "Interactive classroom activities",
              "Confidence-building sessions",
              "Creative and physical engagement",
              "Student participation & teamwork",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}