const {queue} = require('../functions/Music_Handler');
const lyricsFinder = require('lyrics-finder');

module.exports = 
{
    name: 'lyrics',
    aliases: [],
    description: 'trying lyrics of song',
  async  execute(client,message,args,Discord)
    {
       const serverQueue = queue.get(message.guild.id);

       if(!serverQueue)
       {
           return console.log("There is no song playing")
       }else 
       {       
        let songName; 
        if(!serverQueue.songs[0].name || serverQueue.songs[0].name==undefined)
        {
             songName = serverQueue.songs[0].title;
        }  
        else {
            songName = serverQueue.songs[0].name;
        }
           let fullLyrics = await lyricsFinder(serverQueue.songs[0].artist, songName) || "Not Found!";

           if(fullLyrics=="Not Found!")
           {
               return message.channel.send("I am rly sorry but i couldnt find those lyrics :(")
           } else 
           {
                for (let i = 0; i < fullLyrics.length; i += 2048){
                const lyric = fullLyrics.substring(i, Math.min(fullLyrics.length, i + 2048));
                const msg = new Discord.MessageEmbed()
                    .setDescription(lyric)
                    .setColor("RED")
                message.channel.send(msg);
                }


           }

           

           /* try{
                message.channel.send(msg);
            }catch(err)
            {
                console.error(err);
            }
           
           console.log(fullLyrics);*/
       }



     


        /*for (let i = 0; i < fullLyrics.length; i += 2048){
            const lyric = fullLyrics.substring(i, Math.min(fullLyrics.length, i + 2048));
            const msg = new Discord.MessageEmbed()
                .setDescription(lyric)
            pages.push(msg);
        }*/
    
   
    }
}