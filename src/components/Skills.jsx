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
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const techStack = [
    [<FaHtml5 className="text-orange-500" />, "HTML"],
    [<FaCss3Alt className="text-blue-500" />, "CSS"],
    [<FaJs className="text-yellow-400" />, "JavaScript"],
    [<FaReact className="text-blue-400" />, "React"],
    [<SiNextdotjs />, "Next.js"],
    [<SiRedux className="text-purple-500" />, "Redux"],
    [<SiTailwindcss className="text-cyan-400" />, "Tailwind"],
    [<FaNodeJs className="text-green-500" />, "Node.js"],
    [<SiExpress />, "Express"],
    [<SiMongodb className="text-green-500" />, "MongoDB"],
    [<SiPostgresql className="text-blue-400" />, "PostgreSQL"],
    [<FaGitAlt className="text-orange-500" />, "Git"],
    [<FaGithub />, "GitHub"],
    [<VscVscode className="text-blue-400" />, "VS Code"],
  ];

  return (
    <section className="py-20">
      
      <div className="max-w-5xl mx-auto relative overflow-hidden px-4 text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
          <span className="text-white">My</span>
          <span className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)]">Tech Stack</span>
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
          Technologies and tools I use to build scalable and modern web applications.
        </p>

        {/* GRADIENT FADE EDGES */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10" />

        {/* ROW 1 */}
        <div className="overflow-hidden mb-6">
          <div className="flex w-max animate-marquee gap-6">
            {[...techStack, ...techStack].map(([icon, name], i) => (
              <SkillPill key={i} icon={icon} name={name} />
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden">
          <div className="flex w-max animate-marquee-reverse gap-6">
            {[...techStack, ...techStack].map(([icon, name], i) => (
              <SkillPill key={i} icon={icon} name={name} />
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}

/* 🔥 SKILL PILL */
function SkillPill({ icon, name }) {
  return (
    <div
      className="
        flex items-center gap-3
        px-6 py-3
        rounded-full
        bg-zinc-900/70 border border-zinc-800

        text-sm text-gray-300

        transition-all duration-300

        hover:border-green-400
        hover:text-white
        hover:scale-105
        hover:shadow-[0_10px_30px_rgba(34,197,94,0.2)]
      "
    >
      <span className="text-lg">{icon}</span>
      {name}
    </div>
  );
}

export default Skills;