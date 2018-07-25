'use strict'

const mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.connect('mongodb://127.0.0.1:27017/curso_mongo',{useNewUrlParser: true})
.then(() => {
    console.log('La conexion a mongodb se a realizado correctamente');
    app.listen(port, ()=>{
      console.log('El servidor esta corriendo en 127.0.0.1:3800');
    });
  })
  .catch(err => console.log(err));
