const express = require("express");
const router = express.Router();
const {
  searchMhs,
  detailMhs,
  searchDsn,
  detailDsn,
} = require("../controllers/pddiktiControllers");

router.get("/searchMhs", searchMhs);
router.get("/detailMhs", detailMhs);
router.get("/searchDsn", searchDsn);
router.get("/detailDsn", detailDsn);

module.exports = router;
