const axios = require('axios');

module.exports = 
{
    name: 'phcomment',
    aliases: ['ph','phc','comment'],
    description: '',
    cooldown: 11,
   async execute(client,message,args,Discord)
    {
        let image = message.author.displayAvatarURL();
        let text;
        let username = message.author.username;

        if(!args[0])
        return message.channel.send("You need to say what u want to comment");

        else 
        {
            text = args.join(" ");
        }


        await axios
        .get(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${image}&text=${text}&username=${username}`)
        .then((res)=>{
            
            let phEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setImage(res.data.message)
            .setFooter('Using nekobot.xyz api', 'https://topdiscordbots.com/storage/sites/nekobot.png');
            message.channel.send(phEmbed);


        })
        .catch((err)=>{
            console.error('Err:',err)
        })
        
    }
}