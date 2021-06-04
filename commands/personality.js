module.exports = 
{
    name: 'personality',
    aliases: [],
    description: '',
   execute(client,message,args,Discord)
    {

        if(message.author.id != '353968936838234114')
        return message.reply("only the owner can use this command");

        const catEmbed = new Discord.MessageEmbed()
        .setColor('#f2ab28')
        .setTitle('\tReact to get your personality role')
        .setImage('https://cdn.discordapp.com/attachments/848931826919014401/848945621851045908/personality.png');

        message.channel.send(catEmbed);

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#f2ab28')
        .setThumbnail('https://emoji.discord.st/emojis/9e21f678-9c51-4c71-90a6-620410e6ff1f.gif')
        .setDescription('<a:4148_Letter_P:849295862810804310> <a:8668_Letter_E:846835772278571048> <a:6939_Letter_R:847206743082663976> <a:7922_Letter_S:847206743104159784> <a:3539_Letter_O:849289321999630356> <a:8760_Letter_N:847206743364730942> <a:3469_Letter_A:846835771846426675> <a:6141_Letter_L:849289321705373727> <a:6547_Letter_I:849289322049830973> <a:6198_Letter_T:849289322108813342> <a:9275_Letter_Y:849296243268124732>\n\n↷ <a:green:849309163569020989> •⁀➷ <@&849784280753635398>\n↷ <a:blue:849309161463218216> •⁀➷ <@&849784380209233931>\n↷ <a:pink:849309162898718830> •⁀➷ <@&849784439764549633> \n↷ <a:purple:849309162169303090> •⁀➷ <@&849784508311928832> \n↷ <a:yellow:849309162382819328> •⁀➷ <@&849784576104857610> \n↷ <a:black:849309160867758080> •⁀➷ <@&849784645494374430> \n↷ <a:coracao:849718652076818453> •⁀➷ <@&849784719558443039> \n↷ <a:butterfly:849790487703191583> •⁀➷ <@&849784770414379058> \n↷ <a:butterflys:849790515628998666> •⁀➷ <@&849784830941462550>')

        message.channel.send(newEmbed);
   
    }
}