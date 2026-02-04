function Projects() {
  return (
    <section className="pt-32 px-6 max-w-6xl mx-auto">
      <div className="absolute left-0 top-0 h-full w-[40%] 
                      bg-gradient-to-r from-green-700/60 
                      via-green-700/20 to-transparent 
                      blur-2xl" />
      <h1 className="text-3xl font-bold mb-8 text-green-400">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-zinc-800 rounded-xl p-6 hover:border-green-600 transition">
          <h3 className="text-xl font-semibold">E-Commerce App</h3>
          <p className="text-gray-400 mt-2">
            Full stack shopping app with cart, orders, and authentication.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-6 hover:border-green-600 transition">
          <h3 className="text-xl font-semibold">Portfolio Website</h3>
          <p className="text-gray-400 mt-2">
            Modern portfolio built using React and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
