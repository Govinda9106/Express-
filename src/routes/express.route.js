const express = require('express');
const expressController = require('./express.controller');

const router = express.Router();

router.get('/home', expressController.getHome);

module.exports = router;