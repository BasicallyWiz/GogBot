
module.exports.say = function (msg, client) {
	const splitContent = msg.content.split("[at] ");
	splitContent[0] = splitContent[0].replace("say ", "");

	var err;

	try {
		if (splitContent[1].includes("<#") && splitContent[1].includes(">")) { splitContent[1] = splitContent[1].replace("<#", ""); splitContent[1] = splitContent[1].replace(">", ""); }
		client.channels.cache.get(splitContent[1]);
	}
	catch (thisErr) { msg.channel.send(`You input an incorrect channel id.\nThecommand is used like: 'gog@say Wiz is the gog programmer, all hail! [at] #gog'\nYou can ignore this part: ${thisErr}`); err = thisErr; }

	if (err == null) {

		client.channels.cache.get(splitContent[1]).send(splitContent[0]);
		msg.channel.send(`sent ${splitContent[0]} to <#${splitContent[1]}>`);
	}
}