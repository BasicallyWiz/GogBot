module.exports.handleInteractions = function (interaction) {
	const fs = require('fs');
	
	console.log(interaction);

	const indexJson = fs.readFileSync("./commands/commandIndex.json");
	const indexParsed = JSON.parse(indexJson);

	
}