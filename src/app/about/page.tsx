"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const facilities = [
  {
    title: "Modern Classrooms",
    icon: "🏫",
    description:
      "Spacious, air-conditioned classrooms equipped with smart learning tools, interactive boards, and a comfortable environment that enhances focus and engagement.",
  },
  {
    title: "Experienced Faculty",
    icon: "👨‍🏫",
    description:
      "Highly qualified and dedicated teachers who focus on conceptual learning, student mentoring, and academic excellence through modern teaching methodologies.",
  },
  {
    title: "Computer Labs",
    icon: "💻",
    description:
      "Fully equipped computer labs with updated systems and internet access, enabling students to develop digital literacy and practical IT skills.",
  },
  {
    title: "Science Laboratories",
    icon: "🔬",
    description:
      "Well-maintained physics, chemistry, and biology labs that provide hands-on experimental learning to strengthen scientific understanding.",
  },
  {
    title: "Library Resources",
    icon: "📚",
    description:
      "A rich collection of books, reference materials, and digital resources that encourage reading habits and independent learning.",
  },
  {
    title: "Sports & Activities",
    icon: "⚽",
    description:
      "Indoor and outdoor sports facilities along with extracurricular activities that promote physical fitness, teamwork, and personal growth.",
  },
]

const stats = [
  { label: "Students", value: "1000+", icon: "🎓" },
  { label: "Teachers", value: "50+", icon: "👨‍🏫" },
  { label: "Years Experience", value: "10+", icon: "📅" },
  { label: "Success Rate", value: "95%", icon: "🏆" },
]

export default function AboutPage() {
  return (
    <div className="w-full" aria-label="About page of The EduGate School Mirpurkhas">

      {/* HERO SECTION */}
      <section
        className="relative py-28 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white overflow-hidden"
        aria-label="About The EduGate School Mirpurkhas"
      >
        {/* Background Glow Blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

        {/* Radial Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-[radial-gradient(circle_at_top,_white,_transparent)]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            About The EduGate School Mirpurkhas
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8"
          >
            The EduGate School Mirpurkhas is committed to delivering high-quality education,
            nurturing creativity, and building a strong academic foundation for students
            through experienced faculty, modern facilities, and a disciplined learning environment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:scale-105 transition">
              Explore Facilities
            </button>

            <button className="px-6 py-3 border border-white/40 text-white rounded-xl backdrop-blur-md hover:bg-white/10 transition">
              Contact Us
            </button>
          </motion.div>

        </div>
      </section>

      {/* FACILITIES */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-4 text-blue-700"
          >
            Our School Facilities at The EduGate School Mirpurkhas
          </motion.h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            At The EduGate School Mirpurkhas, we provide a modern and well-equipped learning environment designed to support academic excellence, creativity, and overall student development through advanced facilities and experienced faculty.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {facilities.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-md hover:shadow-xl transition relative overflow-hidden group"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 to-transparent pointer-events-none"></div>

                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4 text-xl">
                  {item.icon}
                </div>

                <h3 className="font-semibold text-lg text-blue-700 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-6xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12 text-blue-700"
          >
            Our Achievements at The EduGate School Mirpurkhas
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">

            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative group bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-md hover:shadow-xl transition overflow-hidden"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 to-transparent pointer-events-none"></div>

                <div className="text-3xl mb-4">
                  {stat.icon}
                </div>

                <h3 className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h3>

                <p className="text-gray-600">
                  {stat.label}
                </p>

                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-28 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white text-center overflow-hidden"
        aria-label="Admissions call to action"
      >

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto px-6"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join The EduGate School Mirpurkhas Today
          </h2>

          <p className="text-blue-100 mb-10 text-lg leading-relaxed">
            Take the first step toward a brighter future at The EduGate School Mirpurkhas.
            Enroll today and become part of a trusted educational institution focused on
            academic excellence, discipline, and holistic student development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
              Contact Us
            </button>

            <button className="px-8 py-3 border border-white/40 text-white rounded-xl backdrop-blur-md hover:bg-white/10 transition">
              View Admissions
            </button>

          </div>

        </motion.div>

      </section>

    </div>
  )
}