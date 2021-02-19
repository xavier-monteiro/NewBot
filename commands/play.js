const ytdl = require('ytdl-core');
const ytpl = require('ytpl');
const {queue} = require('../functions/Music_Handler');
const {searcher} = require('../functions/Music_Handler');

const UserPlaylist = require('../DBModels/Playlist');

module.exports = 
{
    name: 'play',
    aliases: ['pl','p'],
    description: "play music command",
   async execute(client,message,args,Discord)
    {
    const vc = message.member.voice.channel;
    if(!vc)
    return message.channel.send("Please join a voice channel first");

    if(args[0]=="mypl")
    {
        let userData = await UserPlaylist.findOne({UserID: message.author.id});
        if(!userData)
        return message.reply("You dont have a playlist yet try to add songs first, use s.add");
   
            for(var i =0;i<userData.PlaylistSongs.length;i++)
            {
                let songInfo = await ytdl.getInfo(userData.PlaylistSongs[i]);
                videoHandler(songInfo,message,vc)
            }
    }
    else 
    {

    let url = args.join("");
    if(url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/))
    {
        try{
            await ytpl(url).then(async playlist => {
                message.channel.send(`The playlist: "${playlist.title}" has been added`)
                playlist.items.forEach(async item => {
                    await videoHandler(await ytdl.getInfo(item.shortUrl), message, vc, true);
                })
            })
        }catch(err){
            return message.channel.send(`Please insert a valid link....\n${err}`)
        }
    }
    else 
    {
        let result = await searcher.search(args.join(" "),{type: "video"})
        if(result.first==null)
        return message.channel.send("No results found");

        let songInfo = await ytdl.getInfo(result.first.url);
        return videoHandler(songInfo,message,vc)
    }
}

    async function videoHandler(songInfo, message, vc, playlist = false){
        const serverQueue = queue.get(message.guild.id);
        const song = {
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
            vLength: songInfo.videoDetails.lengthSeconds,
            thumbnail: songInfo.videoDetails.thumbnails[3].url,
            artist: songInfo.videoDetails.media.artist,
            name: songInfo.videoDetails.media.song
        }
        if(!serverQueue){
            const queueConstructor = {
                txtChannel: message.channel,
                vChannel: vc,
                connection: null,
                songs: [],
                volume: 10,
                playing: true,
                loopone: false,
                loopall: false,
                skipVotes: [],
            };
            queue.set(message.guild.id, queueConstructor);

            queueConstructor.songs.push(song);

            try{
                let connection = await queueConstructor.vChannel.join();
                queueConstructor.connection = connection;
                message.guild.me.voice.setSelfDeaf(true);
                play(message.guild, queueConstructor.songs[0]);
            }catch (err){
                console.error(err);
                queue.delete(message.guild.id);
                return message.channel.send(`Unable to join the voice chat ${err}`)
            }
        }else{
            serverQueue.songs.push(song);
            if(playlist) return undefined


            let dur = `${parseInt(song.vLength / 60)}:${song.vLength - 60 * parseInt(song.vLength / 60)}`
            let msg = new Discord.MessageEmbed()
                .setTitle("Song Added")
                .addField(song.title, "_____")
                .addField("Song duration: ", dur)
                .setThumbnail(song.thumbnail)
                .setColor("PURPLE")
            return message.channel.send(msg);
        }
    }
    function play(guild, song){
        const serverQueue = queue.get(guild.id);
        if(!song){
            serverQueue.vChannel.leave();
            queue.delete(guild.id);
            return;
        }
        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on('finish', () =>{
                if(serverQueue.loopone){  
                    play(guild, serverQueue.songs[0]);
                }
                else if(serverQueue.loopall){
                    serverQueue.songs.push(serverQueue.songs[0])
                    serverQueue.songs.shift()
                }else{
                    serverQueue.songs.shift()
                }
                play(guild, serverQueue.songs[0]);
            })
            let dur = `${parseInt(serverQueue.songs[0].vLength / 60)}:${serverQueue.songs[0].vLength - 60 * parseInt(serverQueue.songs[0].vLength / 60)}`
            let msg = new Discord.MessageEmbed()
                .setTitle("Now Playing:")
                .addField(serverQueue.songs[0].title, "_____")
                .addField("Song duration: ", dur)
                .addField("Check the song", `[${serverQueue.songs[0].name}](${serverQueue.songs[0].url})`)
                .setThumbnail(serverQueue.songs[0].thumbnail)
                .setColor("PURPLE")
            return message.channel.send(msg);
        }
    }
    }
