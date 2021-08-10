/**
 * 
 * @param {string} msg The message that will be checked.
 * 
 */

const { collectGogs } = require("./admin/collect-gogs");
const { vcUserMove } = require("./admin/vc-user-move");
const { immediately } = require("./extra/immmediately");
const { howManyGuilds } = require("./user/how-many-guilds");
const { helpCommand } = require("./help");
const { say } = require("./admin/say");
const { deleteMessage } = require("./admin/delete-message");


try {
	module.exports.handleCommand = {

		HandlePrefix: function (msg, client) {
			if (msg.channel.type != "text" && msg.author.id != client.user.id) { msg.channel.send(`You cannot use commands in a channel type of: ${msg.channel.type}.\nMaybe in the future.`) }

			msg.content = msg.content.toLowerCase();


			if (msg.channel.id === "831973302972055615") {
				immediately(msg);
			}
			else if (msg.mentions.has(client.user.id)) {
				msg.channel.send("My prfix is: 'gog!'\nMaybe try 'gog!help'")
			}
			else if (msg.content === "<:insanity:861168501706981396>") {
				msg.react("861168501706981396")
			}
			else if (msg.content === "gog") {
				msg.react("842852990422351893")
			}
			else if (msg.content.includes("beanis")) { msg.channel.send("<:insanity:861168501706981396>")}
			else if (msg.content.startsWith("g!") || msg.content.startsWith("gog!")) {
				this.UserCommand(msg, client);
			}
			else if (msg.content.startsWith("g@") || msg.content.startsWith("gog@")) {
				if (msg.member.hasPermission("ADMINISTRATOR") || msg.member.id == "324588568951390220") { this.AdminCommand(msg, client); } else { msg.channel.send("You require Admin permisions to use g@ commands. (or be dev)"); return 0; }

			}
			else if (msg.content.startsWith("g#") || msg.content.startsWith("gog#")) {
				if (msg.author.id === '324588568951390220') { this.OwnerCommand(msg, client); } else { msg.channel.send("To use g# commands, you must be the bot's owner."); return 0; }
			}
		},

		UserCommand: function (msg, client) {		// USER COMMANDS
			if (msg.content.startsWith("g!")) { msg.content = msg.content.replace("g!", ""); } else { msg.content = msg.content.replace("gog!", ""); }
			const splitMsg = msg.content.split(" ");

			switch (splitMsg[0]) {

				case "guilds":
					{
						msg.channel.send(howManyGuilds(client));
					}
					break;

				case "help":
					{
						helpCommand(msg, 0);
					}
					break;

				default:
					msg.channel.send("This monkey isn't speaking monkey. Type 'gog!help' to find commands.");
					break;
			}
		},

		AdminCommand: function (msg, client) {		// ADMIN COMMANDS
			if (msg.content.startsWith("g@")) { msg.content = msg.content.replace("g@", ""); } else { msg.content = msg.content.replace("gog@", ""); }
			const splitMsg = msg.content.split(" ");

			switch (splitMsg[0]) {

				case "help":
					{
						helpCommand(msg, 1);
					}
					break;

				case "moveuser":
					vcUserMove(msg, client, splitMsg);
					break;

				case "collectgogs":
					collectGogs(msg, client);
					break;

				case "say":
					{
						say(msg, client);
					}
					break;

				case "deletemessage":
					{
						deleteMessage(msg, client);
					}
					break;

				default:
					msg.channel.send("This monkey isn't speaking monkey. Type 'gog@help' to find commands.");
					break;
			}
		},

		OwnerCommand: function (msg, client) {		//Owner Commands
			if (msg.content.startsWith("g#")) { msg.content = msg.content.replace("g#", ""); } else { msg.content = msg.content.replace("gog#", ""); }
			const splitMsg = msg.content.split(" ");

			switch (splitMsg[0]) {

				case "help":
					{
						helpCommand(msg, 2);
					}
					break;

				default:
					{
						msg.channel.send("Wow, too stupid to use your own commands.");
						msg.channel.send("<:gogSerious:831917700850384896>");
					}
					break;
			}
		}
	}
} catch (err) { msg.channel.send(err)}