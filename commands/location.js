module.exports = 
{
    name: 'location',
    aliases: [],
    description: '',
   execute(client,message,args,Discord)
    {

        if(message.author.id != '353968936838234114')
        return message.reply("only the owner can use this command");

        const catEmbed = new Discord.MessageEmbed()
        .setColor('#eaa2c1')
        .setTitle('\tReact to get your location role')
        .setImage('https://cdn.discordapp.com/attachments/848931826919014401/848985627302559754/location.png');

        message.channel.send(catEmbed);

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#eaa2c1')
        .setThumbnail('https://emoji.discord.st/emojis/f1e6b317-6ffe-40e4-9af8-117d36636c6f.gif')
        .setDescription('<a:6141_Letter_L:849289321705373727> <a:3539_Letter_O:849289321999630356> <a:6736_Letter_C:849289322092036100> <a:3469_Letter_A:846835771846426675> <a:6198_Letter_T:849289322108813342> <a:6547_Letter_I:849289322049830973> <a:3539_Letter_O:849289321999630356> <a:8760_Letter_N:847206743364730942> \n\n <a:green:849309163569020989>•⁀➷ <@&849785187595452476> \n <a:blue:849309161463218216>•⁀➷ <@&849785483948326922> \n <a:pink:849309162898718830>•⁀➷ <@&849785557813952512>\n <a:purple:849309162169303090>•⁀➷ <@&849785594246070322> \n <a:yellow:849309162382819328>•⁀➷ <@&849785636013211668> \n <a:black:849309160867758080>•⁀➷ <@&849785746273337394>')

        message.channel.send(newEmbed);
   
    }
}