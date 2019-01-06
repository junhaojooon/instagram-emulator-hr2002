const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;
const database = [
  {id: 1, count: 5},
  {id: 2, count: 2},
  {id: 3, count: 2},
  ];

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/likes', (req, res) => {
  res.json(database);
});

app.post('/likes', (req, res) => {
  const {id, yesno} = req.body;
  database[id-1].count += yesno;
});

app.listen(port);
