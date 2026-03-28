function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center pt-24 px-6 max-w-5xl mx-auto relative"
    >
      {/* BACKGROUND GLOW */}

      <div className="w-full text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
          Contact Me
        </h2>

        {/* CTA (VERY IMPORTANT) */}
        <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto">
          I am currently open to internships and junior developer opportunities. 
          Feel free to reach out if you’d like to collaborate or work together.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* EMAIL */}
          <div className="border border-zinc-800 rounded-xl p-6 hover:border-green-500 transition">
            <h3 className="text-green-300 font-semibold mb-2">Email</h3>
            <p className="text-gray-400 text-sm break-all">
              dhanushmp52@gmail.com
            </p>
          </div>

          {/* GITHUB */}
          <div className="border border-zinc-800 rounded-xl p-6 hover:border-green-500 transition">
            <h3 className="text-green-300 font-semibold mb-2">GitHub</h3>
            <a
              href="https://github.com/dhanush8714"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-green-400 transition break-all"
            >
              github.com/dhanush8714
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="border border-zinc-800 rounded-xl p-6 hover:border-green-500 transition">
            <h3 className="text-green-300 font-semibold mb-2">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/dhanush-mp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm hover:text-green-400 transition break-all"
            >
              linkedin.com/in/dhanush-mp
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;