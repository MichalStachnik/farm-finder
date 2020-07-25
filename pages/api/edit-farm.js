import { connectToDb } from '../../services/connectToDb.service';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

// Edit farm
module.exports = async (req, res) => {
  // Check user input
  const body = JSON.parse(req.body);

  const { products, farm } = body;

  console.log('products 👉', products);
  console.log('farm 👉', farm);

  if (!products.length || !farm) return;

  try {
    const db = await connectToDb(uri);

    const farmsCollection = await db.collection('farms');
    const farmsArray = await farmsCollection.find({}).toArray();

    let updatedFarm;

    const updatedFarms = farmsArray[0].farms.map((_farm) => {
      if (_farm.name === farm) {
        _farm.products = products;
        updatedFarm = _farm;
      }
      return _farm;
    });

    // Update farms collection
    const updated = await farmsCollection.update(
      {},
      { farms: updatedFarms },
      { returnOriginal: false }
    );

    res.status(200).json({ msg: 'edited farm', updatedFarm });
  } catch (error) {
    console.error('error', error);
    res.status(400).json({ msg: 'error' });
  }
};
