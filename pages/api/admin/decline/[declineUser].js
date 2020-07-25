import { connectToDb } from '../../../../services/connectToDb.service';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

// Decline user
module.exports = async (req, res) => {
  const declineUser = req.query.declineUser;

  if (!declineUser) {
    res.status(400).json({ msg: 'error no user' });
  }

  try {
    const db = await connectToDb(uri);

    const farmsCollection = await db.collection('farms');
    const farmsArray = await farmsCollection.find({}).toArray();

    // Remove the claimed user from the farm object
    const updatedFarms = farmsArray[0].farms.map((farm) => {
      if (farm.name === declineUser) {
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

    res.status(200).json({ msg: 'declined user', updatedFarms });
  } catch (error) {
    console.error('error', error);
    res.status(400).json({ msg: 'error' });
  }
};
