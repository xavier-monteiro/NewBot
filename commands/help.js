module.exports = 
{
    name: 'help',
    aliases: ['h'],
    description: "help embed",
    execute(client,message,args,Discord)
    {
        let owner = client.users.cache.get('353968936838234114');

        if(!args[0])
        {
            const helpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Commands')
	.setAuthor('Sola support server', client.user.displayAvatarURL(), 'https://discord.gg/4XMUredjrG')
	.addFields(
		{ name: 's.help fun', value: 'Shows embed with fun commands'},
		{ name: 's.help music', value: 'Shows embed with music commands'},
        { name: 's.set [prefix]', value: 'Sets custom prefix for guild'},
	)
	.setImage('https://static.wikia.nocookie.net/steamtradingcards/images/b/b6/Sunrider_Academy_Artwork_4.jpg/revision/latest/scale-to-width-down/340?cb=20150423020443')
	.setTimestamp()
	.setFooter('Feel free to dm the owner: Katz 1(mini)#3802', owner.displayAvatarURL());

        message.channel.send(helpEmbed);
        }else if (args[0]== "fun") FunCommands(); else if (args[0]== "music") MusicCommands(); else return message.channel.send("Invalid help category");
        
        function FunCommands()
        {
            const funEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Fun Commands')
            .setDescription("Yes i need to add more")
            .setAuthor('Sola support server', client.user.displayAvatarURL(), 'https://discord.gg/4XMUredjrG')
            .addFields(
                { name: 's.is [anything u want ex: the most retard person of the server]', value: 'Shows a random member avatar with your message'},
                { name: 's.cat', value: 'Shows cat images'},
                { name: 's.dog', value: 'Shows dog images'},
                { name: 's.ph [comment]', value: 'Shows your comment in ph site'},
                { name: 's.tweet [message]', value: 'Shows your tweet'},
            )
            
            .setFooter('Feel free to dm the owner: Katz 1(mini)#3802', owner.displayAvatarURL());
        
            message.channel.send(funEmbed);
        }

        function MusicCommands()
        {
            const musicEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Music Commands')
	.setAuthor('Sola support server', client.user.displayAvatarURL(), 'https://discord.gg/4XMUredjrG')
	.addFields(
		{ name: 's.play [url/name]', value: 'Plays the url or trys to play the name of the song (Youtube only)'},
		{ name: 's.play mypl', value: 'Plays your playlist u need to have one first(U can only have 1 playlist and 10songs max)'},
        { name: 's.add [url/name]', value: 'Adds the url or trys to add the name of the song (Youtube only) to your playlist'},
        { name: 's.show', value: 'Shows your playlist'},
        { name: 's.del', value: 'Deletes your playlist'},
        { name: 's.q', value: 'Shows the queue'},
        { name: 's.d', value: 'Disconnects the bot of the voice channel'},
        { name: 's.pause', value: 'Pauses current song of the queue'},
        { name: 's.resume', value: 'Resumes the paused song of the queue'},
        { name: 's.skip', value: 'Votes to skip the current song of the queue'},
        { name: 's.fskip', value: 'Skips the current song of the queue (need to have DJ role)'},
        { name: 's.loop [one,all,off]', value: 'Loops one song/all songs of the queue, turns off loop'},
	)
	
	.setFooter('Feel free to dm the owner: Katz 1(mini)#3802', owner.displayAvatarURL());

    message.channel.send(musicEmbed);
        }
   
    }
}