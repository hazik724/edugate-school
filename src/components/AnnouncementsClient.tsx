"use client";

import { motion } from "framer-motion";

type Announcement = {
  title: string;
  date: string;
  description: string;
};

export default function AnnouncementsClient({
  announcements,
}: {
  announcements: Announcement[];
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
            Latest Announcements
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Stay updated with important notices, events, and school updates.
          </p>
        </motion.div>

        {/* Creative Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

{announcements.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.6,
      delay: index * 0.12,
    }}
    viewport={{ once: true }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="relative group"
  >

    {/* Card */}
    <div className="relative h-full rounded-2xl p-6 bg-white/60 backdrop-blur-md border border-white/40 shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-2xl">

      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-100/40 via-transparent to-blue-200/30 pointer-events-none"></div>

      {/* Date Badge */}
      <div className="inline-flex items-center mb-5 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-100/80 rounded-full backdrop-blur-sm">
        {item.date}
      </div>

      {/* Title */}
      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 leading-snug">
        {item.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {item.description}
      </p>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-blue-500 to-blue-300 transition-all duration-300 group-hover:w-full"></div>

      {/* Floating Corner Dot */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition"></div>

    </div>
  </motion.div>
))}

</div>
      </div>
    </section>
  );
}