"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#f3f3ff] w-full py-23">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-5">
          <p className="text-lg text-gray-600">Hello 👋!</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            I'm <span className="text-[#1c6bff]">Ajay Kumar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Full Stack Developer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I build modern, responsive, and user-friendly web applications.
            I enjoy turning complex problems into simple and efficient solutions using the latest technologies.
          </p>
          <div className="flex gap-5 pt-2">
            <button
              type="button"
              className="relative overflow-hidden bg-[#1c6bff] text-white px-6 py-3 rounded-full shadow-lg font-semibold 
              hover:bg-[#0f52c7] transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-xl"
            >
              <span className="relative z-10">View Portfolio</span>
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition duration-300"></span>
            </button>
            <button
              type="button"
              className="relative overflow-hidden border border-[#1c6bff] text-[#1c6bff] px-6 py-3 rounded-full font-semibold
              transition-all duration-300 ease-out transform hover:scale-105 hover:bg-[#1c6bff] hover:text-white hover:shadow-xl"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-[#1c6bff]/10 opacity-0 hover:opacity-100 transition duration-300"></span>
            </button>
          </div>
        </div>
        <div className="flex-1 relative h-[530px] flex justify-center items-center">

          {/* Floating Main Image */}
          <motion.img
            src="heroimage.png"
            alt="heroImage"
            className="w-64 md:w-80 z-0 drop-shadow-2xl absolute top-0"
            animate={{
              y: [0, -7, 0],      // same direction
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Floating Brush Stroke */}
          <motion.img
            src="brushstroke.png"
            alt=""
            className="w-[280px] md:w-[440px] z-10 mix-blend-multiply absolute bottom-0"
            animate={{
              y: [0, -7, 0],      // SAME DIRECTION
            }}
            transition={{
              duration: 7,       // slight variation for realism
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  );
}
