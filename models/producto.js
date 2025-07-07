const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  precio: Number,
  stock: Number,
  descripcion: String,
  imagenUrl: String,
});

module.exports = mongoose.model('Producto', productoSchema);