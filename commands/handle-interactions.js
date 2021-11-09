module.exports.handleInteractions = {

	handle: function(interaction, client) {
		const fs = require('fs');

		console.log(interaction);

		const indexJson = fs.readFileSync("./commands/commandIndex.json");
		const indexParsed = JSON.parse(indexJson);
		const succeeded = false;

		for (var i = 0; i < indexParsed.commands.length; i++) {

			if (interaction.commandName == indexParsed.commands[i].responds_to) {

				const command = require(indexParsed.commands[i].source);

				command.command.interaction(interaction, client);
			}
		}
	},

	setup: function (client) {
		//	Imports
		const fs = require('fs');
		const token = fs.readFileSync('./gogbot.token', 'utf8').toString();
		const { REST } = require('@discordjs/rest');
		const { Routes } = require('discord-api-types/v9');
		const indexJson = fs.readFileSync("./commands/commandIndex.json");
			const indexParsed = JSON.parse(indexJson);

		//	Actual process
		var commands = [{ name: "", description: "", options: []}];
		var commandCount = 0;
		for (let i = 0; i < indexParsed.commands.length; i++) {
			if (indexParsed.commands[i].accepts_interaction) {
				commands[commandCount] = { name: indexParsed.commands[i].responds_to, description: indexParsed.commands[i].description, options: indexParsed.commands[i].interaction_args };

				commandCount++;
			}
		}

		const rest = new REST({ version: '9' }).setToken(token);

		(async () => {
			try {
				console.log(`Started refreshing application (/) commands.`);

				if (client.user.id == "851521246457495622") {
					await rest.put(
						Routes.applicationCommands(client.user.id, "603162720199639061"),
						{ body: commands },
					);
				} else if (client.user.id == "876318869294317579") {
					await rest.put(
						Routes.applicationGuildCommands(client.user.id, "603162720199639061"),
						{ body: commands },
					);
        }

				console.log('Successfully reloaded application (/) commands.');
			} catch (error) {
				console.error(error);
			}
		})();
	}
}