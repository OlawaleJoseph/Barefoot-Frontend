const express = require('express');
const path = require('path');
const dotEnv = require('dotenv');

dotEnv.config();
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3333;
app.listen(port);
