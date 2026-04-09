import card1 from "../assets/card-1.png";
import card2 from "../assets/card-2.png";
import card3 from "../assets/card-3.png";
import card4 from "../assets/card-4.png";

function Projects() {
  const projects = [
    {
      title: "CRM - Client Relationship Management Portal",
      desc: "A comprehensive MERN-stack CRM with data-driven dashboards, Recharts visualizations, and full Lead/Deal management.",
      img: card2,
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind"],
      live: "https://crm-frontend-delta-gilt.vercel.app/dashboard",
      git1: "https://github.com/dhanush8714/CRM_Frontend",
      git2: "https://github.com/dhanush8714/CRM_Backend",
      featured: true,
    },
    {
      title: "SHOPZZY - E-Commerce Frontend",
      desc: "A Frontend E-commerce Web App with dynamic cart system, and responsive UI",
      img: card1,
      tech: ["Next.js", "TypeScript", "Rest APIs"],
      live: "https://next-app-router-eight-topaz.vercel.app/",
      git1: "https://github.com/dhanush8714/Next-app-router",
    },
    {
      title: "Quizz App",
      desc: "EduQ is a full-stack MERN quiz platform that allows users to test their knowledge, track quiz attempts, view leaderboards, and manage profiles.",
      img: card3,
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind",],
      live: "https://quiz-frontend-rouge.vercel.app/",
      git1: "https://github.com/dhanush8714/quiz-frontend",
      git2: "https://github.com/dhanush8714/quiz-backend",
    },
    {
      title: "Shop.co - Full Stack E-Commerce",
      desc: "Complete Full Stack e-commerce system with authentication and scalable backend.",
      img: card4,
      tech: ["React.js", "Node.js", "Express", "postgerSQL"],
      live: "https://ecommerce-frontend-21nm.vercel.app/",
      git1: "https://github.com/dhanush8714/ecommerce-frontend",
      git2: "https://github.com/dhanush8714/ecommerce-backend",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen pt-24 px-6 max-w-7xl mx-auto"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-green-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-green-400/10 blur-[150px] rounded-full" />
      </div>

      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        <span className="text-white">Featured </span>
        <span className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]">
          Projects
        </span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-12">

        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-green-500/30 to-transparent transition duration-500 hover:scale-[1.03]"
          >
            {/* CARD */}
            <div
              className="relative rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden
              transform transition duration-500 group-hover:rotate-[0.5deg] group-hover:-translate-y-3
              shadow-[0_20px_80px_rgba(0,0,0,0.6)] group-hover:shadow-[0_40px_120px_rgba(34,197,94,0.25)]"
            >
              {/* FEATURED BADGE */}
              {project.featured && (
                <span className="absolute top-5 left-5 z-10 px-3 py-1 text-xs bg-green-500 text-black rounded-full font-semibold">
                  Featured
                </span>
              )}

              {/* IMAGE */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.img}
                  alt=""
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* FLOAT BUTTON */}
                <a
                  href={project.live}
                  target="_blank"
                  className="absolute bottom-4 right-4 px-5 py-2 bg-green-500 text-black rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition hover:text-white"
                >
                  Live →
                </a>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300 group-hover:text-green-400 group-hover:border-green-400/40 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex gap-4 text-sm">
                  <a href={project.git1} className="text-gray-400 hover:text-green-400">
                    GitHub →
                  </a>
                  {project.git2 && (
                    <a href={project.git2} className="text-gray-400 hover:text-green-400">
                      Backend →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;