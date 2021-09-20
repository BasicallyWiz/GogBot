const { gogCommand } = require("../command");

const command = new gogCommand();

command.name = "gogSerious";
command.description = "Script used to moderate <#831973302972055615>.";
command.responds_to = "gogSerious";
command.require_prefix = false;
command.special_message_check = true;

command.customCheck = function (msg, client) {

	if (msg.channel.id == "831973302972055615") {
		if (msg.content === "Immediately. <:gogSerious:831917700850384896>") {
			msg.react("<:gogHappy:831979949036273715>");
		}
		else {
			msg.delete();
		}
		return true;
	}
}

command.commandCode = function (msg, client) {

}

module.exports.command = command;