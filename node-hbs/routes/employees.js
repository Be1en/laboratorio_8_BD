var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();

var empleado = require('../controllers/EmpleadoController.js');

router.get('/', empleado.list);
router.get('/show/:id', empleado.show);
router.get('/create', empleado.create);
router.post('/save', empleado.save);
router.get('/edit/:id', empleado.edit);
router.post('/update/:id', empleado.update);
router.post('/delete/:id', empleado.delete);

module.exports = router;
