var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    apellido: {type: String, required: true, max: 20},
    email: {type: String, required: true},
    cargo: {type: String, required: true, max: 20},
    dni: {type: String, required: true, max: 8},
    estado: {type: String, required: true, max:2},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
