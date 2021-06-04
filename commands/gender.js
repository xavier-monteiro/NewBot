module.exports = 
{
    name: 'gender',
    aliases: [],
    description: '',
   execute(client,message,args,Discord)
    {

        if(message.author.id != '353968936838234114')
        return message.reply("only the owner can use this command");

        const catEmbed = new Discord.MessageEmbed()
        .setColor('#466240')
        .setTitle('\tReact to get your gender role')
        .setImage('https://cdn.discordapp.com/attachments/848931826919014401/848944954990264370/gender.png');

        message.channel.send(catEmbed);

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#466240')
        .setTitle('<a:2548_Letter_G:846835772246065212> <a:8668_Letter_E:846835772278571048> <a:8760_Letter_N:847206743364730942> <a:9614_Letter_D:847206841346949161> <a:8668_Letter_E:846835772278571048> <a:6939_Letter_R:847206743082663976>')
        .setThumbnail('https://emoji.discord.st/emojis/2f201044-328a-46fc-bb15-92a8f14c2933.gif')
        .setDescription('\n↷ <a:green:849309163569020989> •⁀➷ <@&849782691812868156>\n↷ <a:blue:849309161463218216> •⁀➷ <@&849782760175566848>\n↷ <a:pink:849309162898718830> •⁀➷ <@&849782958298497054> ')

        message.channel.send(newEmbed);
   
    }
}