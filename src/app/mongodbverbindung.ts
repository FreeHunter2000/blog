/*import { MongoClient, Collection } from 'mongodb';
import {userbewertung} from "./warenkorb/userBewertung.model";

// Verbindungs-URI für Ihre MongoDB-Datenbank
const uri = 'mongodb://localhost:27017/';

// Schnittstelle für das Dokumentenobjekt
interface Planet {
  _id: string;
  name: string;
  hasRings: boolean;
  mainAtmosphere: string[];
  surfaceTemperatureC: {
    min: number;
    max: number;
    mean: number;
  };
}

// Hauptfunktion zum Zugriff auf MongoDB
async function accessMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Verbindung zur MongoDB herstellen
    await client.connect();

    // Datenbank und Sammlung auswählen
    const database = client.db('sample_guides');
    const collection: Collection<Planet> = database.collection('planets');

   accessMongoDB().Produkte.insertOne({
     public produktId:1;
     public name : "Hose";
     public description : "Das ist ein bsp.";
     public amount: 12;
     public imagePath: "string";
     public price : 12.99;



  })

    console.log(`Inserted ${insertResult.insertedCount} document into the collection.`);

    // Beispiel: Dokumente abfragen
    const query = { hasRings: true };
    const findResult = await collection.find(query).toArray();
    console.log(`Found ${findResult.length} documents:`);
    console.log(findResult);
  } finally {
    // Client schließen, wenn die Operationen abgeschlossen sind
    await client.close();
  }
}

// Funktion aufrufen und Fehler behandeln
accessMongoDB().catch(console.error);

*/
