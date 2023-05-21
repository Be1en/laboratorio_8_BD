var Empleado = require("../models/Empleado");
var mongoose = require('mongoose');

var empleadoController = {};

empleadoController.list = function(req, res){
    
    Empleado.find({}).exec(function(err, empleados){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/empleados/index', {empleados: empleados,titulo:'INDEX'} );
        
    });
    
};

empleadoController.show = function(req, res){
    Empleado.findOne({_id: req.params.id}).exec(function(err, empleado){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/empleados/show', {empleado: empleado} );
    });
    
};

empleadoController.create = function(req, res){
    res.render('../views/empleados/create');
};

empleadoController.save = function(req, res){
    var empleado = new Empleado( req.body );
    empleado.save()
    .then(() => {
      console.log("Successfully created a empleado. :)");
      res.redirect("/empleados/show/" + empleado._id);
    })
    .catch(err => {
      console.log('Error: ', err);
    });
};

empleadoController.edit = function(req, res) {
  Empleado.findOne({_id: req.params.id}).exec(function (err, empleado) {
    if (err) { console.log("Error:", err); return; }
    
    res.render("../views/empleados/edit", {empleado: empleado});
    
  });
};

empleadoController.update = function(req, res){
    Empleado.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        cargo: req.body.cargo,
        dni: req.body.dni,
        estado: req.body.estado
    }}, { new: true },
    function( err, empleado){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/empleados/edit', {empleado: req.body} );
        }
        
        console.log( empleado );
        
        res.redirect('/empleados/show/' + empleado._id);
        
    });
};

empleadoController.delete = function(req, res){
    
    Empleado.remove({_id: req.params.id}, function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Empleado deleted!");
        res.redirect("/empleados");
    });
    
};

module.exports = empleadoController;
