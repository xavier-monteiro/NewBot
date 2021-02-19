const UserPlaylist = require('../DBModels/Playlist');
module.exports = 
{
    name: 'removeSong',
    aliases: ['remove','re'],
    description: 'removes a certain music from users playlist',
  async execute(client,message,args,Discord)
    {
       
        if(!args[0])
        return message.reply("You need to say the number of the song you want to remove");

        let num = Number(args[0]);

        if(Number.isNaN(num) || Number.isInteger(num)==false)
        {
            return message.channel.send("Invalid number");
        }else {
            const data = await UserPlaylist.findOne({
                UserID: message.author.id
            });

            if(!data)
            {
                return message.reply("You dont have a playlist!");
            } else 
            {
                if(num<=0 || num>data.PlaylistSongs.length)
                {
                    return message.reply(`${num} is not in the playlist try one betwenn 1 and ${PlaylistSongs.length}`);
                } else {
                    data.PlaylistSongs.splice(num-1,1);
                    data.save();
                    message.channel.send("Your song was deleted");
                }
            }

        }
    }
}