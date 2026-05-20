require('dotenv').config();
const { MongoClient } = require('mongodb');

async function runAggregation() {
  const uri = process.env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log('Connected to MongoDB for aggregation');

    const db = client.db('sample_airbnb');
    const collection = db.collection('listingsAndReviews');

    const pipeline = [
      {
        $match: {
          accommodates: { $gt: 4 },
          price: { $lt: 500 },
          amenities: 'Hair dryer'
        }
      },
      {
        $sort: {
          price: 1 // 1 for ascending
        }
      },
      {
        $project: {
          _id: 0,
          name: 1,
          description: 1,
          price: 1,
          amenities: 1
        }
      },
      {
        $limit: 20
      }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    console.log('Aggregation result:', result);

  } catch (e) {
    console.error('An error occurred during aggregation:', e);
  } finally {
    await client.close();
    console.log('MongoDB connection closed.');
  }
}

runAggregation();
