"use client";

import { motion } from "framer-motion";

const programs = [
  {
    title: "Primary Classes",
    description:
      "Strong foundation for young learners with focus on basics, discipline, reading, writing, and cognitive development.",
    details: [
      "Basic Math & English",
      "Concept Building",
      "Interactive Learning",
      "Weekly Assessments",
    ],
    duration: "Daily Classes",
  },
  {
    title: "Secondary Classes",
    description:
      "Advanced academic support for middle and high school students with subject-wise specialization and exam preparation.",
    details: [
      "Subject Specialists",
      "Exam Preparation",
      "Homework Support",
      "Performance Tracking",
    ],
    duration: "Regular Schedule",
  },
  {
    title: "Test Preparation",
    description:
      "Focused preparation for board exams and entry tests with mock tests, past papers, and strategy guidance.",
    details: [
      "Mock Exams",
      "Past Papers Practice",
      "Time Management",
      "Exam Strategy",
    ],
    duration: "Short Term Intensive",
  },
  {
    title: "Academic Support",
    description:
      "Personalized guidance for students who need extra attention in specific subjects or topics.",
    details: [
      "One-on-One Help",
      "Weak Subject Focus",
      "Doubt Clearing Sessions",
      "Customized Learning Plan",
    ],
    duration: "Flexible",
  },
];

export default function Programs() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Our Programs
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Carefully designed learning programs that focus on academic excellence,
            skill development, and student growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              {/* Glass Card */}
              <div className="h-full bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 shadow-md hover:shadow-xl transition">

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {program.description}
                </p>

                {/* Duration Badge */}
                <div className="inline-block mb-4 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded-full">
                  {program.duration}
                </div>

                {/* Details */}
                <div className="mt-4 space-y-2">
                  {program.details.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {item}
                    </div>
                  ))}
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}