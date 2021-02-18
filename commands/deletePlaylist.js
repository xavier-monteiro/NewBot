const UserPlaylist = require('../DBModels/Playlist');

module.exports = 
{
    name: 'deletePlaylist',
    aliases: ['delete','del','delpl'],
    description: "deletes the playlist",
   async execute(client,message,args,Discord)
    {
        const userData = await UserPlaylist.findOne({
            UserID: message.author.id
        });

        if(!userData)
        {
            message.reply("You cant delete something u dont have!");
        } else 
        {
            try 
            {
                userData.remove();
                message.reply("You deleted your playlist!");
            }catch(err)
            {
                console.error(err);
            }
            
        }
   
    }
}