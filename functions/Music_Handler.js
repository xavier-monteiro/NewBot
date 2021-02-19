
const {YTSearcher} = require('ytsearcher');

const searcher = new YTSearcher({
    //its a string but i have process.... because i use heroku and put the values there for safety reasons (this code is public in github)
    key: process.env.youtube_api,
      
    revealed: true
});

const queue = new Map();

module.exports.queue = queue;
module.exports.searcher = searcher;