"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#f3f3ff] overflow-hidden"
    >
      {/* Background Image (Mobile Only) */}
      <div
        className="
          absolute inset-0 
          bg-[url('/heroimage.png')] 
          bg-no-repeat bg-center bg-cover 
          opacity-30 
          md:hidden
        "
      ></div>

      {/* Dark Overlay on mobile */}
      <div className="absolute inset-0 bg-white/60 md:bg-transparent"></div>

      <div className="relative w-full max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <p className="text-lg text-gray-600">Hello 👋!</p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            I'm <span className="text-[#1c6bff]">Ajay Kumar</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
            Full Stack Developer
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
            I build modern, responsive, and user-friendly web applications.
            I enjoy turning complex problems into simple solutions.
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center md:justify-start gap-5 pt-2">
            <Link href="#project">
              <button className="relative overflow-hidden bg-[#1c6bff] text-white px-6 py-3 rounded-full shadow-lg font-semibold 
                hover:bg-[#0f52c7] transition-all duration-300 transform cursor-pointer hover:scale-105 hover:shadow-xl">
                View Portfolio
              </button>
            </Link>

            <Link href="#contact">
              <button className="relative overflow-hidden border border-[#1c6bff] text-[#1c6bff] px-6 py-3 rounded-full font-semibold
                transition-all duration-300 transform cursor-pointer hover:scale-105 hover:bg-[#1c6bff] hover:text-white hover:shadow-xl">
                Contact Me
              </button>
            </Link>
          </div>

          {/* SOCIAL ICONS — BELOW BUTTONS ON MOBILE */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <motion.a whileHover={{ scale: 1.15 }} className="social-icon">
              <FontAwesomeIcon icon={faFacebook} size="2x" className="text-[#3b5998]" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.15 }} className="social-icon">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="text-[#1da1f2]" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.15 }} className="social-icon">
              <FontAwesomeIcon icon={faInstagram} size="2x" className="text-[#d62976]" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.15 }} className="social-icon">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-[#0077b5]" />
            </motion.a>

            <motion.a whileHover={{ scale: 1.15 }} className="social-icon">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </motion.a>
          </div>
        </div>

        {/* RIGHT IMAGE (Desktop Only) */}
        <div className="hidden md:flex flex-1 w-full relative h-[530px] justify-center items-center">
          <motion.img
            src="/heroimage.png"
            alt="heroImage"
            className="w-80 drop-shadow-2xl pb-17 absolute"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.img
            src="/brushstroke.png"
            alt=""
            className="w-[440px] mix-blend-multiply absolute bottom-0"
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
