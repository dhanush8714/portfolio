import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Contact() {
  const contacts = [
    {
      icon: <MdEmail />,
      title: "Email",
      value: "dhanushmp52@gmail.com",
      link: "mailto:dhanushmp52@gmail.com",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "github.com/dhanush8714",
      link: "https://github.com/dhanush8714",
    },
    {
      icon: <FaLinkedin />,
      title: "LinkedIn",
      value: "linkedin.com/in/dhanush-mp",
      link: "https://www.linkedin.com/in/dhanush-mp",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center pt-24 px-4 sm:px-6 max-w-6xl mx-auto overflow-x-hidden"
    >
      {/* 🔥 BACKGROUND GLOW (FIXED) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-80px] left-[-80px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-green-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-80px] right-[-80px] w-[250px] md:w-[350px] h-[250px] md:h-[350px] bg-green-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="w-full text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Let’s </span>
          <span className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.7)]">
            Connect
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mb-10 sm:mb-14 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          I’m open to full-time opportunities and collaborations. 
          Let’s build something amazing together.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">

          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="group relative rounded-xl p-[1px] bg-gradient-to-br from-green-500/30 to-transparent transition duration-500"
            >
              {/* CARD */}
              <div className="relative rounded-xl bg-black/60 backdrop-blur-xl border border-white/10 p-6 sm:p-8 text-center transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]">

                {/* ICON */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto flex items-center justify-center rounded-lg bg-green-500/10 text-green-400 text-xl sm:text-2xl mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>

                {/* VALUE */}
                <p className="text-gray-400 text-xs sm:text-sm group-hover:text-green-400 transition break-all">
                  {item.value}
                </p>

                {/* GLOW */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-green-500/5 blur-xl" />
              </div>
            </a>
          ))}

        </div>

        {/* CTA BUTTON */}
        <div className="mt-12 sm:mt-16">
          <a
            href="mailto:dhanushmp52@gmail.com"
            className="relative inline-flex items-center gap-2 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-full bg-green-500 text-black transition-all duration-300 hover:scale-105 hover:text-white shadow-[0_10px_30px_rgba(34,197,94,0.4)] hover:shadow-[0_20px_60px_rgba(34,197,94,0.7)]"
          >
            Send Message
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;