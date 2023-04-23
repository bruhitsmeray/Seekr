const {Client, Message, MessageEmbed} = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: ['av'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const user = message.mentions.users.first();
        const avatar = new MessageEmbed();

        if(!user) {
            avatar
                .setTitle('The amazing avatar of' + ' ' + `${message.author.username}`)
                .setImage(message.author.displayAvatarURL({ size: 512 }));
            return message.channel.send({ embeds: [avatar] });
        } else {
            avatar
                .setTitle('The amazing avatar of' + ' ' + `${user.username}`)
                .setImage(user.displayAvatarURL({ size: 512 }));
            return message.channel.send({ embeds: [avatar] });
        };
    }
};