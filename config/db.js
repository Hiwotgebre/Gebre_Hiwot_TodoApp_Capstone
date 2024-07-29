const mongoose = require('./config/db');

// Environment variable for URI
const mongoURI = process.env.MONGO_URI || "mongodb+srv://hiwotkebede26:Rohisaze21182415!@todo-app.y1bcnog.mongodb.net/?retryWrites=true&w=majority&appName=Todo-App";

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.log(err));

module.exports = mongoose;
