const { goggryGames } = require("../../modules/goggry-games/goggry-games-base");
const { gogCommand } = require("../command");

var command = new gogCommand();

command.name = "goggrygames";
command.responds_to = "goggrygames"
command.description = "Starts a game of goggry games! [NOT YET FUNCTIONING!]";
command.accepts_interaction = true;
command.interaction_only = true;

command.interaction = function (interaction, client) {
  const _gogGames = new goggryGames();
  //interaction.reply({ content: "You tried, but the description sys it all. You should play Muck instead.", ephemeral: true });
}

module.exports.command = command;