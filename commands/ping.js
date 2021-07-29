module.exports = {
    name: "ping", ///The name of the command
    description: "this is a ping command",
    async execute(message, args, client) {

        message.channel.send('pong!')////Sends in channel
    }
}
