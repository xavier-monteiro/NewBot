module.exports = 
{
    name: 'age',
    aliases: [],
    description: '',
   execute(client,message,args,Discord)
    {

        if(message.author.id != '353968936838234114')
        return message.reply("only the owner can use this command");

        const catEmbed = new Discord.MessageEmbed()
        .setColor('#5ccddb')
        .setTitle('React to get your age role')
        .setImage('https://cdn.discordapp.com/attachments/848931826919014401/848940528220635146/age.png');

        message.channel.send(catEmbed);

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#5ccddb')
        .setThumbnail('https://emoji.discord.st/emojis/de595f08-69d3-4a30-acdb-bce35aa7ddb0.gif')
        .setDescription('<a:3469_Letter_A:846835771846426675> <a:2548_Letter_G:846835772246065212> <a:8668_Letter_E:846835772278571048>\n\n↷ <a:green:849309163569020989> •⁀➷ <@&849783338289594399>\n↷ <a:blue:849309161463218216> •⁀➷ <@&849783450411335750>\n↷ <a:pink:849309162898718830> •⁀➷ <@&849783495589232660>\n↷ <a:purple:849309162169303090> •⁀➷<@&849783570448646186>')

        message.channel.send(newEmbed);
   
    }
}