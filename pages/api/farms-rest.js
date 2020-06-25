import mongoose from 'mongoose';

import Farm from '../../models/Farm';

const connection_string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

const connectToDB = async () => {
  try {
    const db = await mongoose.connect(connection_string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connecting to db...');
    // console.log(db);
    // console.log(db.connections);
    console.log(db.connections[0].name);
    console.log(db.connections[0].readyState);
  } catch (error) {
    console.log('error connecting to db', error);
  }
};

connectToDB();

export default async (req, res) => {
  try {
    let farms = await Farm.find({});
    console.log('the farms we fetched', farms);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({ msg: 'success', farms });
  } catch (error) {
    console.log('error fetching data', error);
    throw error;
  }

  // res.end(JSON.stringify({ name: 'John Doe' }));
};
