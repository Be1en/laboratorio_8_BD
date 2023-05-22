var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductoSchema = new Schema({
    nombre: {type: String, required: true, max: 20},
    precio: {type: String, required: true},
    stock: {type: String, required: true},
    descripcion: {type: String, required: true},
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Producto', ProductoSchema);