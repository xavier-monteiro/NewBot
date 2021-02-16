const Discord = require("discord.js");

const client = new Discord.Client({partials: ["MESSAGE","CHANNEL","REACTION"]});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler','event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client,Discord);
})

client.login('NzcxMTQzNzI5NjQ5OTQyNjAw.X5n1kA.lzmCNLxP4xpDNh5oqz1XBs3GzTE');
