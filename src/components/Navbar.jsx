
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Tentang", href: "#tentang" },
    { name: "Informasi", href: "#informasi" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-6">

        {/* Logo dan Identitas */}
        <a href="#beranda" className="flex items-center gap-3">

          {/* Logo Sekolah */}
          <img
            src="/images/logo-sekolah.jpg"
            alt="Logo SMK Negeri 1 Lembah Melintang"
            className="h-12 w-12 object-contain"
          />

          {/* Logo Jurusan TAV */}
          <img
            src="/images/logo-tav.png"
            alt="Logo Teknik Audio Video"
            className="h-14 w-11 object-contain"
          />

          {/* Nama Sistem */}
          <div className="border-l border-slate-200 pl-3">
            <h1 className="text-base font-bold text-blue-900 md:text-lg">
              SIAKAD TAV
            </h1>
            <p className="text-[10px] text-slate-500 md:text-xs">
              SMK Negeri 1 Lembah Melintang
            </p>
            <p className="text-[10px] font-medium text-blue-700 md:text-xs">
              Teknik Audio Video
            </p>
          </div>
        </a>

        {/* Navigasi Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-700"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Tombol Login */}
        <a
          href="#login"
          className="hidden rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 md:inline-flex"
        >
          Login
        </a>

        {/* Tombol Menu Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-blue-900 hover:bg-slate-100 md:hidden"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {/* Navigasi Mobile */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#login"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg bg-blue-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-600"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
