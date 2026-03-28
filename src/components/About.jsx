function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-24 px-6 relative"
    >
      {/* BACKGROUND GLOW */}
     

      <div className="max-w-5xl mx-auto text-center">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-400">
          About Me
        </h2>

        {/* CONTENT */}
        <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto text-lg">
          I am a passionate MERN Stack Developer who enjoys building modern,
          scalable web applications. I have hands-on experience with React,
          Node.js, Express.js, and MongoDB, and I focus on writing clean,
          efficient code.
        </p>

        <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto mt-4 text-lg">
          I am continuously learning new technologies and improving my skills by
          working on real-world projects. Currently, I am looking for an
          opportunity as a junior developer where I can grow and contribute to
          meaningful products.
        </p>

      </div>
    </section>
  );
}

export default About;