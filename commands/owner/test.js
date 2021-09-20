const { gogCommand } = require("../command");

const command = new gogCommand();

command.name = "test";
command.description = "A command to test if major components of the bot are functioning.";
command.responds_to = "test";
command.command_level = 2;


command.commandCode = function (msg, client) {
	msg.channel.send("Test succeeded.");
}

module.exports.command = command;