import mongoose from 'mongoose';

const connection = {};
const connection_string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;

async function connectToDB() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(connection_string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

export default connectToDB;
