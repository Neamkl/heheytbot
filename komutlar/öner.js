const Discord = require('discord.js');


exports.run = function(client, message, args) {

	var öneri = args.slice(0).join(' ');
	var guildID = "484701101359366147";
	var channelID = "490245720222203940";
	
	if (!öneri){
		return message.reply("Bir mesaj belirtin! Doğru kullanım: **?öner <mesaj>**");
	} else {
		
		var embed = new Discord.RichEmbed()
			.setTimestamp()
			.addField("Eylem:", "Öneri")
			.addField("Kullanıcı:", message.author.tag)
			.addField("ID", message.author.id)
			.addField("Öneri", öneri)
		
		client.guilds.get(guildID).channels.get(channelID).send(embed);
		message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz.");
	};


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["öner"], 
  permLevel: 0 
};

exports.help = {
  name: 'öner', 
  description: "bot hakkındaki önerilerinizi bot sahiplerine ulaştırır", 
  usage: 'öner <mesaj>' 
};
