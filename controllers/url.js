const shortid = require('shortid');
const Url = require('../models/url');

async function handleGenerateNewShortUrl(req, res) {
const body = req.body;
if(!body.url) return res.status(400).json({error: 'URL is required'});

const shortID = shortid();

    await Url.create({
        shortID: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });
    return res.json({id : shortID});
}

async function handleGetAnalytics(req, res) {
    const shortID = req.params.shortID;
    const result = await Url.findOne({shortID});
    return res.json({totalVisits: result.visitHistory.length, visitHistory: result.visitHistory});
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics,
};
