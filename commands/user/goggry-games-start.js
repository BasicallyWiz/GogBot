const { gogCommand } = require("../command");

var command = new gogCommand();

command.name = "goggrygames";
command.description = "Starts a game of goggry games! [NOT YET FUNCTIONING!]";
command.accepts_interaction = false;

command.commandCode = function (msg, client) {
  msg.channel.send("You cannot use this command yet. :gogSerious:");
}

module.exports.command = command;