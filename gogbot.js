
const Discord = require("discord.js");
const client = new Discord.Client();

const { handleCommand } = require('./commands/command-handler.js');
const { startupInfo } = require("./gogbot-modules/startup-info.js");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!\n`);
  //startupInfo(client);
});

client.on("message", msg => { handleCommand.HandlePrefix(msg, client); });


client.login('I\'m not giving you my bot\'s id.');