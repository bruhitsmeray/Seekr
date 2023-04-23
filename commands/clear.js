const {Client, Message} = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['cl'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        try{
            let amount = args[0];
            if (!amount)
                return message.channel.send(`\`${message.author.username}\`` + ' : ' + `\`please provide an amount.\``);
            if (isNaN(amount) || parseInt(amount <= 0))
                return message.channel.send(`\`${message.author.username}\`` + ' : ' + `\`please provide a valid number.\``);
            if (parseInt(amount) > 100)
                return message.channel.send(`\`${message.author.username}\`` + ' : ' + `\`you can't delete 100 messages at once.\``);
    
            await message.channel.bulkDelete(parseInt(amount) + 1, true);
            console.warn('SYSTEM:' + ' ' + `${message.author.username} deleted ${amount} messages in ${message.guild.name}.`);
        } catch (error) {
            console.error(error);
        };
    }
};