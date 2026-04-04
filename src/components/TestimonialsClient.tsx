"use client";

import { motion } from "framer-motion";

type Testimonial = {
  name: string;
  role: string;
  feedback: string;
};

export default function TestimonialsClient({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <section className="w-full py-20 bg-white">
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
            What People Say
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Feedback from parents and students who experienced our learning environment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
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

                {/* Quote Icon */}
                <div className="text-blue-500 text-3xl mb-4 font-bold">
                  “
                </div>

                {/* Feedback */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {item.feedback}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">

                  <div>
                    <p className="font-semibold text-gray-900">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>
                  </div>

                  {/* Decorative Dot */}
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>

                </div>

                {/* Hover underline */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}