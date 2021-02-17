module.exports = (Discord,client,message) =>{
    console.log('Sola is on bro! hahah');
    client.user.setPresence({ activity: { name: `Sola is playing in: ${client.guilds.cache.size} guilds` }, status: 'online' }).catch(console.error);
}