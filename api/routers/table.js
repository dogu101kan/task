const express = require("express");
const { table } = require("../controllers/table");

const router = express.Router();


router.post("/" , table);

module.exports = router;