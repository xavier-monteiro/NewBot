const axios = require('axios');

module.exports = 
{
    name: 'tweet',
    aliases: ['tw'],
    description: '',
   async execute(client,message,args,Discord)
    {
        let text;
        let username = message.author.username;

        if(!args[0])
        return message.channel.send("You need to say what u want to comment");

        else 
        {
            text = args.join(" ");
        }


        await axios
        .get(`https://nekobot.xyz/api/imagegen?type=tweet&username=${username}&text=${text}`)
        .then((res)=>{
            
            let tweetEmbed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setImage(res.data.message)
            .setFooter('Using nekobot.xyz api', 'https://topdiscordbots.com/storage/sites/nekobot.png');
            message.channel.send(tweetEmbed);


        })
        .catch((err)=>{
            console.error('Err:',err)
        })
        
    }
}