const express = require("express");
const auth = require("./auth");
const table = require("./table");


const router = express.Router();

router.use("/auth", auth);
router.use("/table", table);

module.exports = router;