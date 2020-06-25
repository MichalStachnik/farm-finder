// import mongoose from 'mongoose';

import Farm from '../../models/Farm';

// const connection_string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

// const connectToDB = async () => {
//   try {
//     db = await mongoose.connect(connection_string, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('connecting to db...');
//     console.log(db.connections[0].name);
//     console.log(db.connections[0].readyState);
//   } catch (error) {
//     console.log('error connecting to db', error);
//   }
// };

import connectToDB from '../../services/connectToDb.service';

export default async (req, res) => {
  try {
    await connectToDB();
    let farms = await Farm.find({});
    console.log('the farms we fetched', farms);
    // res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ msg: 'success', farms });
    // res.status(200).json({ msg: 'success' });
  } catch (error) {
    console.log('error fetching data', error);
    res.status(400).json({ msg: 'failure to grab farm data', error });
  }
};
