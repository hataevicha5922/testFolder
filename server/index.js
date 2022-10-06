const express = require('express');
const app = express();
const PORT = process.env.PORT || 8800;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
