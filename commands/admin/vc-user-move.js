module.exports.vcUserMove = function(msg, client, splitMsg) {
	const userToMove = msg.mentions.members.first();
	const channelToMoveTo = splitMsg[2];

	userToMove.voice.setChannel(channelToMoveTo).then(msg.channel.send("I just moved <@" + userToMove + "> to <#" + channelToMoveTo + ">"));
}