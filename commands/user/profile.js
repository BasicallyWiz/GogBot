const { gogCommand } = require("../command");
const Canvas = require('canvas')
const fs = require("fs");
const discord = require("discord.js");

var command = new gogCommand();

command.name = "profile";
command.description = "Displays your GogBot profile, among other things.";
command.accepts_interaction = true;
command.interaction_only = true;
command.responds_to = "profile";

command.interaction_args = [
  {
    "name": "action",
    "description": "Profile action",
    "type": 3,
    "required": true,
    "choices": [
      {
        "name": "View",
        "value": "profile_view"
      },
      {
        "name": "Signup",
        "value": "profile_signup"
      },
      {
        "name": "Settings",
        "value": "profile_settings"
      }
    ]
  }
]

command.interaction = function (interaction, client) {
  const actionValue = interaction.options.get("action", true).value;

  switch (actionValue) {
    case "profile_view": {

      (async () => {

        const canvas = Canvas.createCanvas(700, 250);
        const context = canvas.getContext('2d');

        const background = await Canvas.loadImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FD9DwytZXYAAXgSg.jpg%3Alarge&f=1&nofb=1');

        // This uses the canvas dimensions to stretch the image onto the entire canvas
        context.drawImage(background, 0, 0, canvas.width, canvas.height);

        // Use the helpful Attachment class structure to process the file for you
        const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'profile-image.png');

        interaction.reply({ files: [attachment] });
      })()

      //const profileData = fs.readFileSync("./modules/profiles/cock.json", "utf8");
      
    }
    break;

    case "profile_signup": {

      
    }
    break;

    case "profile_settings": {

      
    }
    break;
  }
}

module.exports.command = command;