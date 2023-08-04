const express = require('express');
const router = express.Router();
const controller = require('./../controllers/heroi');

router.post('/cadastrar', controller.criar);


module.exports = router;
