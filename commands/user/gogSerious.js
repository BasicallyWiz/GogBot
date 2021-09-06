const { gogCommand } = require("../command");

const command = new gogCommand();

command.name = "gogSerious";
command.description = `A function for moderating the #Immediately channel.`;
command.special_message_check = true;

command.customCheck = function (msg, client) {

	if (msg.channel.id == "884249422924505099") {
		if (msg.content === "Immediately. <:gogSerious:831917700850384896>") {
			msg.react("<:gogHappy:831979949036273715>");
		}
		else {
			msg.delete();
		}
	}
}

command.commandCode = function (msg, client) {

}

module.exports.command = command;