/* const fs = require('fs');
const MongoClient = require('mongodb').MongoClient;

// Odczytaj treść z pliku
const content = fs.readFileSync('db_Literature/GóraWezwania.html', 'utf-8');

// Połączenie z bazą danych
const url = 'mongodb://localhost:27017';
const dbName = 'literatureDB';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;

  // Wybierz bazę danych
  const db = client.db(dbName);

  // Dodaj opowiadanie
  db.collection('opowiadania').insertOne({
    autor: 'Imię Nazwisko',
    dataPublikacji: new Date(),
    iloscStron: 8,
    gatunek: 'Fantastyka',
    tresc: content,
  }, (err, result) => {
    if (err) throw err;

    console.log('Opowiadanie dodane pomyślnie.');
    client.close();
  });
}); */