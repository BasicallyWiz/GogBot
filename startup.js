const fs = require('fs');
const { Client, Intents } = require('discord.js');
const { cacheCommands } = require('./commands/cache-commands');
const { handleCommands } = require('./commands/handle-commands');
const { handleInteractions } = require('./commands/handle-interactions');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = fs.readFileSync('./gogbot.token', 'utf8').toString();

client.once('ready', () => {
  console.log("Gogbot has started up.");

	handleInteractions.setup(client);
});

client.on("messageCreate", msg => {
	handleCommands(msg, client);
});

client.on('interactionCreate', interaction => {
	handleInteractions.handle(interaction, client);
});

cacheCommands();

client.login(token);