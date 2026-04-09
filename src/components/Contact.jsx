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
      className="relative min-h-screen flex items-center pt-24 px-6 max-w-6xl mx-auto"
    >
      {/*  BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-green-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-green-400/10 blur-[140px] rounded-full" />
      </div>

      <div className="w-full text-center">
        
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Let’s </span>
          <span className="text-green-400 drop-shadow-[0_0_12px_rgba(34,197,94,0.7)]">
            Connect
          </span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mb-14 text-lg max-w-2xl mx-auto leading-relaxed">
          I’m open to full-time opportunities and collaborations. 
          If you have a project or role in mind, let’s build something amazing together.
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-green-500/30 to-transparent transition duration-500 hover:scale-[1.04]"
            >
              {/* CARD */}
              <div className="relative rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 p-8 text-center transition duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_40px_120px_rgba(34,197,94,0.25)]">

                {/* ICON BOX */}
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-green-500/10 text-green-400 text-2xl mb-4 group-hover:scale-110 transition">
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>

                {/* VALUE */}
                <p className="text-gray-400 text-sm group-hover:text-green-400 transition break-all">
                  {item.value}
                </p>

                {/*  HOVER GLOW */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-green-500/5 blur-xl" />
              </div>
            </a>
          ))}

        </div>

        {/* CTA BUTTON */}
        <div className="mt-16">
          <a
            href="mailto:dhanushmp52@gmail.com"
            className="relative inline-flex items-center gap-2 px-8 py-3 font-semibold rounded-full bg-green-500 text-black transition-all duration-300 hover:scale-105 hover:text-white shadow-[0_10px_40px_rgba(34,197,94,0.5)] hover:shadow-[0_20px_70px_rgba(34,197,94,0.8)]"
          >
            <span>Send Message</span>
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;