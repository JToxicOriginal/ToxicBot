const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
    constructor(client){
        super(client, {
            name: 'roll',
            group: 'random',
            memberName: 'roll',
            description: 'rolls a die'

        });
    }

    async run(message, args)  {
        var roll = Math.floor(Math.random () * 6) + 1;
        message.channel.sendMessage('You rolled a ' + roll);

    }

}

module.exports = DiceRollCommand;