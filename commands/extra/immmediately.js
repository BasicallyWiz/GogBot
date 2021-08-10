module.exports.immediately = function(msg) {
    if (msg.content === "immediately. <:gogserious:831917700850384896>") {
        msg.react("831979949036273715");
    }
    else {
        msg.delete();
    }
}