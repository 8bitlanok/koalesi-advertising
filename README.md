# Koalesi Advertising

Prototype website untuk divisi **Koalesi Advertising** dari PT. Koalesi Group Indonesia.

## Tujuan Prototype

Website ini dirancang sebagai digital showroom dan lead-generation website untuk:

- Advertising
- Billboard
- Neon Box
- Signage
- Display
- Reklame
- Banner & Spanduk
- Shop Sign
- Branding

Fitur utama yang disiapkan adalah **Billboard Network** untuk menampilkan 27 titik billboard Koalesi di Sumatera Utara setelah data asli diberikan.

## Struktur

```
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── README.md
```

## Cara Edit

### 1. index.html
Berisi struktur halaman.

Gunakan file ini untuk mengubah:
- teks
- section
- menu navigasi
- CTA
- informasi footer

### 2. style.css
Berisi seluruh tampilan.

Variabel warna berada di bagian paling atas:

- `--blue-deep`
- `--blue`
- `--blue-light`
- `--navy`
- `--white`

Jika identitas warna berubah, mulai edit dari bagian tersebut.

### 3. script.js
Berisi interaksi JavaScript.

**Data billboard sengaja diletakkan di bagian paling atas.**

Saat 27 data asli tersedia, array `billboardData` akan diisi dengan data sebenarnya.

Contoh struktur:

```js
{
  id: 1,
  city: "Nama Kota",
  address: "Alamat asli",
  size: "Ukuran",
  status: "Status jika tersedia"
}
```

Jangan memasukkan data yang belum dikonfirmasi.

## Asset Logo

Logo asli Koalesi belum disertakan sebagai binary asset pada commit prototype ini karena file gambar sebelumnya tidak tersedia untuk diambil kembali dari storage saat pengerjaan.

Saat file logo asli tersedia, simpan sebagai:

```
assets/logo-koalesi.png
```

Kemudian ganti placeholder logo pada `index.html` dengan:

```html
<img src="assets/logo-koalesi.png" alt="Logo PT. Koalesi Group Indonesia">
```

Jangan menggambar ulang logo secara manual.

## Foto

Semua foto proyek saat ini menggunakan placeholder.

Foto asli nantinya dapat disimpan di:

```
assets/
├── billboard/
└── portfolio/
```

## Prinsip Data

Tidak ada alamat, kota, ukuran, koordinat, jumlah klien, jumlah proyek, traffic, atau klaim lain yang boleh dibuat-buat.

Data 27 billboard akan berasal dari informasi asli perusahaan.

## Kontak Resmi

WhatsApp: 0821 9999 2704  
Instagram: @koalesiadvertising

Alamat:

Jl. S. Parman No. 14, Bincar, Kec. Padangsidimpuan Utara, Padangsidimpuan 22711

Tidak ada email perusahaan yang dicantumkan pada prototype.
