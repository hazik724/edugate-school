"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* VIDEO SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[350px] md:h-[500px]"
        >
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl group">

            <video
              src="/about.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

          </div>
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
            About The Edugate School
          </div>

          {/* ✅ SEO HEADING */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Leading School in Mirpurkhas Providing
            <span className="block text-blue-600">
              Quality Education
            </span>
          </h2>

          {/* ✅ SEO CONTENT (VERY IMPORTANT) */}
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            The Edugate School is one of the best schools in Mirpurkhas, dedicated to providing high-quality education with a strong academic foundation. Our goal is to develop confident, disciplined, and capable students who are prepared for future challenges.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            As a trusted school in Mirpurkhas, we focus on conceptual learning, modern teaching methods, and continuous improvement. Our experienced teachers ensure that every student receives personal attention and achieves academic success through structured learning.
          </p>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            At The Edugate School, we combine discipline with innovation, helping students grow intellectually and personally. Our mission is to create a learning environment where students can excel in academics and build strong character.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">

            {[
              {
                title: "Qualified Teachers in Mirpurkhas",
                desc: "Experienced and dedicated teaching staff focused on student success.",
              },
              {
                title: "Structured Learning System",
                desc: "Well-organized curriculum designed for steady academic progress.",
              },
              {
                title: "Regular Assessments",
                desc: "Frequent testing system to monitor and improve performance.",
              },
              {
                title: "Interactive Classes",
                desc: "Engaging classroom environment for better understanding.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
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