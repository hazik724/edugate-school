"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setSuccess("Message sent successfully!");
      e.target.reset();
    } else {
      setSuccess("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section
      className="w-full py-24 bg-white"
      aria-label="Contact The EduGate School Mirpurkhas for admissions and inquiries"
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE (CONTENT) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Contact The EduGate School Mirpurkhas for Admissions & Inquiries
          </h2>

          <p className="text-gray-600">
            Get in touch with The EduGate School Mirpurkhas for admissions,
            academic guidance, and general inquiries. Our team is ready to assist parents and students.
          </p>

          {/* Highlights */}
          <div className="space-y-3 pt-2">
            {[
              "Quick response within 24 hours",
              "Friendly and professional staff",
              "Guidance for admissions in Mirpurkhas",
              "Support for parents & students",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="pt-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Trusted by 500+ Students & Parents
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE (FORM) */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/60 backdrop-blur-md border border-white/40 rounded-2xl p-6 md:p-10 shadow-xl space-y-6"
        >

          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600">
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600">
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              required
              placeholder=" "
              className="peer w-full px-4 pt-5 pb-2 h-32 rounded-lg bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
            <label className="absolute left-4 top-2 text-xs text-gray-500 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600">
              Your Message
            </label>
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {/* Success */}
          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-green-600"
            >
              {success}
            </motion.p>
          )}
        </motion.form>

      </div>
    </section>
  );
}