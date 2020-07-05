import { connectToDb } from '../../services/connectToDb.service';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {
  // Get a database connection, cached or otherwise,
  const db = await connectToDb(uri);

  // Select the "farms" collection from the database
  const collection = await db.collection('farms');

  const farms = await collection.find({}).toArray();

  // Respond with a JSON string of all users in the collection
  res.status(200).json({ farms });
};
