const express = require('express');
const mongoDb = require('../mongoDb');
const ShortenLink = require("../modals/ShortenLink");
const ObjectId = require('mongodb').ObjectId;
const {nanoid} = require('nanoid');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const results = await ShortenLink.find();
    res.send(results);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.get('/:shortLink', async(req, res) => {
  try {
    const url = req.params.shortLink;
    const result = await ShortenLink.findOne({shortLink: url});

    if (result) {
      res.status(301).redirect(result.originalLink)
    } else {
      res.sendStatus(404);
    }
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
    try {
      const url = req.body;
      url.shortLink = nanoid(5);
      const shortenLink = new ShortenLink(url);
      await shortenLink.save();
      res.send(shortenLink);
    } catch (e) {
      res.status(400).send(e);
    }
});


module.exports = router;