const fs = require('fs');
const { Participant } = require("./Classes/participant");

module.exports.goggryGames = {

  start: function (interaction, client) {

    //  INITIALIZATION
    //  Register Participants
    const participantString = interaction.options.get("participants", true).value;
    const participantSringArrayBuffer = participantString.split(',');

    for (let i = 0; i < participantSringArrayBuffer.length; i++) {
      Participant.participants[Participant.participants.length] = new Participant(participantSringArrayBuffer[i]);
    }

    //  Register Items
    console.log(fs.readdirSync("./modules/goggry-games/Items"));

    //  Locations

  }


}