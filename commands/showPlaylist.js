const {searcher} = require('../functions/Music_Handler');
const ytdl = require('ytdl-core');
const UserPlaylist = require('../DBModels/Playlist');


module.exports = 
{
    name: 'showPlaylist',
    aliases: ['showpl','show'],
    description: "shows user playlist",
    cooldown: 50,
  async execute(client,message,args,Discord)
    {
        const userData = await UserPlaylist.findOne({
            UserID: message.author.id
        });

        if(!userData)
        {
            return message.reply("You dont have a playlist yet try to add songs s.add");
        }else {

            var PlaylistArray = [];

            for(var i =0;i<userData.PlaylistSongs.length;i++)
            {
                let songInfo = await ytdl.getInfo(userData.PlaylistSongs[i]);
                const song = {
                    title: songInfo.videoDetails.title,
                    url: songInfo.videoDetails.video_url,
                    vLength: songInfo.videoDetails.lengthSeconds,
                    thumbnail: songInfo.videoDetails.thumbnails[3].url,
                    duration: '',
                }
                song.duration = `${parseInt(song.vLength / 60)}:${song.vLength - 60 * parseInt(song.vLength / 60)}`;
                PlaylistArray.push(song);


            }

            var songEmbed = new Discord.MessageEmbed()
                .setTitle("Song 1/" +PlaylistArray.length)
                .addField("Name: ",PlaylistArray[0].title)
                .addField("Song duration: ", PlaylistArray[0].duration)
                .setThumbnail(PlaylistArray[0].thumbnail)
                .setColor("PURPLE")

                var index =0;


                var msgEmbed= await message.channel.send(songEmbed);
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
                        }else if(reaction.emoji.name=='➡️' && index>=PlaylistArray.length -1)
                        {
                            message.channel.send("You cant");
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


        }

        function showEmbeds()
        {
            songEmbed.setTitle("Song "+ (index+1) +"/"+PlaylistArray.length)
            songEmbed.spliceFields(0,2,{name: "Name:",value:  PlaylistArray[index].title},{name: "Song duration: ",value: PlaylistArray[index].duration})
            songEmbed.setThumbnail(PlaylistArray[index].thumbnail)
            msgEmbed.edit(songEmbed);
        }
   
    }
}