"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 border-t border-blue-200">

      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-5">
          <h2 className="text-2xl font-extrabold text-gray-900">
            The <span className="text-blue-600">EduGate</span>
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            A modern academy focused on building strong academic foundations
            with discipline, quality education, and student growth.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-blue-500 inline-block pb-1">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm font-medium text-black">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/programs" className="hover:text-blue-600 transition">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-blue-600 transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-5">
          <h3 className="text-lg font-bold text-gray-900 border-b-2 border-blue-500 inline-block pb-1">
            Contact
          </h3>

          <div className="text-sm text-gray-600 space-y-3">
            <p>
              <span className="font-semibold text-gray-800">Address:</span>{" "}
              Your School Address
            </p>
            <p>
              <span className="font-semibold text-gray-800">Phone:</span>{" "}
              +92 XXX XXXXXXX
            </p>
            <p>
              <span className="font-semibold text-gray-800">Email:</span>{" "}
              info@edugate.com
            </p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-200 py-5 text-center text-sm text-gray-600">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-600">The EduGate</span>. All rights reserved.
      </div>

    </footer>
  );
}