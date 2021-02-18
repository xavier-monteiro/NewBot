module.exports = (Discord,client,guild) =>{

    console.log("got here in guild");
    console.log(guild.name)
    console.log(guild.id)

    let found = 0;
    guild.channels.cache.map((channel) => {
        if (found === 0) {
          if (channel.type === "text") {
            if (channel.permissionsFor(client.user).has("VIEW_CHANNEL") === true) {
              if (channel.permissionsFor(client.user).has("SEND_MESSAGES") === true) {
                channel.send(`Hello - I'm Sola! my prefix is .s , use .s help so see my commands!`);
                
                found = 1;
              }
            }
          }
        }
      });
}