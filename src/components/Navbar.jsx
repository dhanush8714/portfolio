import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 overflow-x-hidden">
      
      {/* 🔥 TOP GLOW */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60" />

      <div className="bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="text-lg sm:text-xl font-bold text-green-500"
          >
            Dhanush Mp
          </a>

          {/* 💻 DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                className="hover:text-green-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* 📱 MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
          >
            {/* LINE 1 */}
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            {/* LINE 2 */}
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            {/* LINE 3 */}
            <span
              className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* 📱 MOBILE MENU (ANIMATED) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6 flex flex-col gap-5 text-gray-300 bg-black/80 backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-green-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;