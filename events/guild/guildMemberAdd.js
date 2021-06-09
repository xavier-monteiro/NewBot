module.exports = (Discord,client,guildMember) =>{

    
    const channel = client.channels.cache.get('849771256651841556');
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#FFFAFA')
        .setTitle('\tBem vindo a Sunrider , estamos contentes por ter-te aqui')
        .setImage('https://cdn.discordapp.com/attachments/849297968900603924/849721620989607996/welcome.gif')
        .setDescription('Le a informação abaixo para ter uma experiencia mais tranquila no servidor\n\n<a:coracao:849718652076818453> <#849767219642236958>  Aqui tens algumas informações sobre o servidor\n\n <a:coracao:849718652076818453> <#849765941725626429> Por favor le todos as regras para evitar constrangimentos \n\n <a:coracao:849718652076818453> <#849768277639168010> Escolhe alguns cargos para dar informações sobre ti');

    channel.send(`꒰ ${guildMember.user} ꒱ welcome to Sunrider ↷ ⋯`);
    channel.send(welcomeEmbed);

    guildMember.roles.add(guildMember.guild.roles.cache.get('849954513216340018'));
}