console.log('The bot is actualy starting');

var Twit = require('twit');

var config = require('./config');

// console.log(config); -> To displays ids and passwords

var T = new Twit(config);

var params = {
  q: 'banana since:2011-07-11',
  count: 100
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (let i = 0; i < tweets.length; i++) {
    console.log(tweets[i].text)
  }
};