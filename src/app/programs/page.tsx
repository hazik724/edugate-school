"use client"

import { motion } from "framer-motion"

export default function ProgramsPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white text-center overflow-hidden">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Academic Programs
          </h1>
          <p className="text-blue-100 text-lg">
            We offer a structured and modern curriculum from early childhood to middle level,
            designed to build strong academic foundations and lifelong learning skills.
          </p>
        </motion.div>
      </section>

      {/* PROGRAM SECTIONS */}
      {/* Montessori */}
<ProgramSection
  title="Montessori / Kindergarten"
  icon="🧸"
  overview="Our Montessori program is designed to provide a safe, engaging, and stimulating environment where young learners develop foundational cognitive, social, and motor skills through guided play and structured activities."
  philosophy="We follow a child-centered approach that encourages curiosity, independence, and exploration. Learning is facilitated through hands-on activities, storytelling, and interactive engagement rather than rote memorization."
  curriculum={[
    "Alphabet recognition and phonics",
    "Basic numeracy and counting",
    "Storytelling and listening skills",
    "Creative arts and crafts",
    "Motor skill development",
    "Social interaction and communication",
  ]}
  outcomes={[
    "Improved communication skills",
    "Basic literacy and numeracy understanding",
    "Enhanced creativity and imagination",
    "Social adaptability and confidence",
  ]}
/>

{/* Primary */}
<ProgramSection
  title="Primary Level"
  icon="📘"
  overview="The primary program builds a strong academic foundation by introducing structured learning across core subjects while maintaining a balanced focus on intellectual and personal development."
  philosophy="We emphasize conceptual understanding, discipline, and consistency. Students are encouraged to ask questions, participate actively, and develop problem-solving skills through guided instruction."
  curriculum={[
    "English language and grammar",
    "Urdu reading and writing",
    "Mathematics fundamentals",
    "General science",
    "Islamiat and ethics",
    "Computer basics and digital literacy",
  ]}
  outcomes={[
    "Strong reading and writing abilities",
    "Clear understanding of core subjects",
    "Basic analytical and logical thinking",
    "Confidence in classroom participation",
  ]}
  
/>

{/* Middle */}
<ProgramSection
  title="Middle Level"
  icon="📗"
  overview="The middle level program prepares students for higher academic challenges by introducing advanced concepts, subject specialization, and analytical learning techniques."
  philosophy="Our approach focuses on critical thinking, independent learning, and application-based understanding. Students are trained to analyze, interpret, and solve problems effectively across multiple disciplines."
  curriculum={[
    "Advanced English composition and comprehension",
    "Mathematics with problem-solving",
    "Physics, Chemistry, and Biology fundamentals",
    "Computer science and IT skills",
    "Social studies and history",
    "Islamic studies and moral education",
  ]}
  outcomes={[
    "Advanced subject understanding",
    "Improved critical thinking skills",
    "Preparation for board-level examinations",
    "Ability to apply concepts in real-world scenarios",
  ]}
/>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center relative overflow-hidden">

        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl font-bold mb-4">
            Enroll in Our Programs Today
          </h2>
          <p className="text-blue-100 mb-8">
            Give your child the opportunity to learn, grow, and succeed in a structured academic environment.
          </p>

          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:scale-105 transition">
            Contact Admissions
          </button>
        </motion.div>
      </section>

    </div>
  )
}

/* ================= PROGRAM SECTION COMPONENT ================= */

function ProgramSection({
  title,
  icon,
  overview,
  philosophy,
  curriculum,
  outcomes,
  reverse = false,
}: {
  title: string
  icon: string
  overview: string
  philosophy: string
  curriculum: string[]
  outcomes: string[]
  reverse?: boolean
}) {
  return (
    <section className="py-20 border-b border-blue-600 bg-blue-600">
      <div
        className={`max-w-5xl mx-auto px-6 ${
          reverse ? "text-right" : "text-left"
        }`}
      >

        {/* Header */}
        <div className="mb-8">
          <div className="text-3xl mb-2">{icon}</div>
          <h2 className="text-3xl font-bold text-white">
            {title}
          </h2>
        </div>

        {/* Content Card */}
        <div className="bg-white/70 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-sm space-y-8">

          {/* Overview */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Program Overview
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {overview}
            </p>
          </div>

          {/* Philosophy */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Teaching Philosophy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {philosophy}
            </p>
          </div>

          {/* Curriculum */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Curriculum Structure
            </h3>

            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
              {curriculum.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Learning Outcomes
            </h3>

            <ul className="grid sm:grid-cols-2 gap-2 text-gray-700">
              {outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}