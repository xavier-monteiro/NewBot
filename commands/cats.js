const axios = require('axios');

module.exports = 
{
    name: 'cats',
    aliases: ['api','apicall','cat'],
    description: "calls api",
    async execute(client,message,args,Discord)
    {
       var images = [];
       var index = 0;

      await chamarApi();

        const catEmbed = new Discord.MessageEmbed()
        .setColor('#E7BAEA')
        .setTitle('Cat picture')
        .setDescription('This cat is rly cute!')
        .setImage(images[index]);

        var index =0;


        var msgEmbed= await message.channel.send(catEmbed);
        await msgEmbed.react('⬅️')
        await msgEmbed.react('➡️')
  

  const filter = (reaction, person) => {
    return reaction.emoji.name === '⬅️' || reaction.emoji.name === '➡️'  && person.id === message.author.id;
};

const collector = msgEmbed.createReactionCollector(filter, { time:45000 });

    collector.on('collect', (reaction, person) => {

        if(reaction.emoji.name=='⬅️' && index==0)
        {
            message.channel.send("You cant");
        }else if(reaction.emoji.name=='⬅️')
        {
            index--;
            showEmbeds();
        }else if(reaction.emoji.name=='➡️')
        {
            index++;
            showEmbeds();
        }

        reaction.users.remove(person);
    });

    collector.on('end', collected => {
    return;
    });

        

     async function chamarApi()
       {
        await axios
        .get('https://api.thecatapi.com/v1/images/search')
        .then((res)=>{
            images.push(res.data[0].url);
        })
        .catch((err)=>{
            console.error('Err:',err)
        })
       }

     async  function showEmbeds()
        {
            if(!images[index])
            {
                await chamarApi();
            }
            
            catEmbed.setImage(images[index]);
            msgEmbed.edit(catEmbed);
            return;
        }
    }
}