module.exports = (Discord,client,message) =>{
    console.log('Sola is on bro! bug fixed');
    client.user.setPresence({ activity: { name: 'Sunrider' }, status: 'online' }).catch(console.error);
}