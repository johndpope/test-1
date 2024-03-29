'use strict';
let query = `INSERT INTO \`task_templates\` (\`id\`, \`category\`, \`title\`, \`description\`, \`days_before\`, \`createdAt\`, \`updatedAt\`)
VALUES
	(1,'general','Rayakan pertunanganmu','',365,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(2,'chinese','Cek tanggal nikahanmu dengan kalender Cina','Pilih tanggal yang hoki ya!',358,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(3,'muslim','Pastikan tanggal nikahanmu tidak bentrok dengan bulan Muharram dan Ramadhan','',358,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(4,'general','Tentukan lokasi, musim, dan tanggal kalau belum','',358,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(5,'general','Ikuti @nikahku.id di Instagram untuk inspirasi nikahan','',358,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(6,'general','Join ke komunitas Nikahku di Facebook yuk!','',358,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(7,'general','Cari wedding organizer atau koordinator hari H seandainya kamu perlu','Wedding organizer bukan keharusan untuk acara nikahan yang sukses. Pertimbangkan apakah kamu hanya perlu koordinator pada  hari H saja atau untuk sebulan terakhir, yang akan bantu ngurusin semua acara dan keperluan. ',351,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(8,'general','Tip Pro: Buat alamat email khusus untuk nikahan','Satu inbox khusus untuk mengurus semuanya: menghubungi vendor, mengurus RSVP.',344,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(9,'general','Rencanakan pesta pertunanganmu','',337,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(10,'general','Mulai buat dokumen anggaran untuk dipakai selama kamu merencanakan kawinanmu','Pakai Excel pun jadi tapi kami akan sediakan fitur baru tersendiri sesegera mungkin.',337,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(11,'general','Buat papan inspirasi untuk membagi ide ke vendor','Berbagi hal yang kamu tidak sukai sama pentingnya dengan berbagi hal yang kamu sukai.',337,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(12,'general','Bikin jadwal pergi ke kota tempat kamu akan menikah','Kamu mungkin perlu datang ke sana 3-4 kali',337,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(13,'christian','Cek apakah di gerejamu ada kegiatan/acara di tanggal pernikahanmu','',331,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(14,'catholic','Cek apakah di gerejamu ada kegiatan/acara di tanggal pernikahanmu','',331,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(15,'general','Datangi calon gedung yang akan dipakai. Tip: datangin minimal 3','Makin banyak yang kamu lihat, kamu akan makin tau apa yang cocok dan tidak cocok',331,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(16,'general','Cari dan pilih fotografer pertunangan','Ini sih nggak wajib, tapi foto pre-wed akan menjadi sentuhan cantik di website nikahmu dan gedung pernikahan di hari H',324,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(17,'general','Mulai buat daftar tamu','Jangan takut kalau daftarmu panjang, kamu bisa kurangi sambil jalan',324,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(18,'muslim','Cari penghulu','',317,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(19,'catholic','Hubungi pastor untuk memberkati pernikahan gerejawimu','Tanyakan persyaratan pernikahan gerejawi. Sebagian mewajibkan akta baptis.',317,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(20,'christian','Hubungi pendeta untuk memberkati pernikahan gerejawimu','Tanyakan persyaratan pernikahan gerejawi. Sebagian mewajibkan akta baptis.',317,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(21,'general','Booking gedung untuk acara nikahan dan resepsi','Cepat-cepat amankan tanggal nikahanmu supaya kamu bisa dapat gedung di tanggal yang kamu mau',317,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(22,'general','Buat foto pre-wed','Formal atau kasual? Pilih gaya yang paling \\'kamu banget\\'',310,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(23,'general','Mulai cari hashtag yang pas untuk nikahanmu','Pakai hashtag ini untuk menandai semua foto yang berhubungan dengan nikahanmu.',303,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(24,'catholic','Mendaftar ke kursus pernikahan','',303,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(25,'chrstian','Mendaftar ke kursus pernikahan','',303,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(26,'general','Kumpulin daftar band kawinan dan pilih salah satunya','Live music atau DJ? Temui beberapa untuk tau apa saja pilihan yang ada',303,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(27,'general','Booking kamar hotel per blok untuk para undangan','Diskusikan dengan hotel untuk dapat diskon khusus',296,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(28,'general','Booking kamar hotel untuk malam pengantinmu','',296,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(29,'general','Pilih pendamping pengantin','',289,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(30,'general','Ketemu dengan fotografer nikahan','Lihat portofolio mereka, karena yang penting adalah menangkap momen-momen intim untuk kenangan seumur hidup. Kamu perlu ketemu dengan mereka untuk mastiin kecocokan gaya/sifat',282,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(31,'christian','Temui pendeta yang akan memberkati pernikahan gerejawi','',282,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(32,'catholic','Temui pastor yang akan memberkati pernikahan gerejawi','',282,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(33,'muslim','Kalau akad nikah diadakan di masjid, cari tau aturan berpakaian dengan jelas','Wajib diketahui oleh pengantin wanita dan juga tamu undangan.',273,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(34,'general','Buat janji untuk mencoba gaun pengantin dan jas','Bawa beberapa foto yang kamu suka untuk membantu stylist menemukan gaya yang cocok untukmu.',273,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(35,'general','Buat janji food tasting dengan katering','Datang dengan perut kosong dan ajak teman untuk kasih pendapat.',273,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(36,'catholic','Cek aturan berpakaian di gereja dengan jelas','Pastikan gaunmu memenuhi peraturan gereja',273,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(37,'general','Booking fotografer nikahan','Catat tanggal pembayaran DP dan apakah fotografer menerima tip.',266,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(38,'general','Mulai bikin website nikahmu','Jangan khawatir, kamu nggak harus langsung mem-publish-nya kok. Pelan-pelan aja sambil melengkapi detailnya.',266,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(39,'muslim','Rencanakan acara khatam quran','',266,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(40,'general','Pilih katering','Catat tanggal pembayaran DP, jangan sampai lupa membayar!',259,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(41,'general','Mencoba gaun pengantin dan jas','',259,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(42,'general','Cari bahan cetakan atau pilihan digital untuk undangan','Ingat-ingat kartu meja, menu, dan keperluan cetakan lain yang mungkin kamu perlukan. Tema sebaiknya sama.',252,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(43,'muslim','Pikirkan acara pasang henna pengantin','',252,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(44,'general','Finalisasi detail kontak para tamu untuk mengirim undangan formal','Fitur kami akan meluncur sesegera mungkin',252,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(45,'general','Lanjutin mengutak-atik website nikahanmu <Edit link website>','',245,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(46,'muslim','Trial henna pengantin','',245,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(47,'general','Ketemu floris','Jangan lupa bawa gambar rangkaian bunga yang kamu mau',245,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(48,'general','Beri tahu tanggal pernikahan ke para undangan','Pastiin mereka bisa datang ke acaramu',245,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(49,'general','Cari bakery atau toko kue dan buat janji food tasting','',238,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(50,'general','Finalisasi gaun dan jas pengantin','Cepat finalisasikan supaya kamu punya waktu untuk ngepasin dengan badan',231,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(51,'general','Pikirkan mulai menabung untuk dana bulan madu','',231,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(52,'general','Waktunya pengantin perempuan memilih kerudung','Karena gaunmu sudah final, kamu juga bisa finalisasi kerudung',231,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(53,'general','Beli setelan pria untuk pengantin laki-laki dan para pendampingnya','',224,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(54,'general','Desain lalu kirim pemberitahuan tanggal pernikahan. Cetak URL website nikahmu dengan jelas.','Dengan begini kamu bisa mengubah website dan para tamu tetap tau kabar terakhir',224,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(55,'general','Pilih gaun untuk pendamping pengantin perempuan dan setelan jas untuk pendamping pengantin laki-laki','',224,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(56,'general','Tip: Acaramu diadakah di luar ruangan? Buat Plan B seandainya cuaca tidak mendukung.','',217,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(57,'general','Cari tahu dekorasi untuk acara','',203,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(58,'muslim','Diskusikan jumlah maskawin atau mahar','',203,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(59,'general','Pesan Bunga','',203,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(60,'general','Mulai pikirkan tempat tujuan bulan madumu','Cari jauh-jauh hari supaya lebih murah',196,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(61,'general','Booking bakery','Catat tanggal pembayaran DP, jangan sampai lupa membayar!',189,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(62,'general','Cari tempat untuk makan malam bersama dengan panitia','',182,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(63,'general','Booking bulan madu','Satu hal yang layak ditunggu-tunggu',175,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(64,'christian','Cari tau apakah gereja menyediakan pemain musik dan instrumennya','',175,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(65,'catholic','Cari tau apakah gereja menyediakan pemain musik dan instrumennya','',175,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(66,'general','Kalau kamu mengirim kartu undangan tercetak, minta sampel untuk mengetes hasil cetakan, kertas, dan warna','',175,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(67,'general','Ajak ketemu musisi untuk acaramu dan booking','',175,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(68,'muslim','Booking pembuat henna pengantin dan rencanakan acara pasang henna pengantin','',168,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(69,'general','Booking tempat makan malam dengan panitia','',168,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(70,'general','Cari tahu tentang videografer dan booking','',168,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(71,'general','Pesan undangan pernikahan','',161,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(72,'general','Cari tau tentang penata rambut dan make up artis. Kamu perlu trial dulu.','',161,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(73,'general','Cari tau tempat untuk acara lain yang mungkin kamu adain selama minggu pernikahanmu','',161,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(74,'general','Buat jadwal untuk trial make up dan rambut','',161,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(75,'general','Buat janji untuk menata rambut, kuku, dan make up untuk pendamping pengantin perempuan dan mulai buat jadwal untuk mereka.','',154,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(76,'general','Ketemu dengan ahli pencahayaan/lighting','Ada tempat yang cahayanya sudah bagus, ada juga yang perlu pencahayaan tambahan.',147,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(77,'general','Atur rencana transportasi dari dan ke acara','Para tamu akan menghargai layanan penjemputan kalau hotel jauh dari gedung',147,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(78,'christian','Pikirkan doa atau pembacaan ayat Alkitab yang kamu mau pada pemberkatan pernikahan gerejawi','',140,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(79,'catholic','Pikirkan doa atau pembacaan ayat Alkitab yang kamu mau pada pemberkatan pernikahan gerejawi','',140,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(80,'muslim','Pilih siapa saja yang diundang ke acara akad nikah','',133,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(81,'catholic','Minta anggota keluarga membacakan ayat Alkitab pada pemberkatan nikah gerejawi','',133,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(82,'chinese','Rencanakan upacara minum teh','',133,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(83,'general','Booking semua transportasi','',126,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(84,'general','Pilih cincin kawin','',126,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(85,'general','Rencanakan suvenir untuk para tamu','',119,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(86,'general','Beli aksesori pengantin','Sepatu, perhiasan, mahkota, untuk melengkapi dandananmu.',112,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(87,'general','Pilih pakaian untuk semua acara pernikahan','',112,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(88,'general','Booking fotografer lokal untuk bulan madu','',105,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(89,'general','Datang ke mengepas gaun pertama kali','',105,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(90,'christian','Atur dekorasi untuk pemberkatan','Lilin? Bunga? Alas jalan menuju altar?',105,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(91,'catholic','Atur dekorasi untuk pemberkatan','Lilin? Bunga? Alas jalan menuju altar?',105,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(92,'general','Mulai mendata RSVP','',105,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(93,'chinese','Rencanakan untuk acara sangjit','',98,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(94,'general','Konfirmasikan tanggal, waktu, dan lokasi dengan semua vendor','Pastikan mereka benar-benar paham kapan dan di mana mereka harus datang.',98,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(95,'general','Buat playlist untuk semua acara','',98,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(96,'general','Desain, tempel alamat, dan kirim undangan','',91,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(97,'general','Mulai pikirkan isi janji pernikahan','',84,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(98,'general','Mulai kumpulkan RSVP','Kirim pengingat ke para tamu yang belum memberi tahu kehadiran mereka.',77,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(99,'general','Booking mobil pengantin','Datang ke gedung dengan gaya maksimal',77,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(100,'general','Ikut kursus nari','',77,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(151,'general','Konfirmasikan menu untuk semua acara','',70,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(152,'general','Konfirmasikan desain dan pilihan rasa kue ','',70,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(153,'general','Buat pengaturan kursi dan mulai rapikan','',70,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(154,'general','Datang ke mengepas gaun kedua kali','',63,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(155,'general','Pesan kartu ucapan terima kasih','Tak ada yang bisa mengalahkan ketulusan kartu ucapan tulisan tangan',63,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(156,'general','Kirim undangan untuk acara sebelum pernikahan','',63,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(157,'general','Buat daftar barang yang dibawa untuk bulan madu','',63,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(158,'general','Ajukan dokumen untuk akta nikah','',56,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(159,'muslim','Ajukan dokumen untuk buku nikah','',49,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(160,'general','Ketemu dengan pengisi hiburan di nikahan','Bahas rundown acara dan kasih tau mereka lagu-lagu spesial kalian berdua',56,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(161,'general','Pesan kebutuhan cetakan untuk hari H','Daftar acara, kartu menu, kartu nomor meja, kartu pengaturan kursi',56,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(162,'general','Beri tahu pendamping pengantin pria dan wanita apa yang mereka kenakan waktu siap-siap di pagi hari H','',56,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(163,'general','Buat timeline hari pernikahan','Tidak ada yang namanya kelebihan informasi di daftar ini. Masukkan jam berapa seharusnya vendor datang, informasi kontak, dll.',56,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(164,'general','Mulai tulis kalimat sambutan saat \\'toast\\' dan isi janji nikah','',49,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(165,'general','Konfirmasi short list dengan fotografer','Pikirkan semua variasi yang kamu mau supaya waktunya cukup di hari H',49,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(166,'christian','Finalisasi janji nikah dan ayat Alkitab untuk pemberkatan','',49,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(167,'catholic','Finalisasi janji nikah dan ayat Alkitab untuk pemberkatan','',49,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(168,'chinese','Atur dekorasi tradisional untuk kawinan','',49,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(169,'general','Minta anggota keluarga memberi kalimat sambutan saat \\'toast\\' atau ucapan selamat datang','',49,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(170,'chinese','Siapkan games untuk pengantin pria','',49,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(171,'general','Finalisasi pakaian untuk semua acara','',42,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(172,'christian','Finalisasi pemberkatan nikah gerejawi dengan pendeta','',42,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(173,'catholic','Finalisasi pemberkatan nikah gerejawi dengan pastor','',42,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(174,'general','Finalisasi pembayaran ke semua vendor nikahan','',42,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(175,'christian','Pesan kartu untuk kursi jemaat','Tandai baris pertama dan kedua untuk keluarga dan teman',42,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(176,'catholic','Pesan kartu untuk kursi jemaat','Tandai baris pertama dan kedua untuk keluarga dan teman',42,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(177,'chinese','Buat rencana ganti pakaian untuk semua acara','',42,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(178,'muslim','Rencanakan pakaian dan aksesori tradisional untuk semua acara','',42,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(179,'general','Datang ke pengepasan baju terakhir dan buat jadwal pengambilan baju','',35,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(180,'general','Konfirmasikan jadwal acara hari pernikahan','Cetak timeline dan bagikan ke pendamping pengantin perempuan dan laki-laki',35,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(181,'general','Finalisasi pengaturan kursi','',35,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(182,'muslim','Kumpulin semua barang yang diperlukan untuk acara pasang henna','',35,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(183,'general','Packing untuk berangkat bulan madu','',35,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(184,'muslim','Konfirmasi detail acara iringan pengantin','',21,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(185,'general','Ambil suvenir ucapan terima kasih','',21,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(186,'muslim','Tugaskan seseorang untuk mengurus semua keperluan akad nikah','Pena untuk tanda tangan, cincin, rangkaian bunga',21,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(187,'chinese','Nikmati upacara minum teh','',1,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(188,'general','Manikur dan pedikur','',1,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(189,'general','Traktir dirimu sendiri untuk pijat','',1,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(190,'general','Menikah!','',0,'2018-10-29 18:30:05','2018-10-29 18:30:05'),
	(191,'general','Rayakan!','',0,'2018-10-29 18:30:05','2018-10-29 18:30:05')`
module.exports = {
    up: (queryInterface, DataTypes) => {
        return queryInterface.sequelize.query(query)
    },
    down: (queryInterface, Sequelize) => {

    }
};