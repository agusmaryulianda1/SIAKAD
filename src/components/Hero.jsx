import { useEffect, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-1.jpg",
    title: "Belajar dan Berkarya di Teknik Audio Video",
    description:
      "Kembangkan keterampilan teknologi elektronika, audio, video, dan bidang teknik lainnya bersama SMK Negeri 1 Lembah Melintang.",
  },
  {
    image: "/images/hero-2.jpg",
    title: "Wujudkan Generasi Terampil dan Kompeten",
    description:
      "Dukung proses pembelajaran melalui kegiatan praktik, pengembangan keterampilan, dan informasi akademik yang terintegrasi.",
  },
  {
    image: "/images/hero-3.jpg",
    title: "Akses Informasi Akademik Lebih Mudah",
    description:
      "Pantau jadwal pelajaran, kehadiran, dan informasi akademik jurusan Teknik Audio Video melalui satu platform.",
  },
];

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Mengganti gambar secara otomatis setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Pindah ke gambar berikutnya
  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  // Pindah ke gambar sebelumnya
  const prevSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    );
  };

  return (
    <section
      id="beranda"
      className="scroll-mt-24 relative flex min-h-[650px] items-center overflow-hidden bg-slate-900 md:min-h-[700px]"
    >
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className="absolute inset-0 transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(${(index - activeSlide) * 100}%)`,
          }}
        >
          <img
            src={slide.image}
            alt={`Background Hero ${index + 1}`}
            className="h-full w-full object-cover"
          />
        </div>
      ))}

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-blue-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-20 bg-gradient-to-b from-transparent via-blue-950/40 to-white" />

      {/* Konten Hero */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-3xl">

          <span className="inline-flex rounded-full border border-blue-400/40 bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
            Sistem Informasi Akademik TAV
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
            {slides[activeSlide].title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
            {slides[activeSlide].description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#login"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500 shadow-lg shadow-blue-600/30"
            >
              Masuk ke Sistem
              <ArrowRight size={19} />
            </a>

            <a
              href="#tentang"
              className="rounded-xl border border-white/40 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>

          <p className="mt-10 text-sm font-medium text-slate-300">
            Teknik Audio Video · SMK Negeri 1 Lembah Melintang
          </p>
         
        </div>
      </div>

      {/* Tombol Navigasi Slider */}
      <button
        onClick={prevSlide}
        aria-label="Gambar sebelumnya"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-blue-600 hover:text-white md:left-8"
      >
        <ChevronLeft size={25} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Gambar berikutnya"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-blue-600 hover:text-white md:right-8"
      >
        <ChevronRight size={25} />
      </button>

      {/* Indikator Slide */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            onClick={() => setActiveSlide(index)}
            aria-label={`Tampilkan gambar ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index
                ? "w-10 bg-blue-500"
                : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;