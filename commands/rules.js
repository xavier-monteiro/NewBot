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
        .addField("**1) Respeitem os termos de serviço do Discord e as Diretrizes de Comunidade devem ser cumpridas.**","[Termos de Serviço](https://discord.com/terms) [Diretrizes da Comunidades](https://discord.com/guidelines)")
        .addField("**2) Por favor respeitem a staff e toda a gente do servidor.**","Piadas é tranquilo mas evitem assedio ou bullying ou envolver-se em discursos de ódio para com os membros")
        .addField("**3) Spammar não é permitido.**","Spammar em qualquer sitio exceto <#849775124613824523> não é permitido e irá resultar num mute ou ban")
        .addField("**4) Nehum tipo de NSFW é permitido neste servidor.**","Envia em dms ou ban")
        .setImage('https://cdn.discordapp.com/attachments/848931826919014401/849286630979272744/rules.png');
        message.channel.send(newEmbed);
   
    }
}