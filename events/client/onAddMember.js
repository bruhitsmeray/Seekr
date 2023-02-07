const { EmbedBuilder, time } = require('discord.js');
const client = require('../../index.js');
require('dotenv').config();

module.exports = {
    name: 'OnAddMember',
};

client.on('guildMemberAdd', async (member) => {
    const channel = member.guild.channels.cache.find(c => c.name == "welcome");
    if(!channel) return console.log('There is no channel named: "welcome". Please create one.');

    const card = new EmbedBuilder();
    card
        .setAuthor({ name: `${member.user.username}` + ' ' + 'joined the server.', iconURL: member.user.avatarURL({ dynamic: true })})
        .setThumbnail(client.user.avatarURL({ dynamic: true }))
        .addFields(
            {
                name: "Account Created",
                value: member.user.createdAt.toUTCString(),
                inline: false
            },
            {
                name: "User Joined",
                value: member.joinedAt.toUTCString(),
                inline: false
            }
        )
        .setTimestamp();

    channel.send({ embeds: [card] });
});