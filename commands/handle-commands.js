
module.exports.handleCommands = function (msg, client) {
	try {
		if (!msg.author.bot) {
			const { evalPerms } = require('../modules/evaluate-perms');
			const fs = require('fs');
			const { determinePrefix } = require('../modules/determine-prefix');
			const commandsIndex = fs.readFileSync("./commands/commandIndex.json", "utf-8");
			const parsedIndex = JSON.parse(commandsIndex);

			var succeeded;
			for (let i = 0; i < parsedIndex.commands.length; i++) {
				if (parsedIndex.commands[i].special_message_check) {
					const specialCommand = require(parsedIndex.commands[i].source);
					specialCommand.command.customCheck(msg, client)
				}
				else if (msg.content.toLowerCase() === `${determinePrefix(parsedIndex.commands[i].requires_prefix, parsedIndex.commands[i].command_level)}${parsedIndex.commands[i].responds_to}`) {
					succeeded = true;
					if (determinePrefix(parsedIndex.commands[i].requires_prefix, parsedIndex.commands[i].command_level) == "g#" && msg.author.id != "324588568951390220") { msg.channel.send("You cannot use bot owner commands. Try something lower level like 'g!'"); }
					if (evalPerms(msg, parsedIndex.commands[i].required_perms)) {

						const commandToExecute = require(parsedIndex.commands[i].source);
						commandToExecute.command.executeCommand(msg, client);
						break;
					}
				}
			}
			if (msg.content.startsWith("g!") && !succeeded) {
				msg.channel.send("This monkey isn't speaking monkey. For help, say: \"g!help\"");
			}
			else if (msg.content.startsWith("g@") && !succeeded) {
				msg.channel.send("This monkey isn't speaking monkey. For help, say: \"g@help\"");
			}
			else if (msg.content.startsWith("g#") && !succeeded) {
				msg.channel.send("This monkey isn't speaking monkey. For help, say: \"g#help\"");
			}
		}
	} catch (err) { console.log(err); }
}