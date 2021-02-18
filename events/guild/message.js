const guildPrefix = require('../../DBModels/GuildPrefix')

module.exports =async (Discord,client,message) =>{

    if(message.author.bot) return;
    var prefix;
    let data = await guildPrefix.findOne({GuildID: message.guild.id});
    if(data)
    {
        prefix = data.Prefix;
    }else 
    {
        prefix = 's.';
    }
    if(!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command)
    {
        command.execute(client,message,args,Discord);
    }

}