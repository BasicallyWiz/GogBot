const fs = require('fs');
const { Client, Intents } = require('discord.js');
const { cacheCommands } = require('./commands/cache-commands');
const { handleCommands } = require('./commands/handle-commands');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
	console.log("Gogbot has started up.");
});

client.on("messageCreate", msg => {
	handleCommands(msg, client);
});

cacheCommands();

client.login(fs.readFileSync('./gogbot.token', 'utf8').toString());