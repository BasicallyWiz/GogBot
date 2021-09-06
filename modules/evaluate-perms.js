module.exports.evalPerms = function (msg, requirements) {

	if (requirements.length == 0) {
		console.log("requirements empty");
		return true;
	}
	else {
		for (let i = 0; i < requirements.length; i++) {
			if (msg.member.permissions.has("ADMINISTRATOR")) {
				console.log("requirements bypassed");
				return true;
			}
			else if (msg.member.permissions.toArray().indexOf(requirements[i]) < 0) {
				console.log("requirements not met");
				msg.channel.send(`You do not have the required permissions.\npermissions required: ${requirements}`);
				return false;
			}
		}
	}
}