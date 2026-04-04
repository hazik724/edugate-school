"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/ContactForm"

export default function ContactPage() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h1 className="text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-blue-100">
            We are here to assist you. Reach out for admissions, inquiries, or support.
          </p>
        </motion.div>
      </section>

      {/* CONTACT INFO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Address",
              value: "Your School Address, City, Pakistan",
              icon: "📍",
            },
            {
              title: "Phone",
              value: "+92 XXX XXXXXXX",
              icon: "📞",
            },
            {
              title: "Email",
              value: "info@edugate.com",
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
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you are a parent looking for admission details or simply
              want to learn more about our academic programs, feel free to reach
              out. Our team will respond to your inquiry as soon as possible.
            </p>

            <div className="space-y-3 text-gray-600 text-sm">
              <p>• Admission inquiries</p>
              <p>• Fee structure details</p>
              <p>• Academic programs information</p>
              <p>• General questions</p>
            </div>
          </motion.div>

         

        </div>
      </section>
 {/* RIGHT FORM */}
 <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <ContactForm />
          </motion.div>
      {/* MAP PLACEHOLDER */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Our Location
          </h2>

          <div className="w-full h-[400px] bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
            Google Map Embed Here
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-3">
            We Look Forward to Hearing From You
          </h2>
          <p className="text-blue-100 mb-6">
            Your journey towards quality education starts here.
          </p>
        </motion.div>
      </section>

    </div>
  )
}