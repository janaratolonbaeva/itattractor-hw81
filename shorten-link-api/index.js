const express = require('express');
const cors = require("cors");
const mongoose = require('mongoose');
const shortenLink = require('./app/shorent-link');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

const port = 8000;

app.use('/', shortenLink);

const run = async () => {
  await mongoose.connect('mongodb://localhost/shortLink', {useNewUrlParser: true, useUnifiedTopology: true});

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });

  // process.on('exit', () => {
  //   console.log('exiting');
  //   mongoDb.disconnect();
  // });

};

run().catch(console.error);