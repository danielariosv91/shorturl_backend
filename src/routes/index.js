const express = require("express")
const router = express.Router();

const urlsRoutes = require('./url.routes');

router.use('/url', urlsRoutes);

module.exports = router;