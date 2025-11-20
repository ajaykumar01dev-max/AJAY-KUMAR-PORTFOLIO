export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with Next.js, Tailwind CSS, and smooth animations.",
      stack: ["Next.js", "React", "Tailwind", "Vercel"],
      img: "project01.png",
    },
    {
      title: "E-Commerce App",
      description:
        "A full-stack shopping platform with product filtering, user auth, and online payments.",
      stack: ["Node.js", "Express", "MongoDB", "React"],
      img: "project01.png",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat application with WebSocket messaging and user online status.",
      stack: ["JavaScript", "Node.js", "Socket.io"],
      img: "project01.png",
    },
    {
      title: "Task Manager App",
      description:
        "A productivity tool to manage daily tasks, scheduling, and cloud sync.",
      stack: ["React", "Firebase", "CSS"],
      img: "project01.png",
    },
  ];

  return (
    <section id="project" className="bg-[#f3f3ff] w-full py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-900">My Projects</h1>
          <p className="text-gray-600 mt-4 text-lg">
            A collection of my best work — clean UI, modern tech, and great performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div
              key={project.title}
              className="
        bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden 
        hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 
        group
      "
            >
              {/* IMAGE */}
              <div className="w-full h-52 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-[#1c6bff] transition">
                  {project.title}
                </h2>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                px-3 py-1 text-xs bg-blue-100 text-blue-600 
                font-medium rounded-full tracking-wide
              "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  {/* Main project button */}
                  <button
                    className="flex-1 bg-[#1c6bff] text-white py-2.5 rounded-full font-semibold hover:bg-[#0f52c7] hover:shadow-lg transition-all cursor-pointer"
                  >
                    View Project →
                  </button>

                  {/* Live preview button */}
                  <button
                    className="flex-1 border border-[#1c6bff] text-[#1c6bff] py-2.5 rounded-full font-semibold hover:bg-[#1c6bff] hover:text-white hover:shadow-lg transition-all cursor-pointer"
                  >
                    Live Preview
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
