module.exports.deleteMessage = function(msg, client) {
    try {
        const msgSplit = msg.content.split(" ");

        
    }
    catch (err) { msg.channel.send(`The formatting for this command is: "gog@delete message-id"\nYou can ignore the rest of this message.\n${err}`); }
}