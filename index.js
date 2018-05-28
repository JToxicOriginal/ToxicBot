const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname +"/commands");

bot.on('message', (message) => {
    if(message.content == 'ping') {
        message.channel.sendMessage('pong');
    }

});

bot.login('NDA3OTE4MDEwNjE2MTE5Mjk2.DexDJg.epAfWgYvxA_8IDdo7qjjvqNjdMI')