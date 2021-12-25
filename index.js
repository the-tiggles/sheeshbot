require('dotenv').config();
const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
});


bot.on('message', msg => {
 if (msg.content === 'sheesh') {
     msg.reply('he said it');
 }   
});






















bot.login(process.env.BOT_TOKEN);