module.exports = 
{
    name: 'is',
    aliases: ['beautiful','ugly'],
    description: "",
    execute(client,message,args,Discord)
    {
        let Msg;
        if(!args[0])
        {
            Msg=" the prettiest person in the server";
        }else{
            Msg = args.join(' ');
        }

        var store = [];
        const list = message.guild;
        list.members.cache.each(member => {       
            store.push(member.user);                  
          });
    
        
        var beautifulMember = getRandomInt(0, store.length);
        const avatarEmbed = new Discord.MessageEmbed()
            .setColor(0x333333)
            .setDescription(`${store[beautifulMember].username} **is ${Msg}!**`)
            .setImage(store[beautifulMember].displayAvatarURL({size: 256}));
            message.channel.send(avatarEmbed);

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
              }
   
    }
}