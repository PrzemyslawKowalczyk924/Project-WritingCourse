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

  //const content = fs.readFileSync('db_Literature/Góra Wezwania JSON.json', 'utf-8');
  //console.log(content);


}

// Definiowanie modelu


/* const { MongoClient } = require('mongodb');

async function loader() {
  try {
    const client = new MongoClient('mongodb://0.0.0.0:27017/literatureDB/opowiadania', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();

    const database = client.db('literatureDB');
    const collection = database.collection('opowiadania');

    const opowiadania = await collection.find().toArray();

    console.log(opowiadania);

    return { json: { data: opowiadania } };
  } catch (error) {
    console.error('Błąd pobierania danych:', error);
    return { json: { error: 'Błąd pobierania danych' } };
  }
} */

/* function loader() {
  return fetch('mongodb://0.0.0.0:27017/literatureDB/opowiadania')
      .then(response => response.json())
      .then(data => {
        console.log(data);
          return { json: { data } };
      })
      .catch(error => {
          console.error('Błąd pobierania pliku JSON:', error);
          return { json: { error: 'Błąd pobierania pliku JSON' } };
      });
}
module.exports = loader; */

module.exports = dbConnect;

// Odczytaj treść z pliku
