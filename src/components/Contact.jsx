import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center pt-24 px-6 max-w-6xl mx-auto relative"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-black blur-3xl" />

      <div className="w-full text-center relative z-10">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
          Let’s Work Together
        </h2>

        {/* CTA */}
        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto">
          I am currently seeking a full-time opportunity as a Full Stack Developer where I can contribute to building scalable applications and grow as a developer. 
          Feel free to reach out if you have an opportunity or would like to collaborate.
        </p>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* EMAIL */}
          <div
            className="
              group relative p-6 rounded-xl
              bg-zinc-900/40 backdrop-blur-lg
              border border-zinc-800
              transition-all duration-500

              hover:-translate-y-3
              hover:scale-[1.02]
              hover:border-green-400
              hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]
            "
          >
            {/* MOVING LIGHT */}
            <div className="absolute inset-0 pointer-events-none before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-[2px] before:bg-gradient-to-r from-transparent via-green-400 to-transparent before:opacity-0 group-hover:opacity-100 before:animate-[slide_2s_linear_infinite]" />

            <div className="flex flex-col items-center gap-3 relative z-10">
              <MdEmail className="text-3xl text-green-400 group-hover:scale-110 transition" />
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-400 text-sm break-all">
                dhanushmp52@gmail.com
              </p>
            </div>
          </div>

          {/* GITHUB */}
          <div
            className="
              group relative p-6 rounded-xl
              bg-zinc-900/40 backdrop-blur-lg
              border border-zinc-800
              transition-all duration-500

              hover:-translate-y-3
              hover:scale-[1.02]
              hover:border-green-400
              hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]
            "
          >
            <div className="absolute inset-0 pointer-events-none before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-[2px] before:bg-gradient-to-r from-transparent via-green-400 to-transparent before:opacity-0 group-hover:opacity-100 before:animate-[slide_2s_linear_infinite]" />

            <div className="flex flex-col items-center gap-3 relative z-10">
              <FaGithub className="text-3xl group-hover:scale-110 transition" />
              <h3 className="font-semibold text-lg">GitHub</h3>
              <a
                href="https://github.com/dhanush8714"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-green-400 transition"
              >
                github.com/dhanush8714
              </a>
            </div>
          </div>

          {/* LINKEDIN */}
          <div
            className="
              group relative p-6 rounded-xl
              bg-zinc-900/40 backdrop-blur-lg
              border border-zinc-800
              transition-all duration-500

              hover:-translate-y-3
              hover:scale-[1.02]
              hover:border-green-400
              hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]
            "
          >
            <div className="absolute inset-0 pointer-events-none before:absolute before:top-0 before:left-[-100%] before:w-[200%] before:h-[2px] before:bg-gradient-to-r from-transparent via-green-400 to-transparent before:opacity-0 group-hover:opacity-100 before:animate-[slide_2s_linear_infinite]" />

            <div className="flex flex-col items-center gap-3 relative z-10">
              <FaLinkedin className="text-3xl text-blue-400 group-hover:scale-110 transition" />
              <h3 className="font-semibold text-lg">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/dhanush-mp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-sm hover:text-green-400 transition"
              >
                linkedin.com/in/dhanush-mp
              </a>
            </div>
          </div>

        </div>

        {/* CTA BUTTON */}
        <div className="mt-12">
          <a
            href="mailto:dhanushmp52@gmail.com"
            className="
              inline-block px-8 py-3 rounded-lg
              bg-green-500 text-black font-semibold
              hover:bg-green-400 transition
              shadow-[0_10px_40px_rgba(34,197,94,0.3)]
            "
          >
            Send Message
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;