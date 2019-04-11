console.log('The bot3 is actualy starting');

var Twit = require('twit');

var config = require('../config');

var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg) {
  var name = eventMsg.source.name; $
  var screenName = event.Msg.source.screen_name;
  tweetIt('@' + screenName + 'Hey how are you ? Welcome on my Twitter account');
}


function tweetIt(text) {

  var tweet = {
    status: text
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