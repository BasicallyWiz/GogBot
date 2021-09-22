module.exports.handleInteractions = function (interaction, client) {
	const fs = require('fs');
	
	console.log(interaction);

	const indexJson = fs.readFileSync("./commands/commandIndex.json");
	const indexParsed = JSON.parse(indexJson);
	const succeeded = false;

	for (var i = 0; i < indexParsed.commands.length; i++) {

		if (interaction.customId == indexParsed.commands[i].responds_to) {

			const command = require(indexParsed.commands[i].source);

			command.command.interaction(interaction, client);
		}

		if (interaction.commandName == indexParsed.commands[i].responds_to) {


			const command = require(indexParsed.commands[i].source);

			command.command.interaction(interaction, client);
		}
	}
}