const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.send('Aquí encontrarás algunas de las científicos y matemáticos más destacadas del  mundo de la ciencia y de la programación. ​Algunos te sorprenderán.')
});

module.exports = router ;