"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { urlFor } from "@/sanity/lib/image"

export default function GalleryClient({ images }: { images: any[] }) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="w-full py-20 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Gallery
          </h2>
          <p className="text-gray-600 mt-4">
            Moments from our classrooms, activities, and events
          </p>
        </motion.div>

        {/* Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">

          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              className="relative overflow-hidden rounded-2xl cursor-pointer group break-inside-avoid"
              onClick={() => setSelected(index)}
            >
              <Image
                src={urlFor(item.image).url()}
                alt="Gallery"
                width={500}
                height={700}
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition duration-300"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300 rounded-2xl" />
            </motion.div>
          ))}

        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full"
            >
              <Image
                src={urlFor(images[selected].image).url()}
                alt="Preview"
                width={1000}
                height={800}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>

            {/* Close Hint */}
            <span className="absolute top-6 right-6 text-white text-sm opacity-70">
              Click anywhere to close
            </span>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}