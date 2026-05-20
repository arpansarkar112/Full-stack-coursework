require('dotenv').config();

const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
  } catch (e) {
    console.error('Could not connect to MongoDB', e);
    process.exit(1);
  }
}

module.exports = { connectDB, client };
