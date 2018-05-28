const commando = require('discord.js-commando');

class PercentCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'percent',
            group: 'random',
            memberName: 'percent',
            description: 'give you a percent chance'

        });
    }

    async run(message, args)  {
        var percent = Math.floor(Math.random () *100) + 1;
        message.channel.sendMessage('The chances are at ' + percent + '%' );

    }

}

module.exports = PercentCommand;