function About() {
  return (
    <section className="pt-32 px-6 max-w-5xl mx-auto">
      <div
        className="absolute left-0 top-0 h-full w-[40%] 
                      bg-gradient-to-r from-green-700/60 
                      via-green-700/20 to-transparent 
                      blur-2xl"
      />
      <h1 className="text-3xl font-bold mb-4 text-green-400">About Me</h1>
      <p className="text-gray-400 leading-relaxed">
        MERN Stack Developer with hands-on experience building full-stack web
        applications using React, Node.js, Express.js, and MongoDB. Skilled in
        developing RESTful APIs, JWT authentication, and responsive user
        interfaces. Seeking a junior or entry-level full-stack developer role.
      </p>
    </section>
  );
}

export default About;
