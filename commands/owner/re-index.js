const { cacheCommands } = require("../cache-commands");
const { gogCommand } = require("../command");
const fs = require('fs');

const command = new gogCommand();

command.name = "Re-Index";
command.description = "Re-indexes the command list.";
command.responds_to = "reindex";
command.command_level = 2;

command.commandCode = function (msg, client) {

	//msg.channel.send("Deleting require() list...");
	
	msg.channel.send("Attempting to re-index command list.");

	hr = cacheCommands();

	if (hr === true) {
		msg.channel.send("The list of commands were re-indexed.");
	}
	else {
		msg.channel.send(`Something went wrong, and re-indexing did something unusual. (This usually indicates a failure.)\nMore info: ${hr}`);
	}
}

module.exports.command = command;