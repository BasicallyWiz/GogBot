module.exports.gogCommand = class {

	/**
 * @param {string} name The name of the command that'll be shown in help.
 * @param {string} description The description of the command.
 * @param {number} level A number corresponding with the level of prefix.
 * @param {string} permission_required An array of permissions required for a user to use this command. Leave empty for no requirement.
 * @param {boolean} special_message_check A bool to indicate if custom code should be run to check the command.
 * @param {string} responds_to One or more messages the command will respond to. Set to "everythings!" for the command to respond to all messages.
 * @param {boolean} allow_https A bool to describe if a command can be used via http message.
 * @param {boolean} require_prefix A bool that determines if the command will only respond if the prefix comes before it.
 *
 * @param {Function} customCheck The new check for the current command. Requires "special_message_check" to be true.
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

	customCheck(msg, client) {
		if (msg.channel.name.toLowerCase().startsWith("g")) {
			msg.channel.send("This command is executing a custom check. This custom check checks that this message is in a channel of which's name starts with 'g', and no longer depends on any other factors. When changing this, please make sure to use `executeFuction()` instead of directly going to `commandCode()` to avoid re-typing error handling code. :)");
			this.executeCommand(msg, client);
		}
	}

	executeCommand(msg, client) {
		try {
			if (!msg || !client) { console.log("Oi, mate. You forgot to include the message /or client. Reference your code with this: `executeCommand(msg, client);`"); }
			this.commandCode(msg, client);
		} catch (err) { msg.channel.send(`We've ran into a problem. Please send this to the bot owner.\nMessage: ${msg.content}\n${err}`); }
	}

	commandCode(msg, client) {
		msg.reply(`Hello, ${msg.author.name}! This command has yet to be made!`);
	}
}