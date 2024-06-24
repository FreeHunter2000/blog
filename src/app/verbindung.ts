/*
const {mongodb} = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionString = 'mongodb://localhost:27017/?directConnection=true';

MongoClient.connect(connectionString, {autoReconnect: true}, (database) => {

  console.log('Connected');

  const users = database.collection('users');

/*  const user = {
    firstname: 'Jane',
    lastName: 'Doe'
  };

  users.insertOne(user, err => {
    if (err){
      console.log('Failed to insert user')
      process.exit(1);
    }

    console.log('Succsesfully inserted User');

  });

users.find().toArray((err, documents) => {
  if(err){
    console.log('Failed');
    process.exit(1);
  }

  console.log(documents);
  db.close();
});
});

*/


