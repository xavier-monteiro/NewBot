const Canvas = require('canvas');

module.exports = 
{
    name: 'test',
    aliases: ['ts'],
    description: "this is a canvas text command!",
   async execute(client,message,args,Discord)
    {
        const canvas = Canvas.createCanvas(700,250);
        const ctx = canvas.getContext('2d');

	// Since the image takes time to load, you should await it

    try {
    
        const background = await Canvas.loadImage('https://wow.zamimg.com/uploads/blog/images/20516-afterlives-ardenweald-4k-desktop-wallpapers.jpg');
       
        
        // This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');


        message.channel.send(attachment);
    }catch(err)
    {
        console.error(err);
    }
	

	
    }
}