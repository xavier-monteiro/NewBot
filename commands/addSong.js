const {searcher} = require('../functions/Music_Handler');
const ytdl = require('ytdl-core');
const UserPlaylist = require('../DBModels/Playlist');

module.exports = 
{
    name: 'addSong',
    aliases: ['add'],
    description: "ads song",
   async execute(client,message,args,Discord)
    {
        
        if(!args[0])
        return message.reply("You need or a link or at least the name of the song to add yo your playlist");

        let url = args.join("");
    if(url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/))
    {
        return message.reply("We dont accept playlist, only songs");
    }

        let result = await searcher.search(args.join(" "),{type: "video"})
        if(result.first==null)
        return message.channel.send("No results found");

        let songInfo = await ytdl.getInfo(result.first.url);

        const data = await UserPlaylist.findOne({
            UserID: message.author.id
        });

        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            vLength: songInfo.videoDetails.lengthSeconds,
            thumbnail: songInfo.videoDetails.thumbnails[3].url,
            duration: '',
        }

        song.duration = `${parseInt(song.vLength / 60)}:${song.vLength - 60 * parseInt(song.vLength / 60)}`;

        var songEmbed = new Discord.MessageEmbed()
            .setTitle("Is this the song u want to add?")
            .addField("Name: ",song.title)
            .addField("Song duration: ", song.duration)
            .setThumbnail(song.thumbnail)
            .setColor("PURPLE")

            var msgEmbed= await message.channel.send(songEmbed);
            await msgEmbed.react('👍')
            await msgEmbed.react('👎')

            const filter = (reaction, person) => {
                return reaction.emoji.name === '👍' || reaction.emoji.name === '👎'  && person.id === message.author.id;
            };
            const collector = msgEmbed.createReactionCollector(filter, { max:1 ,time:15000 });
            
                collector.on('collect', (reaction, person) => {
            
                    if(reaction.emoji.name=='👍' )
                    {
                        StoreData();
                    }
                    else if(reaction.emoji.name=='👎')
                    {
                        return message.channel.send("I am sry that this is not the correct song pls try add with a link")
                    }
            
                    //reaction.users.remove(person);
                });
            
                collector.on('end', collected => {
                return;
                });

        

    async function StoreData()
    {
        try{
                        
            if(!data)
            {
            let newData = new UserPlaylist({
                UserID:  message.author.id,
                UserName: message.author.username,
                PlaylistSongs: songInfo.videoDetails.video_url,                           
            })
            newData.save();
        }else {   
            if(data.PlaylistSongs.length>=20)
            {
                return message.reply("You already reached the max songs for your playlist");
            }

            for(var i=0;i<data.PlaylistSongs.length;i++)
            {
                if(songInfo.videoDetails.video_url == data.PlaylistSongs[i])
                {
                    return message.reply("You already have that songs in your playlist!");
                }
            }
            data.PlaylistSongs.push(songInfo.videoDetails.video_url);
            data.save();
                                      
            }

            

            message.reply("The song was added to your playlist!");
        }catch(err)
        {
        console.error(err);
        }
    }
}
}