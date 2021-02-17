const {queue} = require('../functions/Music_Handler');

module.exports = 
{
    name: 'fskip',
    aliases: ['fs','fsk'],
    description: "skips song",
    execute(client,message,args,Discord)
    {
        const serverQueue = queue.get(message.guild.id)
    if(message.member.voice.channel != message.guild.me.voice.channel)
        return message.channel.send("You need to join the voice chat first");
    if(!serverQueue)
        return message.channel.send("There is nothing to skip!");

    try {
        let roleN = message.guild.roles.cache.find(role => role.name === "DJ")

        if(!roleN)
        return message.channel.send("DJ role doesnt exists so u cant force skip");
        else {
            if(!message.member.roles.cache.get(roleN.id))
            return message.channel.send("You don't have the DJ role");
    
        serverQueue.connection.dispatcher.end();
        serverQueue.skipVotes = [];
        }

        
    }catch(err)
    {
        console.error(err);
    }
    
   
    }
}