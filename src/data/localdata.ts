export interface Materi {
  id: number,
  title: string,
  content: Array<String>
}

export interface Soal {
  id: number,
  question: string,
  answer: Answer[]
}

export interface Answer {
  content: string,
  answer: Boolean
}

export function getMateriData(): Array<Materi> {
  return [
    {
      "id": 0,
      "title": "Definisi Demam Berdarah Dengue",
      "content": [
        "Demam berdarah dengue merupakan suatu infeksi oleh virus yang kemudian disebarkan oleh nyamuk kepada manusia, demam dengue ini banyak memakan korban pada wilayah yang beriklim tropis. Pada kebanyakan orang demam dengue ini tidak menunjukkan adanya gejala, seringkali gejala yang dirasakan berupa nyeri badan, demam mual, dan adanya ruam kemerahan (WHO, 2023).",
        "Demam berdarah dengue merupakan penyakit menular infeksi yang disebabkan oleh salah satu dari empat serotipe virus DENV, berbagai tingkat kondisi patologis disebabkan oleh infeki virus ini mulai dari demam berdarah tanpa gejala, demam berdarah dengue berat, dan sindrom syok yang dapat berakibat fatal (Khetarpal & Khanna, 2016)."
      ]
    },
    {
      "id": 1,
      "title": "Penularan Demem Berdarah Dengue",
      "content": [
        "Menurut John Gordon terdapat 3 faktor utama  yang menyebabkan prnularan demam berdarah dengue ini, yang pertama ialah penjamu atau manusia itu sendiri yang rentan terkena demam berdarah dengue, kemudia yang kedua adalah penyebar atau vector yang murupakan penyebab dari demam dengue ini yaitu virus DENV, sedangkan nyamuk aedes berperan sebagai penyebar virus atau menyebarkan vector yang mengakibatkan demam dengue, dan yang terkarhir ialah lingkungan yang memudahkan terjadinya penyebaran demam dengue ini  (Ginanjar & Faridi, 2008)<br/>Ada empat tipe virus dengue, yang terdiri dari DENV- 1, DENV- 2, DENV- 3 dan DENV- 4 di Indonesia sendiri tipe 2 dan 3 lebih dominan, penelitian menunjukkan bahwa dengue tipe 3 lebih dominan menyebab kasus yang serius di Indonesia. Nyamuk Aedes Aegypti. Aedes albopictus, Aedes polynesiensis dan beberapa spesies yang lain menularkan virus dengue kepada manusia, manusia, virus dan vektor perantara menjadi 3 faktor yang memegang peranan pada penularan virus dengue, nyamuk aedes yang mengandung virus dengue dan menggigit manusia akan menularkan virus dengue tersebut, kemudia virus yang terdapat pada kelenjar air liur akan berkembang biar selama 8- 10 hari (extrinsic incubation period) (Sukohar, 2014)"
      ]
    },
    {
      "id": 2,
      "title": "Manifestasi Klinis Demam Berdarah Dengue",
      "content": [
        "Secara klinis setiap serotipe memiliki manifestasi yang berbeda, DENV- 2 memiliki gejala klini yang ringan maupun akut, sedangkan DENV- 1 dan DENV- 3  sering ditemukan pada pasien dengan gejala akut. Pada hari pertama terinfeksi virus dengue pasien akan mengalami mnunkukkan fase akut, dimana pasien akan mengalami nyeri pada bagian abdomen, sakit kepala, mual, muntah bahkan hingga muncul ruam kemerahan. Pada Sebagian besar kasus juga ditemukan nyeri retroorbital, myalgia dan atralgia, selain itu pendarahan juga biasa terjadi pada infeksi dengue adalah petekei yang kemudian akan muncul manifestasi klinis lainnya, seperti epistaksis, pendarahan gusi, hematemesis, melena, hypermenorhea dan hemoglobinuria, DENV juga dapat dideteksi dengan cepat melalui tourniqurt test (Nugraheni et al., 2023)<br/>Gambaran klinis yang biasa dirasakan oleh pasien demam dengue adalah nyeri kepala, nyeri kepala ini umum dirasakan oleh setiap pasien demam dengue baik ringan. Nyeri kepala yang dirasakan terjadi karena virus dengue akan bereplikasi dalam sel fagosit mononuklear (monosit, makrofag, histiosit, dan sel kuffer) yang telah terinfeksi, kemudian sel tersebut akan menyebar ke usus, hati, limfa, dan sumsum tulang dan akan menimbulkan berbagai gejala klinis (Ahmad et al., 2023)."
      ]
    },
    {
      "id": 3,
      "title": "Keparahan Demem Berdarah Dengue Pada Anak",
      "content": [
        "Tingkat keparahan demam berdarah pada setiap anak pasti berbeda, misalnya pada pasien anak demam berdarah dengan kondisi awal masuk rumah sakit sudah berat  maka akan semakin tinggi pula tingkat keparahannya dan akan semakin tinggi pula resikonya. Maka dari itu setiap orang tua dan perawat diperlukan kecermatan dalam mengenali demam berdarah untuk menghindari terjadinya syok dan kematian (Husnaini et al., 2023)<br/>Sebanyak 51,6% anak laki- laki menderita demam berdarah pada tahun 2014, sedangkan pada tahun yang sama anak peruan yang menderita demam berdarah sebanyak 48,4 %. Sedangkan pada tahun berikutnya (2015) anak Perempuan lebih banyak yang menderita demam berdarah dengan angka 56,3%, sedangkan anak laki- laki 43,7 %. Hal ini dapat terjadi karena anak Perempuan lebih dominan berada didalam rumah, yang artinya rumah bisa menjadi tempat yang potensial untuk nyamuk berkebangniak, seperti pada pakaian yang menggantung (Andriawan et al., n.d.)<br/>Pada penelitian sebelumnya menunjukkan bahwa terdapat hubungan yang signifikan antara status gizi dan juga derajat keperahan infeksi demam dengue, status gini yang menurun akan menurunkan imunitas yang ditandai dengan sel T helper CD4 dan rasio CD4/ CD8 menjadi lebih rendah. Selain itu produksi IgA sekretorik, komponen komplemen (C3, C4 dan faktor B) dan produksi sitokin tertentu seperti IL-2 dan TNF mengalami penurunan dan juga terganggunya fagositosis. Adanya sel memori dari antigen yang tersimpan dalam sel dendrit dan kelenjar limfe berfungsi bila terjadi infeksi virus. Sehingga bila memori imunologik belum sempurna maka pusat respon imun tubuh yaitu limfosit T tidak dapat memproduksi sitokin dan mediator sebagai pertahanan tubuh (Permatasari,D, et al., 2015)"
      ]
    },
    {
      "id": 4,
      "title": "Penatalaksanaan Demam Berdarah Dengue",
      "content": [
        "Pada fase awal pasien dengan demam berdarah akan mengalami peningkatan suhu tubuh, pada fase ini pasien diharuskan memperhatikan cairan oralnya dan dapat mengkonsumsi paracetamol sebagai antipiretik. Selain manajemen cairan, pasien yang mengalami pendarah berat atau pada pasien syok yang mengalami trombositopenia diberikan tranfusi darah.<br/>Pada pasien demam dengue yang mengalami fase kritis akan ada penurunan trombosit dan hematokrit meningkat tajam yang menandakan adanya kehilangan cairan. Pada penatalaksanaan demam dengue ini terapi cairan diperlukan sebagai kunci dari keberhasilan pengobatan demam dengue, selain itu pasien yang mengalami masa kritis akan diobservasi tanda vitalnya, kadar hematokrit, trombosit dan jumlah urin yang diobservasi setiap 6 jam sekali. Sedangkan pada pasien setadiun IV ada perlu diberikan basecorrector yang berdampingan denganpemberian cairan Ringer, dan pasien dengan fase demam akan diberikan cairan dengan tujuan rumatan bukan sebagai pengganti kebocoran plasma (Nurawaliah & Musdalifah, 2023)<br/>Pada pasien yang mengalami dengue syok syndrome dapat diberikan larutan kristaloid isotonic sebagai pengganti plasma yang hilang, tetapi jumlah cairan yang dibrikan harus dikurangi secara bertahap untuk mencegah terjainya hipervelemia. Cairan intravena juga dapat digunakan untuk mengganti plasma yang hilang, seperti kristaloid dan koloid (Hung, 2012)"
      ]
    },
    {
      "id": 5,
      "title": "Upaya Mencegah Demam Berdarah Dengue",
      "content": [
        "Wolbachia merupakan bakteri gram negative yang tumbuh dalam nyamuk, bakteri ini dapat mengendalikan vector  demam berdarah dengue denga cara menghentikan replikasi virus dengue, bakteri Wolbachia ini dapat menginfeksi nyamuk Jantan sehingga tidak dapat menghasilkan keturunan jika kawin dengan nyamuk betina yang tidak terinfeksi (Firdausi et al., 2021) Hal ini didukung dengan hasil penelitian sebelumya yang menyebutkan bahwa Wolbachia ini mampu untuk menekan replikasi  virus dengue pada nyamuk aedes aegypti yang terkena wolbachiasebagai agent penyebar demam berdarah dengue (Fakultas & Kesehatan, n.d.)<br/>Pemerintah telah menerapkan teknologi Wolbachia pada tahun 2022 yang saat itu bekerja sama dengan World Mosquito Program, kegiatan yang dilakukan saat itu berupa penyuluhan, workshop, penyusunan teknis dan penandatanganan nota kesepakatan. Selain itu pemerintah juga melakukan webinar ditahun yang sama dengan topik tatalaksana infeksi dengue tantangan saat melakukan strategi tersebut adalah kurangnya ketersediaan fasilitas tes dengue baik itu oleh layanan primer atau swasta (Samad Iriani et al., 2022)<br/>Selain Wolbachia 3 M plus juga turus serta dilakukan untuk pemberantasan sarang nyamuk. 3 M plus merupakan perilaku hidup sehat yang dilakukan untuk menghindari kontak dengan iaedes aegypti sehingga dapat memutus rantai penularan. 3 Mplus dilakukan dengan menguras container air yang dilakukan seminggu sekali, menutup rapat tempat penampungan air yang bertujuan agar nyamuk tidak bertelur pada tempat air tersebut, mengubur barang bekas seperti kaleng yang sekitanya dapat menjadi tempat menggenangnya air (Windaningsih et al., 2019)<br/>Perilaku mayarakat turut penjadi perhatian dalam pencegahan demam berdarah ini, hal ini sejalan dengan penelitian yang telah dilakukan sebelumnya dengan hasil, lebih dari 50% responden memiliki Upaya yang baik terhadap pencegahan demam berdarah, sedangkan responden yang memiliki sikap yang baik sebesar 83, 4%, dan responden yang memiliki Tindakan kurang baik sebesar 56,4%. Ini murapak hal yang memang seharusnya terjadi karena saat ini responden dapat dengan mudah mendapatkan informasi mengenai demam berdarah dimanapun (Kolondam et al., 2020)"
      ]
    }
  ]
}


