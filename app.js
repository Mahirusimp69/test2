const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/seminkas', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const productoRoutes = require('./routes/productos');
app.use('/product', productoRoutes);
app.use('/seller', productoRoutes); // For listing and adding/editing

// Home route
app.get('/', (req, res) => {
  res.render('index'); // Login page
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
