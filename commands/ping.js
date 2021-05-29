module.exports = {
    name: "ping", ///The name of the command
    description: "this is a ping command",
    execute(message, args) {

        message.channel.send('pong!')////Sends in channel
    }
}