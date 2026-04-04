"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white overflow-hidden flex items-center pt-24">
      
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-6"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Future Starts
            <span className="block text-blue-600">
              From Here
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-gray-600 text-base md:text-lg max-w-md"
          >
            A new way of learning where discipline meets innovation and students grow with confidence.
          </motion.p>

          {/* Stats Inline */}
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex flex-wrap gap-4 pt-4"
          >
            {["500+ Students", "20+ Teachers", "95% Success"].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -3 }}
                className="px-4 py-2 bg-white/60 backdrop-blur-md border border-white/40 rounded-full text-sm font-semibold text-blue-600 shadow-sm"
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT CREATIVE LAYOUT */}
        <div className="relative w-full h-[400px] md:h-[500px]">

          {/* MAIN IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute top-0 left-0 w-[80%] h-[80%] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/logo.jpeg"
              alt="School"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* FLOATING CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="absolute bottom-0 left-6 bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              Modern Learning
            </p>
          </motion.div>

          {/* FLOATING CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="absolute top-10 right-0 bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-lg"
          >
            <p className="text-sm font-semibold text-blue-600">
              Expert Teachers
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}