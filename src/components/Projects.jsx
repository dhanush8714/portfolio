import card1 from "../assets/card-1.png"
import card2 from "../assets/card-2.png"
import card3 from "../assets/card-3.png"
import card4 from "../assets/card-4.png"

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-24 px-6 max-w-7xl mx-auto relative flex items-center"
    >
      <div className="w-full">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-green-400 text-center">
          Projects
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* PROJECT CARD */}
         <div
  className="
    group relative rounded-2xl overflow-hidden
    border border-zinc-800
    bg-zinc-900/40 backdrop-blur-lg

    transition-all duration-500

    hover:-translate-y-3
    hover:scale-[1.02]
    hover:border-green-400

    hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]
  "
>
  {/* IMAGE */}
  <div className="h-60 overflow-hidden relative">
    
    <img
      src={card2}  
      alt="Project"
      className="
        w-full h-full object-cover
        transition duration-700
        group-hover:scale-110
      "
    />

    {/* DARK OVERLAY ON HOVER */}
    <div
      className="
        absolute inset-0 bg-black/40
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
    />

    {/* BUTTON ON IMAGE HOVER */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
    >
    </div>
  </div>

  {/* CONTENT */}
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">
      CRM - Client Relationship Management Portal
    </h3>

    <p className="text-gray-400 mb-4 text-sm">
     A comprehensive MERN-stack CRM with data-driven dashboards, Recharts visualizations, and full Lead/Deal management.
    </p>

    {/* TECH TAGS */}
    <div className="flex flex-wrap gap-2 mb-4">
      {["React", "Node.js", "Express", "MongoDB", "Tailwind"].map(
        (tech, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-xs
              bg-zinc-800 rounded-full text-gray-300
              group-hover:bg-green-500/20 group-hover:text-green-400
              transition
            "
          >
            {tech}
          </span>
        )
      )}
    </div>

    {/* LINKS */}
    <div className="flex gap-6 text-sm">
      <a href="https://crm-frontend-delta-gilt.vercel.app/dashboard" className="text-green-400 hover:underline">
        Live Demo →
      </a>

      <a
        href="https://github.com/dhanush8714/CRM_Frontend"
        className="text-gray-400 hover:text-green-400 transition"
      >
        Frontend GitHub →
      </a>

      <a
        href="https://github.com/dhanush8714/CRM_Backend"
        className="text-gray-400 hover:text-green-400 transition"
      >
        Backend GitHub →
      </a>
    </div>
  </div>
</div>

          {/* PROJECT CARD 2 */}
         <div
  className="
    group relative rounded-2xl overflow-hidden
    border border-zinc-800
    bg-zinc-900/40 backdrop-blur-lg

    transition-all duration-500

    hover:-translate-y-3
    hover:scale-[1.02]
    hover:border-green-400

    hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]
  "
>
  {/* IMAGE */}
  <div className="h-60 overflow-hidden relative">
    
    <img
      src={card1}
      alt="Project"
      className="
        w-full h-full object-cover
        transition duration-700
        group-hover:scale-110
      "
    />

    {/* DARK OVERLAY ON HOVER */}
    <div
      className="
        absolute inset-0 bg-black/40
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
    />

    {/* BUTTON ON IMAGE HOVER */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
    >
    </div>
  </div>

  {/* CONTENT */}
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">
      SHOPZZY - E-Commerce Frontend
    </h3>

    <p className="text-gray-400 mb-4 text-sm">
      A Frontend E-commerce Web App with dynamic cart system, and responsive UI.
    </p>

    {/* TECH TAGS */}
    <div className="flex flex-wrap gap-2 mb-4">
      {["Next.js", "Typescript", "Rest API", "Css"].map(
        (tech, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-xs
              bg-zinc-800 rounded-full text-gray-300
              group-hover:bg-green-500/20 group-hover:text-green-400
              transition
            "
          >
            {tech}
          </span>
        )
      )}
    </div>

    {/* LINKS */}
    <div className="flex gap-6 text-sm">
      <a href="https://next-app-router-eight-topaz.vercel.app/" className="text-green-400 hover:underline">
        Live Demo →
      </a>

      <a
        href="https://github.com/dhanush8714/Next-app-router"
        className="text-gray-400 hover:text-green-400 transition"
      >
        GitHub →
      </a>
    </div>
  </div>
</div>

             {/* PROJECT CARD 3 */}
         <div
  className="
    group relative rounded-2xl overflow-hidden
    border border-zinc-800
    bg-zinc-900/40 backdrop-blur-lg

    transition-all duration-500

    hover:-translate-y-3
    hover:scale-[1.02]
    hover:border-green-400

    hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]
  "
