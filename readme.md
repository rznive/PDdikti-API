# API PDDIKTI KEMENDIKBUD

API ini menyediakan akses untuk mencari dan mendapatkan informasi tentang mahasiswa dan dosen menggunakan data dari [PDDIKTI.GO.ID](https://pddikti.kemdikbud.go.id/).

## Fitur

- Mencari mahasiswa berdasarkan nama
- Mendapatkan detail mahasiswa
- Mencari dosen berdasarkan nama
- Mendapatkan detail dosen
- Coming soon

## Endpoint

### Mahasiswa

- **Mencari Mahasiswa**
  - **URL:** `/api/pddikti/searchMhs`
  - **Metode:** `GET`
  - **Query Parameter:** `nama` (string, wajib)
  - **Respon:** Daftar mahasiswa sesuai nama/nim.

- **Detail Mahasiswa**
  - **URL:** `/api/pddikti/detailMhs`
  - **Metode:** `GET`
  - **Query Parameter:** `idMhs` (string, wajib)
  - **Respon:** Detail mahasiswa.

### Dosen

- **Mencari Dosen**
  - **URL:** `/api/pddikti/searchDsn`
  - **Metode:** `GET`
  - **Query Parameter:** `nama` (string, wajib)
  - **Respon:** Daftar dosen sesuai nama.

- **Detail Dosen**
  - **URL:** `/api/pddikti/detailDsn`
  - **Metode:** `GET`
  - **Query Parameter:** `idDsn` (string, wajib)
  - **Respon:** Detail dosen dan riwayat pendidikan.

## Penanganan Kesalahan

- **400 Bad Request:** Parameter hilang.
- **404 Not Found:** Data tidak ditemukan.
- **500 Internal Server Error:** Kesalahan server.

