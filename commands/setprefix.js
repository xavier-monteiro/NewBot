const guildPrefix = require('../DBModels/GuildPrefix')

module.exports = 
{
    name: 'setprefix',
    aliases: ['set','setp'],
    description: 'sets the prefix of the guild',
 async execute(client,message,args,Discord)
    {
        console.log(message.author.id);
        console.log(message.guild.owner.id);
        console.log(message.author.username);
       if(message.author.id != message.guild.owner.id)
       {
           return message.channel.send("Only the owner of the guild can change the prefix");
       } 

       let prefix = args[0];

       if(prefix.length>3)
       {
           return message.channel.send("Prefix must be 1 to 3 characters");
       } else {

         let data = await guildPrefix.findOne({GuildID: message.guild.id});

         if(data)
         {
             data.Prefix = prefix;
             data.save();
         } else 
         {
             let newData = new guildPrefix({
                 GuildID: message.guild.id,
                 GuildName: message.guild.name,
                 OwnerID: message.guild.owner.id,
                 OwnerName: message.author.username,
                 Prefix: prefix
             })
             newData.save();
         }

         message.channel.send(`The prefix is now ${prefix}`);

       }
   
    }
}