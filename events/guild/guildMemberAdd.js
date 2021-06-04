module.exports = (Discord,client,guildMember) =>{

    
    const channel = client.channels.cache.get('849771256651841556');
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#FFFAFA')
        .setTitle('\tWelcome to Sunrider , we are glad to have you here')
        .setImage('https://cdn.discordapp.com/attachments/849297968900603924/849721620989607996/welcome.gif')
        .setDescription('Read the information below to make your experience easier\n\n<a:coracao:849718652076818453> <#849767219642236958>  This is the place where you can learn mostly about what the server is about\n\n <a:coracao:849718652076818453> <#849765941725626429> Please make sure to read all the rules and abide by them to stay out of problem \n\n <a:coracao:849718652076818453> <#849768277639168010> Grab some roles to give some information about you and separe yourself from normal members');

    channel.send(`꒰ ${guildMember.user} ꒱ welcome to Sunrider ↷ ⋯`);
    channel.send(welcomeEmbed);

    guildMember.roles.add(guildMember.guild.roles.cache.get('849954513216340018'));
}