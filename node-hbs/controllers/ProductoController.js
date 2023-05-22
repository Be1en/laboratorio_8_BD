var Producto = require("../models/Producto");
var mongoose = require('mongoose');

var productoController = {};

productoController.list = function(req, res){
    
    Producto.find({}).exec(function(err, productos){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/productos/index', {productos: productos,titulo:'INDEX'} );
        
    });
    
};

productoController.show = function(req, res){
    Producto.findOne({_id: req.params.id}).exec(function(err, producto){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/productos/show', {producto: producto} );
    });
    
};

productoController.create = function(req, res){
    res.render('../views/productos/create');
};

productoController.save = function(req, res){
    var producto = new Producto( req.body );
    producto.save()
    .then(() => {
      console.log("Successfully created a producto. :)");
      res.redirect("/productos/show/" + producto._id);
    })
    .catch(err => {
      console.log('Error: ', err);
    });
};

productoController.edit = function(req, res) {
  Producto.findOne({_id: req.params.id}).exec(function (err, producto) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/productos/edit", {producto: producto});
    
  });
};

productoController.update = function(req, res){
    Producto.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        precio: req.body.precio,
        stock: req.body.stock,
        descripcion: req.body.descripcion,
    }}, { new: true },
    function( err, producto){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/productos/edit', {producto: req.body} );
        }
        
        console.log( producto );
        
        res.redirect('/productos/show/' + producto._id);
        
    });
};

productoController.delete = function(req, res){
    
    Producto.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Producto deleted!");
        res.redirect("/productos");
    });
    
};

module.exports = productoController;
