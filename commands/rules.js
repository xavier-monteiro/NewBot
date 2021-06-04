module.exports = 
{
    name: 'rules',
    aliases: [],
    description: '',
   execute(client,message,args,Discord)
    {

        if(message.author.id != '353968936838234114')
        return message.reply("only the owner can use this command");

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f2ab28')
        .setDescription('<a:6939_Letter_R:847206743082663976> <a:4094_Letter_U:849297198867808276> <a:6141_Letter_L:849289321705373727> <a:8668_Letter_E:846835772278571048> <a:7922_Letter_S:847206743104159784>  \n\n ')
        .addField("**1) Respect the discord terms of service and guidelines should be followed.**","[Terms of Service](https://discord.com/terms) [Guidelines](https://discord.com/guidelines)")
        .addField("**2) Please be respectful to the staff and everyone else in the server.**","Joking is fine but please avoid harassing bullying, or involving in hate speech towards other members")
        .addField("**3) Spamming of any form is not allowed.**","Spamming anywhere besides <#849775124613824523> is not allowed and will result in a mute or ban")
        .addField("**4) Any NSFW content is not wanted in the server.**","Send in dms or ban")
        .setImage('https://cdn.discordapp.com/attachments/848931826919014401/849286630979272744/rules.png');
        message.channel.send(newEmbed);
   
    }
}