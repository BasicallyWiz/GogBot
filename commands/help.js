/**
 * @param {string} prefix The prefix of the given comand.
*/

const Discord = require("discord.js");

const userCommands = {

	prefix: "g!",
	commands: [
		"gog", "howmanyguilds"]
};

const adminCommands = {

		prefix: "g@",
		commands: ["gog", "moveuser", "say"]
};

const ownerCommands = {

		prefix: "g#",
		commands: ["gog"]
};


module.exports.helpCommand = function (msg, level) {

	var prefix;
	var commands;

	switch (level) {

		case 0:
			{
				prefix = userCommands.prefix;
				commands = userCommands.commands;
			}
			break;

		case 1:
			{
				prefix = adminCommands.prefix;
				commands = adminCommands.commands;
			}
			break;

		case 2:
			{
				prefix = ownerCommands.prefix;
				commands = ownerCommands.commands;
			}
			break;
	}

	const embed = new Discord.MessageEmbed();

	let message;

	for (var i = 0; i < commands.length; i++) {
		if (message == null) {
			message = "- " +commands[i] + "\n";
		}
		else {
			message =  message + "- " + commands[i] + "\n";
		}
	}

	embed.fields = [
		{
			name: "Welcome!",
			value: `This is the commands help page for "${prefix}". underneath lists possible commands.`,
			inline: true
		},
		{
			name: "Command Levels",
			value: "There are three command levels: g!, g@, and g#. each of these have a help page!",
			inline: true
		},
		{
			name: "Commands",
			value: message,
			inline: false
		}
	]

	msg.channel.send(embed);
}