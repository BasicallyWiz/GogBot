module.exports.gogCommand = class {

	/**
 * @param {string} name The name of the command that'll be shown in help.
 * @param {string} description The description of the command.
 * @param {number} level A number corresponding with the level of prefix.
 * @param {string} permission_required An array of permissions required for a user to use this command. Leave empty for no requirement.
 * @param {Function} special_message_check A bool to indicate if custom code should be run to check the command.
 * @param {string} responds_to One or more messages the command will respond to. Set to "everythings!" for the command to respond to all messages.
 * @param {boolean} allow_https A bool to describe if a command can be used via http message.
 * @param {boolean} require_prefix A bool that determines if the command will only respond if the prefix comes before it.
 * @param {boolean} is_priority Bool that determines if this command is to be checked first, and if true, stops command checking.
 * @param {boolean} accepts_interaction Bool that determines if the command should be considered while checking interactions.
 * @param {boolean} customCheck The new check for the current command. Requires "special_message_check" to be true.
 * @param {Function} interaction The processor for when this command is used as a slash command.
	*/

	constructor() {

	}

	name = "New command!";
	description = "This is a new command I just made, and it looks like I haven't set anything.";
	command_level = 0;
	permission_required = [];
	special_message_check = false;
	responds_to = "new_command";
	allow_https = false;
	require_prefix = true;
	is_priority = false;
	accepts_interaction = false;
	interaction_args = [];
	message_components = [];

	customCheck(msg, client) {
		var thing1 = false;
		if (msg.channel.name.toLowerCase().startsWith("g")) {
			msg.channel.send("This command is executing a custom check. This custom check checks that this message is in a channel of which's name starts with 'g', and no longer depends on any other factors. When changing this, please make sure to use `executeFuction()` instead of directly going to `commandCode()` to avoid re-typing error handling code. :)");
			thing1 = this.executeCommand(msg, client);
			if (thing1 === false) {
				return false;
			}
			else {
				return true;
			}
		}
	}

	executeCommand(msg, client) {
		try {
			var thing2 = false;
			if (!msg || !client) { console.log("Oi, mate. You forgot to include the message /or client. Reference your code with this: `executeCommand(msg, client);`"); }
			thing2 = this.commandCode(msg, client);
			if (thing2 == true) { return true; }
		} catch (err) { msg.channel.send(`We've ran into a problem. Please send this to the bot owner.\nMessage: ${msg.content}\n${err}`); }
	}

	commandCode(msg, client) {
		msg.reply(`Hello, ${msg.author.name}! This command has yet to be made!`);
		return true;
	}

	interaction(interaction, client) {

		interaction.reply({
			content: "Default Behaviour."
		});
	}
}