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
    <div className="w-full">

    {/* HERO SECTION */}
<section className="relative py-28 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white overflow-hidden">

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
    About Our School
  </motion.h1>

  {/* Description */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8"
  >
    We are committed to delivering high-quality education, nurturing creativity,
    and building a strong foundation for future leaders through modern learning
    environments and dedicated faculty.
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
     {/* FACILITIES */}
<section className="py-20 bg-blue-50">
  <div className="max-w-6xl mx-auto px-6">

    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-3xl font-bold text-center mb-4 text-blue-700"
    >
      Our Facilities
    </motion.h2>

    <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
      We provide a modern and well-equipped learning environment designed to support
      academic excellence, creativity, and overall student development.
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

          {/* Gradient Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 to-transparent pointer-events-none"></div>

          {/* Icon */}
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-4 text-xl">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="font-semibold text-lg text-blue-700 mb-2">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-relaxed">
            {item.description}
          </p>

          {/* Bottom Accent Line */}
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
      Our Achievements
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

          {/* Glow Background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 to-transparent pointer-events-none"></div>

          {/* Icon */}
          <div className="text-3xl mb-4">
            {stat.icon}
          </div>

          {/* Value */}
          <h3 className="text-3xl font-bold text-blue-600 mb-2">
            {stat.value}
          </h3>

          {/* Label */}
          <p className="text-gray-600">
            {stat.label}
          </p>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"></div>

        </motion.div>
      ))}

    </div>
  </div>
</section>

      {/* CTA */}
      <section className="relative py-28 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white text-center overflow-hidden">

  {/* Background Glow Blobs */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
  <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="relative max-w-3xl mx-auto px-6"
  >

    <h2 className="text-3xl md:text-4xl font-bold mb-6">
      Join Our School Today
    </h2>

    <p className="text-blue-100 mb-10 text-lg leading-relaxed">
      Take the first step toward a brighter future. Enroll now and become part of
      a learning environment that focuses on growth, discipline, and success.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

      {/* Primary CTA */}
      <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition">
        Contact Us
      </button>

      {/* Secondary CTA */}
      <button className="px-8 py-3 border border-white/40 text-white rounded-xl backdrop-blur-md hover:bg-white/10 transition">
        View Admissions
      </button>

    </div>

  </motion.div>

</section>

    </div>
  )
}

/* Reusable Section Component */
function Section({
  title,
  text,
  image,
  reverse = false,
}: {
  title: string
  text: string
  image: string
  reverse?: boolean
}) {
  return (
    <section className="py-20">
      <div
        className={`max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-80 rounded-2xl overflow-hidden shadow-xl"
        >
          <Image src={image} alt={title} fill className="object-cover" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {title}
            </h2>
            <p className="text-gray-700 leading-relaxed">{text}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}