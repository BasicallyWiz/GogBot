const { howManyGuilds } = require("../commands/user/how-many-guilds")

module.exports.startupInfo = function (client) {
	console.log(howManyGuilds(client));
}