import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiRedux,
  SiJsonwebtokens,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white relative overflow-hidden pt-24 flex items-center"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4 text-center">
          Skills
        </h2>

        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to build scalable and modern web applications.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* FRONTEND */}
          <div className="group relative p-6 rounded-xl bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 transition-all duration-500 hover:border-green-400 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-green-300 mb-4 group-hover:text-green-400 transition">
                Frontend
              </h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <FaReact className="text-blue-400 group-hover:rotate-6 transition" /> React.js
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <SiNextdotjs /> Next.js
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <FaJs className="text-yellow-400" /> JavaScript
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <FaHtml5 className="text-orange-500" /> HTML
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <FaCss3Alt className="text-blue-500" /> CSS
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <SiTailwindcss className="text-cyan-400" /> Tailwind CSS
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <SiRedux className="text-purple-500" /> Redux
                </li>
              </ul>
            </div>
          </div>

          {/* BACKEND */}
          <div className="group relative p-6 rounded-xl bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 transition-all duration-500 hover:border-green-400 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-green-300 mb-4 group-hover:text-green-400 transition">
                Backend
              </h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <FaNodeJs className="text-green-500" /> Node.js
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <SiExpress /> Express.js
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  ⚡ REST APIs
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <SiJsonwebtokens className="text-pink-500" /> JWT Authentication
                </li>
              </ul>
            </div>
          </div>

          {/* DATABASE */}
          <div className="group relative p-6 rounded-xl bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 transition-all duration-500 hover:border-green-400 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-green-300 mb-4 group-hover:text-green-400 transition">
                Database
              </h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <SiMongodb className="text-green-500" /> MongoDB
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <SiMongodb className="text-green-500" /> Mongoose
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <SiPostgresql className="text-blue-400" /> PostgreSQL
                </li>
              </ul>
            </div>
          </div>

          {/* TOOLS */}
          <div className="group relative p-6 rounded-xl bg-zinc-900/50 backdrop-blur-lg border border-zinc-800 transition-all duration-500 hover:border-green-400 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-green-300 mb-4 group-hover:text-green-400 transition">
                Tools & Concepts
              </h3>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <FaGitAlt className="text-orange-500" /> Git
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <FaGithub /> GitHub
                </li>
                 <li className="flex items-center gap-2 text-gray-300">
  <VscVscode className="text-blue-400" /> VS Code
</li>
                <li className="flex items-center gap-2 text-gray-300">
                  ⚡ Clean Architecture
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  ⚡ Agile
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;