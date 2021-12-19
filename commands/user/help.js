//#region	File Require()s
const Discord = require('discord.js');
const fs = require('fs');
const { determinePrefix } = require('../../modules/determine-prefix');
//#endregion

//#region Set up command / variables
const { gogCommand } = require("../command");
const command = new gogCommand();

command.name = "help";
command.description = "Command used to bring up the help dialogue.";
command.responds_to = "help";
command.require_prefix = true;
command.special_message_check = true;
command.accepts_interaction = true;
command.interaction_args = [
	{
		"name": "rank",
		"description": "The type of animal",
		"type": 3,
		"required": true,
		"choices": [
			{
				"name": "User",
				"value": "rank_user"
			},
			{
				"name": "Mod",
				"value": "rank_mod"
			},
			{
				"name": "Owner",
				"value": "rank_owner"
			}
		]
	}
];
//#endregion

command.customCheck = function (msg, client) {

	if (msg.content.startsWith("g!help")) {

		userHelp(msg, client);

		return true;
	}
	else if (msg.content.startsWith("g@help")) {

		adminHelp(msg, client);
		return true;
	}
	else if (msg.content.startsWith("g#help")) {

		ownerHelp(msg, client);
		return true;
	}
}

command.interaction = function (interaction, client) {

	const commandJson = fs.readFileSync("./commands/commandIndex.json");
	const parsedJson = JSON.parse(commandJson);

	let commandHelpNames = [];
	let modBugWorkaround = 0;

	for (var i = 0; i < parsedJson.commands.length; i++) {

		switch (interaction.options.get("rank", true).value) {
			case "rank_user":
				{
					if (parsedJson.commands[i].command_level == 0 && parsedJson.commands[i].accepts_interaction) {
						commandHelpNames[commandHelpNames.length] = `${commandHelpNames.length + 1}. **${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
						//console.log(commandHelpNames);
					}
					else if (parsedJson.commands[i].command_level == 0) {
						commandHelpNames[commandHelpNames.length] = `${commandHelpNames.length + 1}. **${determinePrefix(parsedJson.commands[i].requires_prefix, parsedJson.commands[i].command_level)}${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
					}
				}
				break;

			case "rank_mod":
				{
					interaction.reply({ content: "To avoid crashing, this command has been disabled, as gogbot has no Admin commands.", etherial: true });
					return true;
					/*
					modBugWorkaround = 1;
					if (parsedJson.commands[i].command_level == 1 && parsedJson.commands[i].accepts_interaction) {
						commandHelpNames[commandHelpNames.length] = `${commandHelpNames.length + 1}. **${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
						//console.log(commandHelpNames);
					}
					else if (parsedJson.commands[i].command_level == 1) {
						commandHelpNames[commandHelpNames.length] = `${commandHelpNames.length + 1}. **${determinePrefix(parsedJson.commands[i].requires_prefix, parsedJson.commands[i].command_level)}${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
					}
					*/
				}
				break;

			case "rank_owner":
				{
					if (parsedJson.commands[i].command_level == 2 && parsedJson.commands[i].accepts_interaction) {
						commandHelpNames[commandHelpNames.length] = `${commandHelpNames.length + 1}. **${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
						//console.log(commandHelpNames);
					}
					else if (parsedJson.commands[i].command_level == 2) {
						commandHelpNames[commandHelpNames.length] = `${commandHelpNames.length + 1}. **${determinePrefix(parsedJson.commands[i].requires_prefix, parsedJson.commands[i].command_level)}${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
					}
				}
				break;
		}
		
	}

	const embed = new Discord.MessageEmbed();

	embed.fields = [{ name: "Commands:", value: "", inline: false }];

	embed.author = interaction.member.user.username;
	embed.title = "GogBot Help Menu";

	for (var i = 0; i < commandHelpNames.length; i++) {

		embed.fields[0].value = embed.fields[0].value + commandHelpNames[i] + "\n";
	}


	interaction.reply({ embeds: [embed] });
}

function userHelp(msg, client) {

	const commandJson = fs.readFileSync("./commands/commandIndex.json");
	const parsedJson = JSON.parse(commandJson);

	const commandHelpNames = [];


	for (var i = 0; i < parsedJson.commands.length; i++) {

		if (parsedJson.commands[i].command_level == 0 && !parsedJson.commands[i].interaction_only) {
			commandHelpNames[commandHelpNames.length] = `${commandHelpNames.length + 1}. **${determinePrefix(parsedJson.commands[i].requires_prefix, parsedJson.commands[i].command_level)}${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
		}
	}

	const embed = new Discord.MessageEmbed();

	embed.fields = [/*{ name: "name", value: "yeet", inline: true }, { name: "", value: "value", inline: true },*/ { name: "Commands:", value: "", inline: false }];

	embed.color = msg.member.displayColor;
	embed.author = msg.member.displayName;
	embed.title = "GogBot Help Menu";
	//embed.url = "https://github.com/BasicallyWiz/GogBot/";
	//embed.description = "Description";

	for (var i = 0; i < commandHelpNames.length; i++) {

		embed.fields[0].value = embed.fields[0].value + commandHelpNames[i] + "\n"
	}

	msg.channel.send({embeds: [embed]});
}

function adminHelp(msg, client) {
	msg.reply({ content: "There are no admin commands", etherial: true });
	return true;
	/*
	const commandJson = fs.readFileSync("./commands/commandIndex.json");
	const parsedJson = JSON.parse(commandJson);

	const commandHelpNames = [];


	for (var i = 0; i < parsedJson.commands.length; i++) {

		if (parsedJson.commands[i].command_level == 1 && parsedJson.commands[i].interaction_only == false) {
			commandHelpNames[commandHelpNames.length] = `**${determinePrefix(parsedJson.commands[i].requires_prefix, parsedJson.commands[i].command_level)}${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
		}
	}

	const embed = new Discord.MessageEmbed();

	embed.fields = [{ name: "Commands:", value: "", inline: false }];

	embed.title = "GogBot Help Menu";

	for (var i = 0; i < commandHelpNames.length; i++) {

		embed.fields[0].value = embed.fields[0].value + commandHelpNames[i] + "\n"
	}

	msg.channel.send({ embeds: [embed] });
	*/
}

function ownerHelp(msg, client) {
	const commandJson = fs.readFileSync("./commands/commandIndex.json");
	const parsedJson = JSON.parse(commandJson);

	const commandHelpNames = [];


	for (var i = 0; i < parsedJson.commands.length; i++) {

		if (parsedJson.commands[i].command_level == 2 && parsedJson.commands[i].interaction_only == false) {
			commandHelpNames[commandHelpNames.length] = `**${determinePrefix(parsedJson.commands[i].requires_prefix, parsedJson.commands[i].command_level)}${parsedJson.commands[i].responds_to}** | ${parsedJson.commands[i].description}`;
		}
	}

	const embed = new Discord.MessageEmbed();

	embed.fields = [/*{ name: "name", value: "yeet", inline: true }, { name: "", value: "value", inline: true },*/ { name: "Commands:", value: "", inline: false }];

	embed.title = "GogBot Help Menu";

	for (var i = 0; i < commandHelpNames.length; i++) {

		embed.fields[0].value = embed.fields[0].value + commandHelpNames[i] + "\n"
	}

	msg.channel.send({ embeds: [embed] });
}
  
module.exports.command = command;