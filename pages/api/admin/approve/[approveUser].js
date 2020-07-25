import { connectToDb } from '../../../../services/connectToDb.service';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

// Approve user
module.exports = async (req, res) => {
  const approveUser = req.query.approveUser;

  if (!approveUser) {
    res.status(400).json({ msg: 'error no user' });
  }

  try {
    const db = await connectToDb(uri);

    const farmsCollection = await db.collection('farms');
    const farmsArray = await farmsCollection.find({}).toArray();

    // Add real user and remove claimed user
    const updatedFarms = farmsArray[0].farms.map((farm) => {
      if (farm.name === approveUser) {
        farm.realUser = farm.claimedUser;
        delete farm.claimedUser;
      }
      return farm;
    });

    // Update farms collection
    const updated = await farmsCollection.update(
      {},
      { farms: updatedFarms },
      { returnOriginal: false }
    );

    res.status(200).json({ msg: 'approved user', updatedFarms });
  } catch (error) {
    console.error('error', error);
    res.status(400).json({ msg: 'error' });
  }
};
