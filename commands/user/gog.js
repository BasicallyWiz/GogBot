const { gogCommand } = require("../command");

const command = new gogCommand();

command.name = "gog";
command.description = "Reacts with gog emote";
command.respods_to = "gog";
command.require_prefix = false;

command.commandCode = function (msg, client) {
	msg.react("<a:gog2:842852990422351893>");
}

module.exports.command = command;