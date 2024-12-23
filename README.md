# 🎓📙 CC-32 Alumni 🎉✨

![Alt text](https://lh3.googleusercontent.com/pw/AP1GczPumcH6nOs9pSRy70ch6YcR3QMO2ttB5MUkBdYLYNRACxP3msFebB7z7tJQWW0Qx1IClcPP3kW4GtBUGv5L0WKZVHns1-91vt0lGkLD34OjnHnWzrA=w2400)

Selamat datang di **CC-32 Alumni**! 📖👩‍🎓👨‍🎓

Proyek ini bertujuan untuk menampilkan buku alumni Bangkit 2024 kelas CC-32 dengan informasi seperti foto, nama, asal kampus, dan link ke Instagram serta LinkedIn. 🌟

## 🚀 Demo

Anda dapat melihat demo proyek ini [di sini](S) 🖥️🌈

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi berikut:

- HTML5 🌐
- CSS3 🌈
- JavaScript 💻
- [Bootstrap](https://getbootstrap.com/) 4.5.2 🚀

## 📂 Struktur Proyek

📁 project-root  
├── 📄 index.html  
├── 📄 styles.css  
├── 📄 script.js  
└── 📄 README.md

## 📋 Panduan Instalasi

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di lokal Anda:

1. **Clone repositori ini:**

    ```bash
    git clone
    ```

2. **Pindah ke direktori proyek:**

    ```bash
    cd
    ```

3. **Buka `index.html` di browser favorit Anda:**

    ```bash
    open index.html
    ```

    atau

    ```bash
    start index.html
    ```

## 💡 Cara Menambahkan Data Alumni

Untuk menambahkan data alumni baru, edit file `script.js` dan tambahkan objek baru ke dalam array `alumniData` dengan format berikut:

```javascript
const alumniData = [
    {
        nickname: "Nama Panggilan",
        campus: "Asal Kampus",
        ig: "Link Instagram",
        linkedin: "Link LinkedIn",
        photo: "URL Foto",
    },
    // Tambahkan data alumni lainnya di sini
];
```

## 📸 Cara Menambahkan Foto Alumni

Anda dapat mengunggah foto alumni dengan tiga cara:

### 1. Menggunakan Freepik

1. Buka situs [Freepik](https://www.freepik.com/).
2. Cari gambar yang sesuai (gunakan kata kunci seperti "profile picture" atau "avatar").
3. Klik gambar yang Anda pilih.
4. Klik tombol "Download" untuk mengunduh gambar (pilih versi gratis jika tersedia).
5. Unggah gambar ke platform berbagi gambar seperti [Imgur](https://imgur.com/) atau [Postimages](https://postimages.org/).
6. Salin link gambar yang dihasilkan dan gunakan sebagai nilai properti `photo` di objek alumni.

### 2. Menggunakan Google Photos

1. Buka [Google Photos](https://photos.google.com/).
2. Unggah foto alumni ke album Anda.
3. Klik pada foto yang ingin Anda gunakan.
4. Klik tombol "Bagikan" (ikon rantai/link) di pojok kanan atas.
5. Pilih "Buat link yang dapat dibagikan" dan salin link tersebut.
6. Buka [Google Photos Embed Generator](https://www.labnol.org/embed/google/photos/).
7. Tempelkan link yang dapat dibagikan ke generator.
8. Salin kode embed yang dihasilkan (format URL JPG) dan gunakan sebagai nilai properti `photo` di objek alumni.

**Contoh:**

```javascript
const alumniData = [
    {
        nickname: "Nama Panggilan",
        campus: "Asal Kampus",
        ig: "Link Instagram",
        linkedin: "Link LinkedIn",
        photo: "https://photos.google.com/shareable-link",
    },
];
```

## 🎉 Kontribusi

Kami sangat menghargai kontribusi Anda! Silakan ikuti langkah-langkah berikut untuk berkontribusi:

1. **Fork** repositori ini 🍴
2. Buat **branch** fitur Anda (`git checkout -b fitur-baru`) 🌿
3. **Commit** perubahan Anda (`git commit -am 'Menambahkan fitur baru'`) 📦
4. **Push** branch Anda (`git push origin fitur-baru`) 🚀
5. Buat **Pull Request** 📨

Terima kasih telah berkontribusi! 🙏✨

## 📜 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT. Lihat file [LICENSE](LICENSE) untuk informasi lebih lanjut. 📄

---

Terima kasih telah mengunjungi proyek kami! Semoga hari Anda menyenangkan! 🌈😊

