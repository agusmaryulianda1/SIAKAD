
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Identitas */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img
                src="/images/logo-sekolah.jpg"
                alt="Logo SMK Negeri 1 Lembah Melintang"
                className="h-14 w-14 rounded-full bg-white object-contain p-1"
              />

              <img
                src="/images/logo-tav.png"
                alt="Logo Teknik Audio Video"
                className="h-14 w-14 rounded-full bg-white object-contain p-1"
              />
            </div>

            <h2 className="mb-2 text-xl font-bold">
              SIAKAD TAV
            </h2>

            <p className="text-sm leading-relaxed text-blue-100">
              Sistem Informasi Akademik Jurusan Teknik Audio
              Video SMK Negeri 1 Lembah Melintang.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Navigasi
            </h3>

            <ul className="space-y-3 text-sm text-blue-100">
              <li>
                <a href="#beranda" className="transition hover:text-white">
                  Beranda
                </a>
              </li>

              <li>
                <a href="#tentang" className="transition hover:text-white">
                  Tentang
                </a>
              </li>

              <li>
                <a href="#informasi" className="transition hover:text-white">
                  Informasi
                </a>
              </li>
            </ul>
          </div>

          {/* Informasi Sistem */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Informasi Sistem
            </h3>

            <p className="text-sm leading-relaxed text-blue-100">
              SIAKAD TAV menyediakan informasi akademik,
              jadwal pelajaran, dan pengelolaan absensi
              siswa jurusan Teknik Audio Video.
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-blue-800 pt-6 text-center">
          <p className="text-sm text-blue-200">
            &copy; {currentYear} SIAKAD TAV - SMK Negeri 1
            Lembah Melintang. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
