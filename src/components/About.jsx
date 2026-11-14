
import { BookOpen,CalendarDays,ClipboardCheck,GraduationCap,Users,Monitor} from "lucide-react";

function About() {
  const features = [
    {
      icon: CalendarDays,
      title: "Jadwal Pelajaran",
      description:
        "Memudahkan siswa dan guru melihat informasi jadwal pelajaran sesuai kelas dan mata pelajaran.",
    },
    {
      icon: ClipboardCheck,
      title: "Presensi QR Code",
      description:
        "Mendukung proses pencatatan kehadiran siswa melalui pemindaian QR Code pada setiap sesi pembelajaran.",
    },
    {
      icon: BookOpen,
      title: "Informasi Akademik",
      description:
        "Menyediakan informasi akademik jurusan Teknik Audio Video dalam satu platform.",
    },
  ];

  const users = [
    {
      icon: Users,
      title: "Admin",
      description:
        "Mengelola data siswa, guru, kelas, mata pelajaran, jadwal, dan presensi.",
    },
    {
      icon: GraduationCap,
      title: "Guru",
      description:
        "Mengakses jadwal mengajar, membuat sesi presensi, dan memantau kehadiran siswa.",
    },
    {
      icon: Monitor,
      title: "Siswa",
      description:
        "Melihat jadwal pelajaran, melakukan presensi QR Code, dan memeriksa riwayat kehadiran.",
    },
  ];

  return (
    <section id="tentang" className="scroll-mt-24 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Judul Section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
            Tentang Sistem
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-blue-950 md:text-4xl">
            Mengenal SIAKAD Teknik Audio Video
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Sistem Informasi Akademik (SIAKAD) TAV merupakan
            platform berbasis website yang dirancang untuk
            mendukung pengelolaan informasi dan aktivitas
            akademik pada jurusan Teknik Audio Video SMK Negeri
            1 Lembah Melintang.
          </p>
        </div>

        {/* Deskripsi Sistem */}
        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">

          <div className="rounded-3xl bg-blue-950 p-8 text-white md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <GraduationCap size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-bold">
              Satu Sistem untuk Kebutuhan Akademik
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              SIAKAD TAV dirancang untuk menghubungkan kebutuhan
              administrasi akademik, kegiatan guru, dan aktivitas
              siswa melalui satu sistem yang terintegrasi.
              Dengan demikian, informasi akademik dapat dikelola
              dan diakses secara lebih terstruktur.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-950">
              Apa yang tersedia di SIAKAD?
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Sistem ini dirancang untuk menyediakan beberapa
              fitur utama yang mendukung kegiatan akademik
              jurusan Teknik Audio Video.
            </p>

            <div className="mt-7 space-y-5">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                      <Icon size={23} />
                    </div>

                    <div>
                      <h4 className="font-bold text-blue-950">
                        {feature.title}
                      </h4>

                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pengguna Sistem */}
        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold text-blue-950 md:text-3xl">
              Dirancang untuk Tiga Pengguna
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              Setiap pengguna memiliki akses dan fungsi yang
              disesuaikan dengan kebutuhan masing-masing.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {users.map((user) => {
              const Icon = user.icon;

              return (
                <div
                  key={user.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                    <Icon size={27} />
                  </div>

                  <h4 className="mt-6 text-xl font-bold text-blue-950">
                    {user.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {user.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
