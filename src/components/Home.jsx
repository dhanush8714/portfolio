import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 relative overflow-hidden"
    >
      {/* 🌟 BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-green-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-green-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="backdrop-blur-sm">
          {/* NAME */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {"Hi, I'm Dhanush Mp".split("").map((char, index) => (
              <span
                key={index}
                className="animate-letter"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>

          {/* 🔥 CHANGING ROLE */}
          <h2 className="text-xl md:text-2xl mb-4 font-semibold">
            <span className="text-white">I'm a </span>
            <span className="text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
              <TypeAnimation
                sequence={[
                  "MERN Stack Developer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "Backend Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 mb-8 max-w-xl">
            I build scalable web applications using MongoDB, Express, React, and
            Node.js. Passionate about creating clean UI and solving real-world
            problems.
          </p>

          {/* BUTTON */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/DHANUSH_MP_FullStack_Developer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg bg-green-600 text-black overflow-hidden transition-all duration-300 hover:text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_15px_50px_rgba(34,197,94,0.7)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-700 translate-x-[-100%] hover:translate-x-0 transition-transform duration-300" />
              <span className="relative z-10">View Resume →</span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              w-72 h-72 md:w-96 md:h-96
              rounded-full overflow-hidden
              border border-zinc-800
              animate-float
              hover:rotate-6 hover:scale-105
              transition-all duration-700 ease-out
              hover:shadow-[0_50px_90px_rgba(34,197,94,0.35)]
            "
          >
            <img
              src="/My_image.png"
              alt="Dhanush profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
