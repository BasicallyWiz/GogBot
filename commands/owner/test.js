const { gogCommand } = require("../command");

const command = new gogCommand();

command.name = "test";
command.description = "A command to test if major components of the bot are functioning.";
command.responds_to = "test";
command.command_level = 2;
command.accepts_interaction = true;
command.interaction_args = [
	{
		"name": "animal",
		"description": "The type of animal",
		"type": 3,
		"required": true,
		"choices": [
			{
				"name": "Dog",
				"value": "animal_dog"
			},
			{
				"name": "Cat",
				"value": "animal_cat"
			},
			{
				"name": "Penguin",
				"value": "animal_penguin"
			}
		]
	},
	{
		"name": "only_smol",
		"description": "Whether to show only baby animals",
		"type": 5,
		"required": false
	}
];

command.interaction = function (interaction, client) {
	console.log(interaction);

	if (interaction.member.user.id == "324588568951390220") {
		console.log(JSON.stringify(interaction.options.get("animal", true).value));

		var returnMessage = `The command succeeded. Returned with: ${interaction.options.get("animal", true).value}`;

		if (interaction.options.get("only_smol")) {
			returnMessage += `, and "only_smol" is: ${interaction.options.get("only_smol").value}`;
		}

		interaction.reply({
			content: returnMessage
		});
	} else {
		interaction.reply({
			content: "You do not have access to these commands.",
			ephemeral: true
		});
	}
}

command.commandCode = function (msg, client) {
	msg.channel.send(`Test succeeded.`);
}

module.exports.command = command;