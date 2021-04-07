const mongoose = require('mongoose');

const ShortenLinkScheme = new mongoose.Schema({
	originalLink: {
		type: String,
	},
	shortLink: {
		type: String,
		required: true,
		unique: true,
	}
});

const ShortenLink = mongoose.model('shortenLink', ShortenLinkScheme);

module.exports = ShortenLink;