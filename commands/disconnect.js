const {queue} = require('../functions/Music_Handler');

module.exports = 
{
    name: 'disconnect',
    aliases: ['dis','stop'],
    description: "resumes song",
    execute(client,message,args,Discord)
    {
        const serverQueue = queue.get(message.guild.id)
        if(!serverQueue)
        return message.channel.send("There is no music playing!")
        if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("You need to join the voice chat first!")
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end(); 
   
    }
}