"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* IMAGE SIDE (with layered feel) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] md:h-[500px]"
        >
      {/* Main Video */}
<div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl group">

{/* Video */}
<video
  src="/about.mp4"
  autoPlay
  muted
  loop
  playsInline
  className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
/>

{/* Dark Overlay (for premium look) */}
<div className="absolute inset-0 bg-black/30"></div>

{/* Gradient Overlay (top fade) */}
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>



</div>

          {/* Floating Glass Card */}
         </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >

          {/* Tag */}
          <div className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
            About Us
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Empowering Students Through
            <span className="block text-blue-600">
              Quality Education
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The EduGate is a modern academy dedicated to providing strong academic
            foundations for students. We focus on discipline, conceptual learning,
            and continuous improvement to help students achieve their goals with confidence.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our experienced teachers use structured teaching methods, interactive
            learning techniques, and regular assessments to ensure every student
            progresses effectively and builds long-term understanding.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">

            {[
              {
                title: "Qualified Teachers",
                desc: "Experienced and dedicated teaching staff.",
              },
              {
                title: "Structured Learning",
                desc: "Well-organized curriculum for steady progress.",
              },
              {
                title: "Regular Assessments",
                desc: "Frequent tests to track student performance.",
              },
              {
                title: "Interactive Classes",
                desc: "Engaging sessions for better understanding.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.div>
      </div>
    </section>
  );
}