export function getSoalData(): Array<Soal> {
  return [
    {
      "id": 0,
      "question": "Apa itu demam berdarah dengue (DBD)?",
      "answer": [
        {
          "content": "demam yang disebabkan oleh bakteri",
          "answer": false
        },
        {
          "content": "penyakit yang dibawa oleh tikus ke manusia melalui air liurnya",
          "answer": false
        },
        {
          "content": "penyakit yang dibawa oleh nyamuk ",
          "answer": true
        },
        {
          "content": "virus e colli yang dibawa oleh nyamuk",
          "answer": false
        }
      ]
    },
    {
      "id": 1,
      "question": "Di manakah nyamuk Aedes aegypti berkembang biak?",
      "answer": [
        {
          "content": "genangan air bersih",
          "answer": true
        },
        {
          "content": "baju yang menggantung",
          "answer": false
        },
        {
          "content": "tempat yang terpapar sinar matahari",
          "answer": false
        },
        {
          "content": "lumut",
          "answer": false
        }
      ]
    },
    {
      "id": 2,
      "question": "Bagaimana cara penularan penyakit demam berdarah?",
      "answer": [
        {
          "content": "Ditularkan melalui gigitan nyamuk yang terinfeksi virus",
          "answer": true
        },
        {
          "content": "Ditularkan melalui droplet dan cairan tubuh",
          "answer": false
        },
        {
          "content": "Ditularkan melalui sentuhan",
          "answer": false
        },
        {
          "content": "Ditularkan melalui jarum suntik",
          "answer": false
        }
      ]
    },
    {
      "id": 3,
      "question": "Apakah demam berdarah bisa menular antarmanusia?",
      "answer": [
        {
          "content": "Bisa",
          "answer": false
        },
        {
          "content": "Tidak bisa",
          "answer": true
        },
        {
          "content": "Mungkin",
          "answer": false
        },
        {
          "content": "Tergantung imun tubuh",
          "answer": false
        }
      ]
    },
    {
      "id": 4,
      "question": "Apa saja gejala demam berdarah?",
      "answer": [
        {
          "content": "suhu tubuh dibawah 36 derajat, nyeri otot, pusing",
          "answer": false
        },
        {
          "content": "muntah, gatal gatal, demam ",
          "answer": false
        },
        {
          "content": "terdapat bitnik merah, demam, nyeri otot, pendarahan",
          "answer": true
        },
        {
          "content": "terdapat bitnik merah, gatal gatal, nyeri ulu hati",
          "answer": false
        }
      ]
    },
    {
      "id": 5,
      "question": "Apakah yang menandakan demam berdarah parah?",
      "answer": [
        {
          "content": "Pusing hingga muntah",
          "answer": false
        },
        {
          "content": "nyeri otot, mual",
          "answer": false
        },
        {
          "content": "demam dan nyeri dibelakang mata",
          "answer": false
        },
        {
          "content": "nyeri perut dan pendarahan",
          "answer": true
        }
      ]
    },
    {
      "id": 6,
      "question": "Seperti apa siklus penyakit demam berdarah?",
      "answer": [
        {
          "content": "fase demam 2- 7 hari, fase kritis demam hingga 40 derajat, fase pemulihan trombosit mulai normal",
          "answer": false
        },
        {
          "content": "fase demam terasa nyeri otot, fase kritis suhu tubuh kurang dari 38 derajat, fase pemulihan sembuh sepenuhnya",
          "answer": false
        },
        {
          "content": "fase demam terdapat bitnik merah, fase kritis mengalami pendarahan, fase pemulihan sembuh sepenuhnya",
          "answer": false
        },
        {
          "content": "fase demam terdapat bitnik merah, fase kritis demam turun tetapi beresiko terjadi pendarahan, fase pemulihan trombosit mulai normal",
          "answer": true
        }
      ]
    },
    {
      "id": 7,
      "question": "Bagaimana cara mencegah penyakit demam berdarah?",
      "answer": [
        {
          "content": "Mandi 2 kali sehari",
          "answer": false
        },
        {
          "content": "Melaksanakan 3M",
          "answer": true
        },
        {
          "content": "Memakai baju Panjang",
          "answer": false
        },
        {
          "content": "Tidak panas- panasan",
          "answer": false
        }
      ]
    },
    {
      "id": 8,
      "question": "Virus apa yang menyebabkan demam dengue?",
      "answer": [
        {
          "content": "Virus nipah",
          "answer": false
        },
        {
          "content": "Hantavirus",
          "answer": false
        },
        {
          "content": "Virus Marburg",
          "answer": false
        },
        {
          "content": "Virus dengue",
          "answer": true
        }
      ]
    },
    {
      "id": 9,
      "question": "Berapa lama masa inkubasi demam berdarah?",
      "answer": [
        {
          "content": "1- 5 hari",
          "answer": false
        },
        {
          "content": "2-5 hari",
          "answer": true
        },
        {
          "content": "2- 7 hari",
          "answer": false
        },
        {
          "content": "sebulan",
          "answer": false
        }
      ]
    },
    {
      "id": 10,
      "question": "apa nama nyamuk yang menginfeksi demam berdarah?",
      "answer": [
        {
          "content": "Nyamuk aedes",
          "answer": true
        },
        {
          "content": "Nyamuk anophelex",
          "answer": false
        },
        {
          "content": "Nyamuk malaria",
          "answer": false
        },
        {
          "content": "Nyamuk enchepalitis",
          "answer": false
        }
      ]
    }
  ]
}
