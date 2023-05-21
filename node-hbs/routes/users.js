var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();

var usuario = require('../controllers/UsuarioController.js');

router.get('/', usuario.list);
router.get('/show/:id', usuario.show);
router.get('/create', usuario.create);
router.post('/save', usuario.save);
router.get('/edit/:id', usuario.edit);
router.post('/update/:id', usuario.update);
router.post('/delete/:id', usuario.delete);

module.exports = router;
