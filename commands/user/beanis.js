const { gogCommand } = require("../command");

const command = new gogCommand();

command.name = "beanis";
command.description = "<:sad:871901584576094249>";
command.responds_to = "beanis";
command.special_message_check = true;

command.customCheck = function (msg, client) {
	if (msg.content.includes("beanis")) {
		this.executeCommand(msg, client);
	}
}

command.commandCode = function (msg, client) {
	msg.channel.send("<:sad:871901584576094249>");
}

module.exports.command = command;