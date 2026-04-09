import CountUp from "react-countup";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-24 px-4 sm:px-6 relative overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto text-center w-full">
        
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-400">
          <span className="text-white">About</span>
          <span className="text-green-400 drop-shadow-[0_0_12px_rgba(34,197,94,0.7)]">Me</span>
        </h2>

        {/* CONTENT */}
        <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
          I am a passionate MERN Stack Developer who enjoys building modern,
          scalable web applications. I have hands-on experience with React,
          Node.js, Express.js, and MongoDB.
        </p>

        <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mt-4 text-sm sm:text-base">
          I am continuously learning new technologies and improving my skills by
          working on real-world projects. Currently, I am looking for an
          opportunity as a junior developer where I can grow and contribute to
          meaningful products.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          
          {/* CARD */}
          <Card
            icon={<FaLaptopCode />}
            value={<CountUp end={3} duration={2} enableScrollSpy />}
            label="Projects Completed"
          />

          <Card
            icon={<FaCode />}
            value={<CountUp end={10} duration={2} enableScrollSpy />}
            label="Technologies Known"
          />

          <Card
            icon={<SiMongodb />}
            value="8"
            label="Months Internship"
          />

        </div>
      </div>
    </section>
  );
}

/* 🔥 SAME STYLE CARD (FIXED) */
function Card({ icon, value, label }) {
  return (
    <div
      className="
        group relative p-6 sm:p-8 rounded-2xl
        bg-zinc-900/50 backdrop-blur-xl border border-zinc-800

        transition-all duration-500

        hover:-translate-y-2
        hover:scale-[1.02]   /*  reduced from 1.05 */
        hover:border-green-400
        hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]
      "
    >
      {/* GLOW BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl" />

      {/* TOP LIGHT LINE */}
      <div className="absolute inset-0 pointer-events-none before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-[2px] before:bg-gradient-to-r from-transparent via-green-400 to-transparent before:opacity-0 group-hover:opacity-100 before:animate-[slide_2s_linear_infinite]" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="text-3xl sm:text-4xl text-green-400 group-hover:scale-110 transition">
          {icon}
        </div>

        <h3 className="text-3xl sm:text-4xl font-bold text-green-400">
          {value}+
        </h3>

        <p className="text-gray-400 text-sm">{label}</p>
      </div>
    </div>
  );
}

export default About;