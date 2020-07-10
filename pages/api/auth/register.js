import bcrypt from 'bcryptjs';

import { connectToDb } from '../../../services/connectToDb.service';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

// Register new user
module.exports = async (req, res) => {
  // Check user input
  const body = JSON.parse(req.body);

  const { email, password } = body;

  try {
    // Get database connection
    const db = await connectToDb(uri);

    // Select the "users" collection from the database
    const collection = await db.collection('users');

    const users = await collection.find({}).toArray();
    // console.log('the users we found...', users);

    // TODO: fix this check
    // If email already exists return
    // if (users) {
    //   return res.status(400).json({ msg: 'This email already exists' });
    // }

    // Encrypt password
    // Create salt with 12 rounds
    const salt = await bcrypt.genSalt(12);

    const saltedPassword = await bcrypt.hash(password, salt);
    console.log('salt', salt);
    console.log('saltedPassword', saltedPassword);

    // Create new user with salted password
    const inserted = await collection.insertOne({
      email,
      password: saltedPassword,
    });

    if (inserted) {
      res.status(200).json({ msg: 'success inserted' });
    }
  } catch (error) {
    console.error('error', error);
    res.status(400).json({ msg: 'error' });
  }
};
