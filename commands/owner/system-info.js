const { gogCommand } = require("../command");
const os = require("os");
const discord = require('discord.js');

var command = new gogCommand();

command.name = "System Info";
command.description = "Gets the info of the system";
command.responds_to = "sysinfo";
command.accepts_interaction = true;
command.command_level = 2;
command.interaction_args = [
  {
    "name": "is_raw",
    "description": "Whether to show data in raw JSON (Usually provides more detail)",
    "type": 5,
    "required": false
  }
];

command.commandCode = function (msg, client) {
  var embed = new discord.MessageEmbed();

  //  Main Embed
  embed.title = "OS Info";
  embed.footer = "NOTE: the slash version of this command allows the option of viewing in **raw JSON format**";

  //  Memory Status
  embed.addField('Memory Use', `${(Math.floor((os.totalmem / 1000000000) * 100) / 100) - (Math.floor((os.freemem / 1000000000) * 100) / 100)}GB / ${Math.floor((os.totalmem / 1000000000) * 100) / 100}GB (${Math.floor((os.freemem / 1000000000) * 100) / 100}GB free)`, false);

  //  CPU Cores field
  const cpus = os.cpus();
  for (var i = 0; i < cpus.length; i++) {
    embed.addField(`CPU Core ${i}`, `**Model:** ${cpus[i].model}\n**Speed:** ${cpus[i].speed}MHz`, true);
  }

  //  Operating system field
  embed.addField('Operating System', `**Uptime:** ${os.uptime}s\n**OS ArchType:** ${os.arch}\n**Platform:** ${os.platform}\n**OS Type:** ${os.type}`, false);

  msg.channel.send({embeds: [embed]});
}

module.exports.command = command;
