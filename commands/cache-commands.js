module.exports.cacheCommands = function () {
	try {
		const fs = require('fs');

		const folders = fs.readdirSync("./commands");

		const commandsToCache = [];
		for (let i = 0; i < folders.length; i++) {
			if (!folders[i].includes(".")) {
				const tempFileBuffer = fs.readdirSync(`./commands/${folders[i]}`);

				const fileCacheLengthBuffer = commandsToCache.length;
				for (let j = 0; j < tempFileBuffer.length; j++) {

					const commandSource = require(`./${folders[i]}/${tempFileBuffer[j]}`);
					const commandToCache = { name: commandSource.command.name, description: commandSource.command.description, command_level: commandSource.command.command_level, special_message_check: commandSource.command.special_message_check, responds_to: commandSource.command.respods_to, source: `./${folders[i]}/${tempFileBuffer[j]}`, required_perms: commandSource.command.permission_required, requires_prefix: commandSource.command.require_prefix }

					commandsToCache[fileCacheLengthBuffer + j] = commandToCache;
				}
			}
		}

		fs.writeFileSync("./commands/commandIndex.json", `{ "commands":${JSON.stringify(commandsToCache)} }`);
		return true;
	}
	catch (err) { console.log(err); return err; }
}