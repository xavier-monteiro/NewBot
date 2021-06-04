module.exports = 
{
    name: 'divider',
    aliases: [],
    description: '',
    execute(client,message,args,Discord)
    {
        let color = args[0];
        console.log(color);
        const catEmbed = new Discord.MessageEmbed()
        .setColor(`#${color}`)
        .setImage('https://cdn.discordapp.com/attachments/741378916551491594/826246614653075496/AS_divider.gif');

        message.channel.send(catEmbed);
   
    }
}