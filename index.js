const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg require('./index.json'); // a garder en version desktop
const token = process.env.token // a garder en version heroku
const prefix = ("?");

bot.on('ready', function () {
    console.log("im ready to be used")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('welcome to zink kittys server' + member.displayName)
        console.log(`${member.displayName} joined the server.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');


bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});


bot.on('message', msg => {
    if (msg.content === "hi"){
        msg.reply("hello!! :3")
    }
    if (msg.content.match(/hello/i)) {
            msg.reply('hewwo :D')
    }
    if (msg.content === prefix + "website"){
        msg.channel.send("https://https://www.patreon.com/crystalbot/")
        console.log("a person asked for you website! :3")
    }

});

bot.login(cfg.token); //a garder en version desktop
bot.login(token); //a garder en version heroku
