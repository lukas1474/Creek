const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const productsRoutes = require('./routes/products.routes');
const subpagesRoutes = require('./routes/subpages.routes');
const contactsRoutes = require('./routes/contacts.routes');
const cartsRoutes = require('./routes/carts.routes');

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, `../build`)));

/* API ENDPOINTS */
app.use('/api', productsRoutes);
app.use('/api', subpagesRoutes);
app.use(`/api`, contactsRoutes);
app.use(`/api`, cartsRoutes);

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* API ERROR PAGES */
app.use('/api', (req, res) => {
  res.status(404).send({ post: 'Not found...' });
});

/* MONGOOSE */

const dbURI =
  process.env.NODE_ENV === `production`
    ? `mongodb+srv://lukas1474:<password>@cluster0.urxob.mongodb.net/<dbname>?retryWrites=true&w=majority`
    : `mongodb://localhost:27017/creekDB`;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Successfully connected to the database');
});
db.on('error', err => console.log('Error: ' + err));

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Server is running on port: ' + port);
});
