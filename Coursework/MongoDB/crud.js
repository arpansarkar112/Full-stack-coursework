const { connectDB, client } = require('./db.js');

async function runCRUD() {
  try {
    await connectDB();
    const db = client.db('testdb');
    const collection = db.collection('users');

    // 1. Insert (Create)
    const insertResult = await collection.insertOne({ name: 'John Doe', age: 30 });
    console.log('Inserted document =>', insertResult);

    // 2. Find (Read)
    const findResult = await collection.findOne({ name: 'John Doe' });
    console.log('Found document =>', findResult);

    // 3. Update
    const updateResult = await collection.updateOne(
      { name: 'John Doe' },
      { $set: { age: 31 } }
    );
    console.log('Updated document =>', updateResult);
    const findUpdatedResult = await collection.findOne({ name: 'John Doe' });
    console.log('Found updated document =>', findUpdatedResult);


    // 4. Delete
    const deleteResult = await collection.deleteOne({ name: 'John Doe' });
    console.log('Deleted document =>', deleteResult);
    const findDeletedResult = await collection.findOne({ name: 'John Doe' });
    console.log('Found deleted document =>', findDeletedResult);


  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}

runCRUD();
