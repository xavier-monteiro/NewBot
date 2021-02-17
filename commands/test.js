const Canvas = require('canvas');

module.exports = 
{
    name: 'test',
    aliases: ['ts','saitama'],
    description: "this is a canvas text command!",
   async execute(client,message,args,Discord)
    {
        const canvas = Canvas.createCanvas(700,250);
        const ctx = canvas.getContext('2d');

        let num = Math.floor(Math.random() * 101); 
        let taggedUser;

        if(!message.mentions.users.size)
        {
            taggedUser = message.author;
        }
        else 
        {
            taggedUser = message.mentions.members.first();
            taggedUser = taggedUser.user;
        }

    try {
    
        const background = await Canvas.loadImage('https://www.leak.pt/wp-content/uploads/2020/04/one-punch-man-2.jpg');
       
        
        // This uses the canvas dimensions to stretch the image onto the entire canvas
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);


    ctx.font = '25px sans-serif';
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#f57542';
	// Actually fill the text with a solid color
	ctx.fillText(num +"% chance", 550, canvas.height / 1.8);

	// Pick up the pen
	ctx.beginPath();
	// Start the arc to form a circle
	ctx.arc(315, 90, 100, 0, Math.PI * 2, true);
	// Put the pen down
	ctx.closePath();
	// Clip off the region you drew on
	ctx.clip();


    const avatar = await Canvas.loadImage(taggedUser.displayAvatarURL({ format: 'jpg' }));
	// Move the image downwards vertically and constrain its height to 200, so it's a square
	ctx.drawImage(avatar, 215, 0, 200, 200);
	// Use helpful Attachment class structure to process the file for you
	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');


        message.channel.send(attachment);
    }catch(err)
    {
        console.error(err);
    }
	

	
    }
}