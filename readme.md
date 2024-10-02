```markdown
# API PDDIKTI KEMENDIKBUD | CARI DATA MAHASISWA | CARI DATA DOSEN | CARI DATA PERGURUAN TINGGI

API ini menyediakan akses untuk mencari dan mendapatkan informasi tentang mahasiswa dan dosen menggunakan data dari [PDDIKTI.GO.ID](https://pddikti.kemdikbud.go.id/).

## Fitur

- Mencari mahasiswa berdasarkan nama
- Mendapatkan detail mahasiswa
- Mencari dosen berdasarkan nama
- Mendapatkan detail dosen
- cooming soon

## Endpoint

### Mahasiswa

- **Mencari Mahasiswa**

  - **URL:** `/api/pddikti/pencarian/mhs`
  - **Metode:** `GET`
  - **Query Parameter:** `nama` (string, wajib)
  - **Respon:** Daftar mahasiswa sesuai nama/nim.

- **Detail Mahasiswa**

  - **URL:** `/api/pddikti/detail/mhs`
  - **Metode:** `GET`
  - **Query Parameter:** `idMhs` (string, wajib)
  - **Respon:** Detail mahasiswa.

### Dosen

- **Mencari Dosen**

  - **URL:** `/api/pddikti/pencarian/dosen`
  - **Metode:** `GET`
  - **Query Parameter:** `nama` (string, wajib)
  - **Respon:** Daftar dosen sesuai nama.

- **Detail Dosen**

  - **URL:** `/api/pddikti/detail/dosen`
  - **Metode:** `GET`
  - **Query Parameter:** `idDsn` (string, wajib)
  - **Respon:** Detail dosen dan riwayat pendidikan.

## Penanganan Kesalahan

- **400 Bad Request:** Parameter hilang.
- **404 Not Found:** Data tidak ditemukan.
- **500 Internal Server Error:** Kesalahan server.

- **rznive**
```