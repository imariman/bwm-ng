const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const fakedb=require('./fake_db');
const Rental = require('./models/rental');
const rentalRoutes = require('./routes/rentals');
mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new fakedb();
  fakeDb.seedDb();
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use('/api/v1/rentals', rentalRoutes);

app.listen(PORT, () => {
  console.log('I AM RUNNING!');
});
