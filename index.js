const express = require("express")
const app = express()
const Discord = require("discord.js");
const client = new Discord.Client();

app.get("/", (req, res) => {
	res.send("hello hell!")
})

app.listen(3000, () => {
	console.log("hey lol")
})

client.on("message", message => {
	if (message.content === "secret command moment") {
		message.channel.send("nice, you found it. Doesn't really matter because you got nothing, but congrats! here is a pat on the back :hand_splayed:")
	}
	if (message.content === ">help") {
		let embed = new Discord.MessageEmbed()
			.setTitle("Welcome to nyo!")
			.setDescription("Jobs, Shopping, Fun")
			.setColor("Red")
			.setFooter("Type in >help(Whatever you need help with goes here)")
		message.channel.send(embed)
	}
	if (message.content === ">help job") {
		let embed = new Discord.MessageEmbed()
			.setTitle("The job command is a good way to get currency")
			.setDescription("Some available jobs are:Miner, Internet troll, Robber, Police officer, and Uber Driver.There are different levels for each job. The higher level you do the harder it is but the more you get paid.")
			.setColor("Red")
			.setFooter("You can work as a different job everyday.")
		message.channel.send(embed)

	} if (message.content === ">work miner") {
		let embed = new Discord.MessageEmbed()
			.setTitle("Work for miner")
			.setDescription("Hurry! type in I found diamonds!")
			.setColor("RANDOM")
			.setFooter("Go before someone steals them!")
		message.channel.send(embed)
	}
	if (message.content === "I found diamonds!") {
		let embed = new Discord.MessageEmbed()
			.setTitle("gg")
			.setDescription("niceeeeee you got the diamonds!")
			.setColor("RANDOM")
			.setFooter("You earned 2000 coins from your hard work.")
		message.channel.send(embed)
	}
	if (message.content === ">work internet troll") {
		let embed = new Discord.MessageEmbed()
			.setTitle("How can I take down his game servers?!")
			.setDescription("A:Spam on one tab                       B:Use a PoD                                             C:Ddos it.")
			.setColor("Blue")
			.setFooter("Make sure you are secretive or you will get reported.")
		message.channel.send(embed)
	}
})

client.login(process.env.token);