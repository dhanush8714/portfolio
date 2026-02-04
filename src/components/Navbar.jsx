import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link
          to="/"
          className="font-semibold text-lg text-green-500"
          onClick={() => setOpen(false)}
        >
          My_Portfolio
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm text-gray-400">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? "text-white" : "hover:text-green-500"
          }>
            Home
          </NavLink>

          <NavLink to="/skills" className="hover:text-green-500">
            Skills
          </NavLink>

          <NavLink to="/projects" className="hover:text-green-500">
            Projects
          </NavLink>

          <NavLink to="/about" className="hover:text-green-500">
            About
          </NavLink>

          <NavLink to="/contact" className="hover:text-green-500">
            Contact
          </NavLink>
        </div>

        {/* TOGGLE BUTTON (MOBILE) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1">
            <span className={`block h-0.5 w-6 bg-white transition 
              ${open ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition 
              ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-white transition 
              ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800">
          <div className="flex flex-col px-6 py-4 space-y-4 text-gray-400">
            <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-green-500">
              Home
            </NavLink>
            <NavLink to="/skills" onClick={() => setOpen(false)} className="hover:text-green-500">
              Skills
            </NavLink>
            <NavLink to="/projects" onClick={() => setOpen(false)} className="hover:text-green-500">
              Projects
            </NavLink>
            <NavLink to="/about" onClick={() => setOpen(false)} className="hover:text-green-500">
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="hover:text-green-500">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
