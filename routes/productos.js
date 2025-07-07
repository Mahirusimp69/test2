const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');

// Mostrar productos del vendedor
router.get('/products', async (req, res) => {
  const productos = await Producto.find();
  res.render('sellerproducts', { productos });
});

// Página para agregar producto
router.get('/add', (req, res) => {
  res.render('add');
});

// Mostrar detalle de producto
router.get('/:id', async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  const comentarios = []; // Simulado por ahora
  res.render('details', { producto, comentarios });
});

// Endpoint para agregar (solo para testing rápido)
router.post('/add', async (req, res) => {
  await Producto.create(req.body);
  res.redirect('/seller/products');
});

module.exports = router;
