const express = require('express');
const router = express.Router();
const { shortUrl, redirect } = require('./../controller/url.controller');

router.post('/shorten', shortUrl);
router.get('/:shortId', redirect);

module.exports = router;