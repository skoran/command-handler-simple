////////////// You must do: npm init

const Discord = require("discord.js"); /// npm i install discord.js

const client = new Discord.Client();///////Defines client

const config = require("./config.json"); ////You need to open a file named config.json

const fs = require('fs'); /// npm i fs

const ms = require('ms'); /// npm i ms


client.on("ready", () => {
    console.log(`the bot is ready!`);
    client.user.setActivity(`The status of the bot`);
})


///////////////////command handler
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(`./commands/`).filter(File => File.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//////////////////command handler


client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();



    if (command === "ping") { ////You need to open a file named: ping.js inside the commands folder
        client.commands.get('ping').execute(message, args);
    }

    if (command === "command name") { ///The name of the command
        client.commands.get('file name | commands/...').execute(message, args); //// The name of the file in the commands folder
    }


});

client.login(config.token);
