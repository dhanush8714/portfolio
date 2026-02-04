function Contact() {
  return (
    <section className="pt-32 px-6 max-w-5xl mx-auto relative">
      
      {/* LEFT GREEN GLOW */}
      <div
        className="absolute left-0 top-0 h-full w-[40%]
                   bg-gradient-to-r from-green-700/60
                   via-green-700/20 to-transparent
                   blur-2xl"
      />

      <h1 className="text-3xl font-bold mb-6 text-green-400 relative">
        Contact
      </h1>

      <p className="text-gray-400 mb-2 relative">
        Email : dhanushmp52@gmail.com 
      </p>

      <p className="text-gray-400 mb-2 relative">
        GitHub :{" "}
        <a
          href="https://github.com/dhanush8714"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition"
        >
          https://github.com/dhanush8714
        </a>
      </p>

      <p className="text-gray-400 relative">
        LinkedIn :{" "}
        <a
          href="https://www.linkedin.com/in/dhanush-mp"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-green-400 transition"
        >
          https://www.linkedin.com/in/dhanush-mp
        </a>
      </p>
    </section>
  );
}

export default Contact;
