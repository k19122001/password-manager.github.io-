const express = require('express')
const { MongoClient, Collection } = require('mongodb');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config()
// console.log(process.env.MONGO_URI)

// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'myshows';
const app = express()
const port = 3000
app.use(bodyParser.json())
app.use(cors())
client.connect();

// get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('media')
    const findResult =  await collection.find({}).toArray();
    res.json(findResult)
  res.send('Hello World!')
})

// save a password (by id)
app.post('/', async (req, res) => {
    const rating = req.body
    const db = client.db(dbName);
    const collection = db.collection('media')
    const findResult =  await collection.insertOne(rating);
        // const findResult =  await collection.find({}).toArray();
  res.send({success:true, result: findResult})
})

// delete password (by id)

app.delete  ('/', async (req, res) => {
    const rating = req.body
    const db = client.db(dbName);
    const collection = db.collection('media')
    const findResult =  await collection.deleteOne(rating);
        // const findResult =  await collection.find({}).toArray();
  res.send({success:true, result: findResult})
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

