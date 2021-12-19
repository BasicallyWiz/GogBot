const { gogCommand } = require("../command");
const Canvas = require("canvas");
const discord = require("discord.js");

const command = new gogCommand();

command.name = "Test Canvas Image";
command.responds_to = "testcanvasimage";
command.accepts_interaction = true;

command.commandCode = function(msg, client) {

  (async () => {

    const canvas = Canvas.createCanvas(700, 250);
    const context = canvas.getContext('2d');

    const background = await Canvas.loadImage('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FD9DwytZXYAAXgSg.jpg%3Alarge&f=1&nofb=1');

    // This uses the canvas dimensions to stretch the image onto the entire canvas
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    // Use the helpful Attachment class structure to process the file for you
    const attachment = new discord.MessageAttachment(canvas.toBuffer(), 'profile-image.png');

    msg.reply({ files: [attachment] });
  })()

}

command.interaction = function (interaction, client) {
  
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
}

module.exports.command = command;