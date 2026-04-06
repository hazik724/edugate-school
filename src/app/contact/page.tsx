"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="w-full" aria-label="Contact page of The EduGate School Mirpurkhas">

      {/* HERO */}
      <section
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center"
        aria-label="Contact The EduGate School Mirpurkhas"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl font-bold mb-4">
            Contact The EduGate School Mirpurkhas
          </h1>

          <p className="text-blue-100">
            Get in touch with The EduGate School Mirpurkhas for admissions, inquiries, fee details, and academic program information. Our team is here to assist parents and students.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 bg-white" aria-label="School contact information">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Address",
              value: "Lal chand garden near Ibn-e-rushd girls Collage, Mirpurkhas, Pakistan",
              icon: "📍",
            },
            {
              title: "Phone",
              value: "+92 3113839916 ",
              icon: "📞",
            },
            {
              title: "Email",
              value: "salmanhussain@gmail.com",
              icon: "✉️",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 bg-blue-50" aria-label="Contact form section">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Get in Touch with The EduGate School Mirpurkhas
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you are a parent looking for admission details or want to learn more about academic programs at The EduGate School Mirpurkhas, feel free to contact us. Our admissions team will respond promptly to assist you.
            </p>

            <div className="space-y-3 text-gray-600 text-sm">
              <p>• Admission inquiries and enrollment guidance</p>
              <p>• Fee structure and payment details</p>
              <p>• Information about Montessori, Primary, and Middle programs</p>
              <p>• General school-related questions</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* RIGHT FORM */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="mx-auto pb-20"
      >
        <ContactForm />
      </motion.div>

      {/* MAP */}
      <section className="py-20" aria-label="School location map">

      <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3600.2013748990503!2d69.01425677539274!3d25.531668277497243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDMxJzU0LjAiTiA2OcKwMDEnMDAuNiJF!5e0!3m2!1sen!2s!4v1775463105209!5m2!1sen!2s" 
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      </section>

      {/* CTA */}
      <section
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center"
        aria-label="Final call to contact the school"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-3">
            Contact The EduGate School Mirpurkhas Today
          </h2>

          <p className="text-blue-100 mb-6">
            Your journey towards quality education starts here. Reach out today for admissions and guidance.
          </p>
        </motion.div>
      </section>

    </div>
  )
}