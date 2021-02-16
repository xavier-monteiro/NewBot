module.exports = 
{
    name: 'ping',
    aliases: ['pring','pl'],
    description: "this is a ping command!",
    execute(client,message,args,Discord)
    {
        message.channel.send('pong! sola');
   
    }
}