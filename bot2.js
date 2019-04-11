console.log('The bot is actualy starting');

var Twit = require('twit');

var config = require('./config');

// console.log(config); -> To displays ids and passwords

var T = new Twit(config);

tweetIt();

function tweetIt() {
  var tweet = {
    status: 'Hello world from node.js'
  }
  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log('Problems !');
    }
    else {
      console.log('It\'s ok !');
    }
  }
}