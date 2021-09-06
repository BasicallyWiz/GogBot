module.exports.determinePrefix = function (requires, level/*, guild_id*/) {
	if (!requires) { return ""; }
	else {
		switch (level) {
			case 0:
				{
					return "g!";
				}
				break;
			case 1:
				{
					return "g@";
				}
				break;
			case 2:
				{
					return "g#";
				}
				break;
		}
	}
}