const { gogCommand } = require("../command");

var command = new gogCommand();

command.name = "muck";
command.description = "GET ON MUCK <:RAGE:831654294663069707>";
command.responds_to = "muck";
command.special_message_check = true;
command.require_prefix = false;

command.customCheck = function (msg, client) {
  if (msg.content.includes("muck")) {
    this.commandCode(msg, client);
  }
}

command.commandCode = function (msg, client) {
  msg.channel.send("GET THE MUCK ON MUCK https://store.steampowered.com/app/1625450/Muck/");
}

module.exports.command = command;