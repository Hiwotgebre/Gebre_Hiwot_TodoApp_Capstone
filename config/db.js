const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this is at the top to load environment variables

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('Database connection error:', err));

module.exports = mongoose;
