const { gogCommand } = require("../command");

const command = new gogCommand();

command.name = "beanis";
command.description = "<:sad:871901584576094249>";
command.responds_to = "beanis";
command.special_message_check = true;
command.require_prefix = false;

command.customCheck = function (msg, client) {
	if (msg.content.includes("beanis")) {
		return this.executeCommand(msg, client);
	}
}

command.commandCode = function (msg, client) {
	msg.channel.send("<:sad:871901584576094249>");
	return true;
}

module.exports.command = command;