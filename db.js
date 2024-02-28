const fs = require('fs');
const mongoose = require('mongoose');

function dbConnect() {
  
  const url = 'mongodb://0.0.0.0:27017/literatureDB';
  mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
  mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + url);
  });
  
  mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
  });

  const content = fs.readFileSync('db_Literature/GóraWezwania.html', 'utf-8');
  console.log(content);
}

module.exports = dbConnect;
// Odczytaj treść z pliku
