const axios = require("axios");
require("dotenv").config();

const BASE_URL = process.env.BASE_URL;

const searchMhs = async (req, res) => {
  const namaMahasiswa = req.query.nama;
  console.log(
    "Received request to search for mahasiswa with name:",
    namaMahasiswa
  );

  if (!namaMahasiswa) {
    console.log("Error: Parameter 'nama' is missing.");
    return res.status(400).json({
      status: false,
      creator: "JawaPRIDE.dev | rznive",
      error: 'Not Found: Parameter "nama" tidak boleh kosong.',
    });
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/api/pencarian/mhs/${encodeURIComponent(namaMahasiswa)}`
    );

    const data = response.data;

    if (data.length === 0) {
      console.log("No mahasiswa found.");
      return res.status(404).json({
        status: false,
        creator: "JawaPRIDE.dev | rznive",
        error: "Not Found: Mahasiswa tidak ditemukan.",
      });
    }

    const result = data.map((mahasiswa) => ({
      id_mahasiswa: mahasiswa.id,
      nama_mhs: mahasiswa.nama,
      nama_pt: mahasiswa.nama_pt,
      singkatan_pt: mahasiswa.singkatan_pt,
      nama_prodi: mahasiswa.nama_prodi,
    }));

    res.json({ status: true, creator: "JawaPRIDE.dev | rznive", data: result });
  } catch (error) {
    console.error("Error occurred while fetching data:", error.message);
    res.status(500).json({
      status: false,
      creator: "JawaPRIDE.dev | rznive",
      error: error.message,
    });
  }
};

const detailMhs = async (req, res) => {
  const idMahasiswa = req.query.idMhs;
  console.log(
    "Received request to get detail for mahasiswa with ID:",
    idMahasiswa
  );

  if (!idMahasiswa) {
    console.log("Error: Parameter 'idMhs' is missing.");
    return res.status(400).json({
      status: false,
      creator: "JawaPRIDE.dev | rznive",
      error: 'Not Found: Parameter "idMhs" tidak boleh kosong.',
    });
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/api/detail/mhs/${idMahasiswa}`
    );

    console.log("External API detail response:", response.data);

    res.json({
      status: true,
      creator: "JawaPRIDE.dev | rznive",
      data: response.data,
    });
  } catch (error) {
    console.error("Error occurred while fetching detail data:", error.message);
    res.status(500).json({
      status: false,
      creator: "JawaPRIDE.dev | rznive",
      error: error.message,
    });
  }
};

const searchDsn = async (req, res) => {
  const namaDosen = req.query.nama;
  console.log("Received request to search for dosen with name:", namaDosen);

  if (!namaDosen) {
    console.log("Error: Parameter 'nama' is missing.");
    return res.status(400).json({
      status: false,
      creator: "JawaPRIDE.dev | rznive",
      error: 'Not Found: Parameter "nama" tidak boleh kosong.',
    });
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/api/pencarian/dosen/${encodeURIComponent(namaDosen)}`
    );

    const data = response.data;

    if (data.length === 0) {
      console.log("No dosen found.");
      return res.status(404).json({
        status: false,
        creator: "JawaPRIDE.dev | rznive",
        error: "Not Found: Dosen tidak ditemukan.",
      });
    }

    const result = data.map((dosen) => ({
      id_dosen: dosen.id,
      nama_dosen: dosen.nama,
      nidn: dosen.nidn,
      nama_pt: dosen.nama_pt,
      singkatan_pt: dosen.singkatan_pt,
      nama_prodi: dosen.nama_prodi,
    }));

    res.json({ status: true, creator: "JawaPRIDE.dev | rznive", data: result });
  } catch (error) {
    console.error("Error occurred while fetching dosen data:", error.message);
    res.status(500).json({
      status: false,
      creator: "JawaPRIDE.dev | rznive",
      error: error.message,
    });
  }
};

const detailDsn = async (req, res) => {
  const idDosen = req.query.idDsn;
  console.log("Received request to get detail for dosen with ID:", idDosen);

  if (!idDosen) {
    console.log("Error: Parameter 'idDsn' is missing.");
    return res.status(400).json({
      status: false,
      creator: "JawaPRIDE.dev | rznive",
      error: 'Not Found: Parameter "idDsn" tidak boleh kosong.',
    });
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/api/dosen/profile/${idDosen}`
    );

    const detailData = response.data;
    console.log("External API detail response for dosen:", detailData);

    const formattedDetailData = {
      id_sdm: detailData.id_sdm,
      nama_dosen: detailData.nama_dosen,
      nama_pt: detailData.nama_pt,
      nama_prodi: detailData.nama_prodi,
      jenis_kelamin: detailData.jenis_kelamin,
      jabatan_akademik: detailData.jabatan_akademik,
      pendidikan_tertinggi: detailData.pendidikan_tertinggi,
      status_ikatan_kerja: detailData.status_ikatan_kerja,
      status_aktivitas: detailData.status_aktivitas,
    };

    const studyHistory = await getStudyHistory(idDosen);

    res.json({
      status: true,
      creator: "JawaPRIDE.dev | rznive",
      data: formattedDetailData,
      riwayat_pendidikan: studyHistory.data,
    });
  } catch (error) {
    console.error("Error occurred while fetching dosen detail:", error.message);
    res.status(500).json({
      status: false,
      creator: "JawaPRIDE.dev | rznive",
      error: error.message,
    });
  }
};

const getStudyHistory = async (idDosen) => {
  try {
    console.log("Fetching study history for dosen with ID:", idDosen);
    const response = await axios.get(
      `${BASE_URL}/api/dosen/study-history/${idDosen}`
    );

    const data = response.data;

    if (data && data.length > 0) {
      console.log("Study history found:", data);

      const formattedStudyHistory = data.map((history) => ({
        nidn: history.nidn,
        tahun_lulus: history.tahun_lulus,
        jenjang: history.jenjang,
        nama_pt: history.nama_pt,
        gelar_akademik: history.gelar_akademik,
        singkatan_gelar: history.singkatan_gelar,
      }));

      return { status: true, data: formattedStudyHistory };
    } else {
      console.log("No study history found.");
      return { status: false, error: "Riwayat pendidikan tidak ditemukan." };
    }
  } catch (error) {
    console.error(
      "Error occurred while fetching study history:",
      error.message
    );
    return { status: false, error: error.message };
  }
};

module.exports = {
  searchMhs,
  detailMhs,
  searchDsn,
  detailDsn,
};
