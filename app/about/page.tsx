export default function About() {
  return (
    <section id="about" className="bg-gray-50 w-full py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-16">

        {/* ================= HEADER ================= */}
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="font-bold text-4xl mb-4 text-gray-800">About Me</h1>
          <p className="text-gray-600 text-[17px] leading-relaxed max-w-3xl">
            I’m a passionate <span className="font-semibold text-gray-800">Full Stack Developer</span>
            who enjoys building modern, responsive, and user-friendly web applications.
            I specialize in technologies like React, Next.js, Node.js, Express, and MongoDB.
            I focus on writing clean, efficient code and turning ideas into real, functional products.
          </p>
        </div>

        {/* ================= CONTENT GRID ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* ================= TECH STACK ================= */}
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <h3 className="text-[20px] font-bold text-gray-800 mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {[
                "HTML",
                "CSS",
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "Express",
                "Git",
                "GitHub",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-100 py-3 rounded-lg text-center font-medium text-gray-700 hover:bg-gray-200 transition"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* ================= EDUCATION ================= */}
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100 relative">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Education</h3>

            <div className="space-y-5">

              {/* BCA */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow transition relative">
                {/* ICON AT TOP LEFT */}
                <div className="absolute top-4 left-3 w-12 h-12 flex items-center justify-center
          bg-blue-600 text-white rounded-xl text-xl shadow-sm">
                  🎓
                </div>

                <div className="ml-14"> {/* Add margin-left to avoid overlap with icon */}
                  <h4 className="text-lg font-semibold text-gray-700">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <p className="text-sm text-gray-500">Patna</p>
                  <p className="text-xs text-gray-500 mt-1">2019 — 2024</p>
                </div>
              </div>

              {/* Intermediate */}
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow transition relative">
                {/* ICON AT TOP LEFT */}
                <div className="absolute top-4 left-3 w-12 h-12 flex items-center justify-center
          bg-blue-600 text-white rounded-xl text-xl shadow-sm">
                  🎓
                </div>

                <div className="ml-14">
                  <h4 className="text-lg font-semibold text-gray-700">Intermediate</h4>
                  <p className="text-sm text-gray-500">Saharsa</p>
                  <p className="text-xs text-gray-500 mt-1">2017 — 2019</p>
                </div>
              </div>

            </div>
          </div>



          {/* ================= EXPERIENCE ================= */}
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Experience</h3>
            <div className="space-y-5">

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    💼
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Frontend Developer (Intern)</h4>
                    <p className="text-sm text-gray-500">ABC Tech Pvt Ltd</p>
                    <p className="text-xs text-gray-500 mt-1">JAN-2024 — APR-2024</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center text-xl shadow-sm">
                    💼
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Web Developer (Freelancer)</h4>
                    <p className="text-sm text-gray-500">Self Employed</p>
                    <p className="text-xs text-gray-500 mt-1">2023 — Present</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
