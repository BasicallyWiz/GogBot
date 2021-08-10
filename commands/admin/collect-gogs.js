const fs = require('fs');
const discord = require("discord.js");

module.exports.collectGogs = function (msg, client) {

  channel = client.channels.cache.get('831612912266641408');

  channel.messages.fetch().then(messages => {
    console.log(`Received ${messages.size} messages`);
    //Iterate through the messages here with the variable "messages".
    messages.forEach(message => msg.channel.send(message.content));
  });
  
}