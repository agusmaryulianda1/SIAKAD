import { useState } from "react";
import { Bell, CalendarDays, BookOpen, ArrowRight, Megaphone, Search, X, Users, CheckCircle2, Clock, XCircle } from "lucide-react";

// Mengambil tanggal lokal perangkat
const getDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const todayKey = getDateKey(new Date());

const today = new Date();

const getDateOffset = (offset) => {
  const date = new Date(today);
  date.setDate(date.getDate() - offset);
  return getDateKey(date);
};

const attendanceData = [
  { id: 1, name: "Ahmad Fauzi", className: "X TAV 1", status: "Hadir", date: getDateOffset(0) },
  { id: 2, name: "Budi Saputra", className: "X TAV 1", status: "Tidak Hadir", date: getDateOffset(0) },
  { id: 3, name: "Citra Amelia", className: "X TAV 2", status: "Hadir", date: getDateOffset(0) },
  { id: 4, name: "Deni Kurniawan", className: "XI TAV 1", status: "Terlambat", date: getDateOffset(0) },
  { id: 5, name: "Eka Putri", className: "XI TAV 1", status: "Hadir", date: getDateOffset(1) },
  { id: 6, name: "Fajar Ramadhan", className: "XI TAV 2", status: "Tidak Hadir", date: getDateOffset(1) },
  { id: 7, name: "Gita Permata", className: "XII TAV 1", status: "Hadir", date: getDateOffset(2) },
  { id: 8, name: "Hendra Wijaya", className: "XII TAV 2", status: "Hadir", date: getDateOffset(2) },
];

function Information() {
  const [isAttendanceOpen, setIsAttendanceOpen] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [selectedClass, setSelectedClass] = useState("Semua Kelas");
  const [selectedStatus, setSelectedStatus] = useState("Semua Status");
  const [selectedDate, setSelectedDate] = useState(todayKey);

  const informationCards = [
    {
      icon: Bell,
      category: "Pengumuman",
      title: "Informasi dan Pengumuman Jurusan",
      description:
        "Temukan informasi penting dan pengumuman terbaru yang berkaitan dengan kegiatan akademik jurusan Teknik Audio Video.",
      action: () => {},
    },
    {
      icon: CalendarDays,
      category: "Akademik",
      title: "Jadwal dan Absensi Publik",
      description:
        "Dapatkan informasi jadwal pelajaran serta pantau rekaman kehadiran siswa jurusan Teknik Audio Video secara transparan.",
      action: () => setIsAttendanceOpen(true),
    },
    {
      icon: BookOpen,
      category: "Pembelajaran",
      title: "Informasi Mata Pelajaran",
      description:
        "Kenali informasi mata pelajaran produktif dan umum yang dipelajari oleh siswa jurusan Teknik Audio Video.",
      action: () => {},
    },
  ];

  const filteredAttendance = attendanceData.filter((student) => {
    const matchesName = student.name
      .toLowerCase()
      .includes(searchName.toLowerCase());

    const matchesClass =
      selectedClass === "Semua Kelas" ||
      student.className === selectedClass;

    const matchesStatus =
      selectedStatus === "Semua Status" ||
      student.status === selectedStatus;

    const matchesDate = student.date === selectedDate;

    return (
      matchesName &&
      matchesClass &&
      matchesStatus &&
      matchesDate
    );
  });

  return (
    <section
      id="informasi"
      className="scroll-mt-24 bg-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
            <Megaphone size={16} />
            Pusat Informasi
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-blue-950 md:text-4xl">
            Informasi Akademik dan Jurusan
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Akses berbagai informasi seputar kegiatan akademik,
            pengumuman, dan pembelajaran di jurusan Teknik Audio
            Video SMK Negeri 1 Lembah Melintang.
          </p>
        </div>

        {/* Kartu Informasi */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {informationCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                onClick={item.action}
                className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-800 transition group-hover:bg-blue-800 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <p className="mt-6 text-sm font-semibold text-blue-700">
                  {item.category}
                </p>

                <h3 className="mt-2 text-xl font-bold leading-snug text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-800">
                  {item.category === "Akademik" ? "Buka Absensi Publik" : "Informasi lebih lanjut"}
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-1"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Absensi Publik */}
      {isAttendanceOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/60 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-800">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-950">
                    Absensi Publik Jurusan Teknik Audio Video
                  </h3>
                  <p className="text-sm text-slate-500">
                    Pantau kehadiran siswa secara real-time
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAttendanceOpen(false)}
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Bagian Tanggal & Filter */}
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm text-slate-500">
                  Tanggal absensi
                </p>

                <p className="font-semibold text-blue-950">
                  {new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
                    "id-ID",
                    {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )}
                </p>
              </div>

              {/* Filter Data Absensi */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    Pilih Tanggal
                  </label>

                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(event) => setSelectedDate(event.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    Cari Nama Siswa
                  </label>
                  <div className="relative">
                    <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Ketik nama..."
                      value={searchName}
                      onChange={(e) => setSearchName(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    Filter Kelas
                  </label>
                  <select
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option>Semua Kelas</option>
                    <option>X TAV 1</option>
                    <option>X TAV 2</option>
                    <option>XI TAV 1</option>
                    <option>XI TAV 2</option>
                    <option>XII TAV 1</option>
                    <option>XII TAV 2</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">
                    Filter Status
                  </label>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option>Semua Status</option>
                    <option>Hadir</option>
                    <option>Tidak Hadir</option>
                    <option>Terlambat</option>
                  </select>
                </div>
              </div>

              {/* Tombol Reset Filter */}
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedDate(todayKey);
                    setSearchName("");
                    setSelectedClass("Semua Kelas");
                    setSelectedStatus("Semua Status");
                  }}
                  className="rounded-lg border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-100"
                >
                  Reset Filter
                </button>
              </div>
            </div>

            {/* Tabel Data Absensi */}
            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-semibold">
                    <th className="p-3.5">No</th>
                    <th className="p-3.5">Nama Siswa</th>
                    <th className="p-3.5">Kelas</th>
                    <th className="p-3.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {filteredAttendance.length > 0 ? (
                    filteredAttendance.map((student, idx) => (
                      <tr key={student.id} className="hover:bg-slate-50 transition">
                        <td className="p-3.5 text-slate-500">{idx + 1}</td>
                        <td className="p-3.5 font-medium text-blue-950">{student.name}</td>
                        <td className="p-3.5 text-slate-600">{student.className}</td>
                        <td className="p-3.5">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                              student.status === "Hadir"
                                ? "bg-emerald-100 text-emerald-800"
                                : student.status === "Terlambat"
                                ? "bg-amber-100 text-amber-800"
                                : "bg-rose-100 text-rose-800"
                            }`}
                          >
                            {student.status === "Hadir" && <CheckCircle2 size={13} />}
                            {student.status === "Terlambat" && <Clock size={13} />}
                            {student.status === "Tidak Hadir" && <XCircle size={13} />}
                            {student.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-slate-500">
                        Tidak ada data absensi untuk tanggal dan filter yang dipilih.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Information;