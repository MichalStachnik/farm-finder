export default (req, res) => {
  const connection_string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-ii9ft.mongodb.net/farm-fresh?retryWrites=true&w=majority`;
  const mb = process.env.MAPBOX_KEY;

  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      name: 'test ok',
      conn: connection_string,
      mb,
      user,
      pass,
    })
  );
};
