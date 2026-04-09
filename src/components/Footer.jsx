function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/60 backdrop-blur-xl">

      {/* Glow line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-6 py-10 text-center text-gray-400">

        {/* Name */}
        <h2 className="text-lg font-semibold text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
          Dhanush Mp
        </h2>

        {/* Short line */}
        <p className="mt-2 text-sm">
         Building scalable full stack applications that solve real-world problems.
        </p>
        {/* Bottom */}
        <div className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;