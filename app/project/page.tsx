export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with Next.js, Tailwind CSS, and smooth animations.",
      stack: ["Next.js", "React", "Tailwind", "Vercel"],
      img: "brushstroke.png",
    },
    {
      title: "E-Commerce App",
      description:
        "A full-stack shopping platform with product filtering, user auth, and online payments.",
      stack: ["Node.js", "Express", "MongoDB", "React"],
      img: "brushstroke.png",
    },
    {
      title: "Chat Application",
      description:
        "A real-time chat application with WebSocket messaging and user online status.",
      stack: ["JavaScript", "Node.js", "Socket.io"],
      img: "brushstroke.png",
    },
    {
      title: "Task Manager App",
      description:
        "A productivity tool to manage daily tasks, scheduling, and cloud sync.",
      stack: ["React", "Firebase", "CSS"],
      img: "brushstroke.png",
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectList.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-blue-100 text-blue-600 font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="mt-6 bg-[#1c6bff] text-white px-5 py-2 rounded-full font-semibold hover:bg-[#0f52c7] transition">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
