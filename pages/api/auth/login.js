import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { connectToDb } from '../../../services/connectToDb.service';

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

// Login user
module.exports = async (req, res) => {
  // Check user input
  const body = JSON.parse(req.body);

  const { email, password } = body;

  try {
    // Get database connection
    const db = await connectToDb(uri);

    // Select the "users" collection from the database
    const collection = await db.collection('users');

    if (email) {
      // Search for user
      const [user] = await collection.find({ email }).toArray();
      console.log('the user we found...', user);

      // Test the password
      const isMatched = await bcrypt.compare(password, user.password);

      // If true, send token to fe that we are logged in
      if (isMatched) {
        const payload = user;

        // Set JWT
        jwt.sign(
          payload,
          'mysecret',
          {
            expiresIn: '30d',
          },
          (err, token) => {
            if (err) throw err;
            res.status(200).json({
              msg: 'token signed',
              token,
              userId: user._id,
              userType: user.userType,
              userEmail: user.email,
            });
          }
        );
      } else {
        res.status(400).json({ msg: 'auth error' });
      }
    } else {
      res.status(400).json({ msg: 'error no email' });
    }
  } catch (error) {
    console.error('error', error);
    res.status(400).json({ msg: 'error' });
  }
};