>
  {/* IMAGE */}
  <div className="h-60 overflow-hidden relative">
    
    <img
      src={card3}
      alt="Project"
      className="
        w-full h-full object-cover
        transition duration-700
        group-hover:scale-110
      "
    />

    {/* DARK OVERLAY ON HOVER */}
    <div
      className="
        absolute inset-0 bg-black/40
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
    />

    {/* BUTTON ON IMAGE HOVER */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
    >
    </div>
  </div>

  {/* CONTENT */}
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">
      Quizz App
    </h3>

    <p className="text-gray-400 mb-4 text-sm">
      EduQ is a full-stack MERN quiz platform that allows users to test their knowledge, track quiz attempts, view leaderboards, and manage profiles.
    </p>

    {/* TECH TAGS */}
    <div className="flex flex-wrap gap-2 mb-4">
      {["React", "Node.js", "Express", "MongoDB", "Tailwind"].map(
        (tech, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-xs
              bg-zinc-800 rounded-full text-gray-300
              group-hover:bg-green-500/20 group-hover:text-green-400
              transition
            "
          >
            {tech}
          </span>
        )
      )}
    </div>

    {/* LINKS */}
    <div className="flex gap-6 text-sm">
      <a href="https://quiz-frontend-rouge.vercel.app/" className="text-green-400 hover:underline">
        Live Demo →
      </a>

      <a
        href="https://github.com/dhanush8714/quiz-frontend"
        className="text-gray-400 hover:text-green-400 transition"
      >
        Frontend GitHub →
      </a>

      <a
        href="https://github.com/dhanush8714/quiz-backend"
        className="text-gray-400 hover:text-green-400 transition"
      >
        Backend GitHub →
      </a>
    </div>
  </div>
</div>

          {/* PROJECT CARD 4 */}
<div
  className="
    group relative rounded-2xl overflow-hidden
    border border-zinc-800
    bg-zinc-900/40 backdrop-blur-lg

    transition-all duration-500

    hover:-translate-y-3
    hover:scale-[1.02]
    hover:border-green-400

    hover:shadow-[0_25px_80px_rgba(34,197,94,0.25)]
  "
>
  {/* IMAGE */}
  <div className="h-60 overflow-hidden relative">
    
    <img
      src={card4}
      alt="Project"
      className="
        w-full h-full object-cover
        transition duration-700
        group-hover:scale-110
      "
    />

    {/* DARK OVERLAY ON HOVER */}
    <div
      className="
        absolute inset-0 bg-black/40
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
    />

    {/* BUTTON ON IMAGE HOVER */}
    <div
      className="
        absolute inset-0 flex items-center justify-center
        opacity-0 group-hover:opacity-100
        transition duration-500
      "
    >
    </div>
  </div>

  {/* CONTENT */}
  <div className="p-6">
    <h3 className="text-xl font-semibold mb-2">
      Shop.co - Full Stack E-Commerce
    </h3>

    <p className="text-gray-400 mb-4 text-sm">
      A comprehensive MERN-stack CRM with data-driven dashboards,
      Recharts visualizations, and full Lead/Deal management.
    </p>

    {/* TECH TAGS */}
    <div className="flex flex-wrap gap-2 mb-4">
      {["React", "Node.js", "Express", "MongoDB", "Tailwind"].map(
        (tech, i) => (
          <span
            key={i}
            className="
              px-3 py-1 text-xs
              bg-zinc-800 rounded-full text-gray-300
              group-hover:bg-green-500/20 group-hover:text-green-400
              transition
            "
          >
            {tech}
          </span>
        )
      )}
    </div>

    {/* LINKS */}
    <div className="flex gap-6 text-sm">
      <a href="https://ecommerce-frontend-21nm.vercel.app/" className="text-green-400 hover:underline">
        Live Demo →
      </a>

      <a
        href="https://github.com/dhanush8714/ecommerce-frontend"
        className="text-gray-400 hover:text-green-400 transition"
      >
        Frontend GitHub →
      </a>

      <a
        href="https://github.com/dhanush8714/ecommerce-backend"
        className="text-gray-400 hover:text-green-400 transition"
      >
        Backend GitHub →
      </a>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}

export default Projects;