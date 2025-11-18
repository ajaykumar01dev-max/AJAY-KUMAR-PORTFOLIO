"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  const menuItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About Me" },
    { href: "#project", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  // Smooth scroll
  const handleScroll = (e:any, href:any) => {
    e.preventDefault();
    const section = document.querySelector(href);
    setOpen(false);

    if (section) {
      const offset = section.offsetTop - 60; // Adjust for navbar height
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }

    setActive(href);
  };

  // Track active section while scrolling
  useEffect(() => {
    const handleScrollSpy = () => {
      menuItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(item.href);
        }
      });
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="bg-indigo-100 shadow-md sticky top-0 z-50 h-14 md:h-16">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl text-[#1c6bff] font-extrabold cursor-pointer">
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero")}>
            AJAY KUMAR
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-1 justify-center gap-10 text-[15px] font-medium">
          {menuItems.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href} className="relative group">
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className="relative py-1 transition-all duration-300 group-hover:text-[#1c6bff]"
                >
                  {item.label}

                  {/* Hover underline */}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#1c6bff] rounded-full transition-all duration-300 group-hover:w-full"></span>

                  {/* Active underline */}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute left-0 -bottom-1 h-[3px] bg-[#124ecb] rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Resume Button */}
        <div className="hidden md:block">
          <button className="bg-[#1c6bff] text-white px-5 py-2 rounded-full shadow-xl font-semibold hover:bg-[#124ecb] transition">
            Resume
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center relative"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`absolute h-0.5 w-6 bg-[#1c6bff] transition-all ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#1c6bff] transition-all ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-[#1c6bff] transition-all ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#f3f3ff] overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6 text-[16px] font-medium">
          {menuItems.map((item, index) => {
            const isActive = active === item.href;
            return (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  className={`block px-4 py-2 ${
                    isActive ? "text-[#1c6bff] font-semibold" : "text-gray-800"
                  }`}
                >
                  {item.label}
                </a>
                {isActive && (
                  <motion.div
                    layoutId="mobileUnderline"
                    className="h-[3px] bg-[#1c6bff] w-full rounded-full mt-1"
                  />
                )}
              </motion.li>
            );
          })}

          <li>
            <button className="bg-[#1c6bff] text-white px-6 py-2 rounded-full shadow-xl">
              Download Resume
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
