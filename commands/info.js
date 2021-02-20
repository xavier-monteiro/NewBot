module.exports = 
{
    name: 'info',
    aliases: ['i'],
    description: 'shows info about the bot',
    execute(client,message,args,Discord)
    {
        let owner = client.users.cache.get('353968936838234114');

        let totalSeconds = (client.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        totalSeconds %= 86400;
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);

        let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

        var InfoEmbed = new Discord.MessageEmbed()
                .setAuthor(client.user.username, client.user.displayAvatarURL(),'')
                .setDescription("Bot was created on: 28 October but was remastered in early February")
                .addField("Uptime: ",uptime,true)
                .addField("Support server: ","[Server](https://discord.gg/4XMUredjrG)")
                .addField("Add me to your server: ","[Sola BOT](https://discordapp.com/oauth2/authorize?client_id=771143729649942600&scope=bot&permissions=8)")
                .addField("Owner: ", owner.username+'#'+owner.discriminator)
                .setColor("PURPLE")
        
           message.channel.send(InfoEmbed);
   
    }
}