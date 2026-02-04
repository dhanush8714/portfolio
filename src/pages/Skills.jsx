function Skills() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden pt-32">

      {/* LEFT PURPLE GLOW */}
      <div className="absolute left-0 top-0 h-full w-[40%] 
                      bg-gradient-to-r from-green-700/60 
                      via-green-700/20 to-transparent 
                      blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-green-400 mb-16">
          Skills
        </h1>

        <div className="grid md:grid-cols-2 gap-24">

          {/* LEFT COLUMN */}
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-2">
                Frontend
              </h3>
              <p className="text-gray-300 leading-relaxed">
                React, Next.js, JavaScript, HTML, CSS, Tailwind CSS
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-300 mb-2">
                Database
              </h3>
              <p className="text-gray-300 leading-relaxed">
                MongoDB, Mongoose, PostgreSQL
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Backend
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Node.js, Express.js, REST APIs, JWT Authentication
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Tools & Concepts
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Git, GitHub, Clean Architecture, Agile
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
