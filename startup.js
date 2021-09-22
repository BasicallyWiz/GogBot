const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents } = require('discord.js');
const { cacheCommands } = require('./commands/cache-commands');
const { handleCommands } = require('./commands/handle-commands');
const { handleInteractions } = require('./commands/handle-interactions');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const token = fs.readFileSync('./gogbot.token', 'utf8').toString();

client.once('ready', () => {
  console.log("Gogbot has started up.");

  const commands = [{ name: "help", description: "Shows the help menu." }];

  const rest = new REST({ version: '9' }).setToken(token);

  (async () => {
    try {
      console.log('Started refreshing application (/) commands.');

      await rest.put(
        Routes.applicationGuildCommands(client.user.id, "603162720199639061"),
        { body: commands },
      );

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
  })();
});

client.on("messageCreate", msg => {
	handleCommands(msg, client);
});

client.on('interactionCreate', interaction => {
	handleInteractions(interaction, client);
});

cacheCommands();

client.login(token);