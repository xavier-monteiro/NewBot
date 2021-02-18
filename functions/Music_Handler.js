
const {YTSearcher} = require('ytsearcher');

const searcher = new YTSearcher({
    key: process.env.youtube_api,      
    revealed: true
});

const queue = new Map();

module.exports.queue = queue;
module.exports.searcher = searcher;