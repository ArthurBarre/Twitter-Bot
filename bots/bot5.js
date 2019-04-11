console.log('start')

var Twit = require('twit');

var config = require('../config');

// console.log(config); -> To displays ids and passwords

var T = new Twit(config);

var params = {
  q: '@MacArthurBot'
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses.id_str;
}
T.post('statuses/retweet/:id', { id: 'tweets' }, function (err, data, response) {
  if (err) {
    console.log('Problems !');
    console.log(err)
  }
  else {
    console.log('It\'s ok !');

  }
}
)