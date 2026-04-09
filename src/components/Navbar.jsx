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
    <nav className="fixed top-0 w-full bg-black/50 backdrop-blur border-b border-zinc-800 z-50">
      
       {/* 🔥 TOP GLOW LINE */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a
          href="#home"
          className="font-semibold text-lg text-green-500"
          onClick={() => setOpen(false)}
        >
          Dhanush Mp
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="hover:text-green-500 transition"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* TOGGLE BUTTON (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-400">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setOpen(false)}
                className="hover:text-green-500 transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;