const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Pagina de inicio')
});

module.exports = router ;