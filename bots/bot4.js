console.log('The bot is actualy starting');

var Twit = require('twit');
var tweets = [];
var config = require('../config');

// console.log(config); -> To displays ids and passwords

var T = new Twit(config);


// T.get('search/tweets', { q: '@MacArthurRobot', count: 100 }, function (err, data, response) {
//   var tweets = data.id_str;
//   console.log(tweets)
// }
// );

T.get('search/tweets', { q: '@MacArthurRobot', count: 100 }, function (err, data, response) {
  T.post('statuses/retweet/:id', { id: '' }, function (err, data, response) {
    console.log(data)
  })
})
for (let i = 0; i < ids.length; i++) {

}

