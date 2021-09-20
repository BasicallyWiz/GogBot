/**
 * @param {boolean} requires Passed to determine if the command requires a prefix
 * @param {number} level A num between 0 and 2 to determine the expected user rank.
 * 0 = User
 * 1 = Mod / Admin
 * 2 = Bot Owner
 */

module.exports.determinePrefix = function (requires, level/*, guild_id || Can be implemented if commands are to be enabled and disabled per server*/) {
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