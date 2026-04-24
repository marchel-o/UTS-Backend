module.exports = {
  users: [
    {
      _id: '9999',
      email: 'admin@gmail.com',
      password: '12345678',
      fullName: 'Admin Utama',
      role: 'admin',
    },
    {
      _id: '66661',
      email: 'staff@gmail.com',
      password: '12345678',
      fullName: 'Staff IT',
      role: 'staff',
    },
    {
      _id: '33331',
      email: 'user1@gmail.com',
      password: '12345678',
      fullName: 'User Satu',
      role: 'user',
    },
    {
      _id: '33332',
      email: 'user2@gmail.com',
      password: '12345678',
      fullName: 'User Dua',
      role: 'user',
    },
  ],
  tickets: [
    {
      title: 'Wi-Fi Lemah R701',
      description:
        'Koneksi internet di Gedung R Lt 7 Ruang 701 sering terputus saat dipakai kuliah.',
      status: 'open',
      priority: 'high',
      location: 'Gedung R, Lt 7, Ruang 701',
    },
    {
      title: 'Proyektor Bermasalah R702',
      description:
        'Proyektor di Gedung R Lt 7 Ruang 702 tidak menampilkan input dari laptop dosen.',
      status: 'in_progress',
      priority: 'medium',
      location: 'Gedung R, Lt 7, Ruang 702',
    },
    {
      title: 'AC Kurang Dingin P903',
      description:
        'AC di Gedung P Lt 9 Ruang 903 terasa kurang dingin ketika kelas penuh.',
      status: 'open',
      priority: 'medium',
      location: 'Gedung P, Lt 9, Ruang 903',
    },
    {
      title: 'Akses Pintu Lambat P906',
      description:
        'Card reader di pintu masuk parkir Gedung P lambat membaca ktm.',
      status: 'open',
      priority: 'high',
      location: 'Gedung P, Lt 9, Ruang 906',
    },
  ],
  comments: [
    {
      ticketIndex: 0,
      userId: '33331',
      content:
        'Wi-Fi sering putus sejak awal kelas, paling terasa saat banyak perangkat tersambung.',
    },
    {
      ticketIndex: 0,
      userId: '66661',
      content:
        'Sudah dicek sementara, indikasi awal ada gangguan pada access point lantai 7.',
    },
    {
      ticketIndex: 1,
      userId: '66661',
      content:
        'Proyektor di Ruang 702 akan dicek kabel HDMI dan input source-nya terlebih dahulu.',
    },
    {
      ticketIndex: 1,
      userId: '9999',
      content:
        'Mohon prioritaskan karena ruang ini dipakai untuk presentasi siang ini.',
    },
    {
      ticketIndex: 2,
      userId: '33332',
      content:
        'Suhu ruangan terasa naik cepat saat kelas penuh, mohon dicek unit AC-nya.',
    },
    {
      ticketIndex: 2,
      userId: '66661',
      content:
        'Filter dan refrigerant akan diperiksa karena gejala mengarah ke pendinginan yang tidak optimal.',
    },
    {
      ticketIndex: 3,
      userId: '9999',
      content:
        'Pintu akses di pintu masuk parkir kadang baru terbaca setelah dicoba 2 sampai 3 kali.',
    },
    {
      ticketIndex: 3,
      userId: '33331',
      content:
        'Card reader akan diperiksa karena kemungkinan ada masalah pada sensor atau koneksi ke sistem kontrol akses.',
    },
  ],
  history: [
    {
      ticketIndex: 0,
      userId: '9999',
      action: 'created',
      details: 'Tiket dibuat untuk gangguan Wi-Fi di Gedung R Lt 7 Ruang 701.',
    },
    {
      ticketIndex: 0,
      userId: '66661',
      action: 'status_changed',
      details:
        'Status diubah menjadi in_progress setelah pengecekan awal dilakukan.',
    },
    {
      ticketIndex: 1,
      userId: '66661',
      action: 'created',
      details:
        'Tiket dibuat untuk proyektor bermasalah di Gedung R Lt 7 Ruang 702.',
    },
    {
      ticketIndex: 1,
      userId: '9999',
      action: 'updated',
      details: 'Catatan perbaikan ditambahkan setelah validasi input source.',
    },
    {
      ticketIndex: 2,
      userId: '33331',
      action: 'created',
      details:
        'Tiket dibuat untuk AC kurang dingin di Gedung P Lt 9 Ruang 903.',
    },
    {
      ticketIndex: 2,
      userId: '66661',
      action: 'assigned',
      details: 'Tiket diteruskan ke staff teknis untuk pengecekan pendinginan.',
    },
    {
      ticketIndex: 3,

      userId: '33332',
      action: 'created',
      details: 'Tiket dibuat untuk kendala akses parkir.',
    },
    {
      ticketIndex: 3,
      userId: '9999',
      action: 'resolved',
      details: 'Masalah akses dinyatakan selesai setelah kartu diuji ulang.',
    },
  ],
};
