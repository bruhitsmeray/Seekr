const client = require("../index");
const { ChatInputCommandInteraction, Message, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Clears the specified number of messages.')
            .addIntegerOption(option => option.setName('messages')
            .setDescription('Number of messages to delete')
            .setMinValue(1)
            .setMaxValue(100)
            .setRequired(true)),
        /**
        * @param {ChatInputCommandInteraction} interaction
        */
    async execute(interaction, message){
        // try{
        //     await message.channel.bulkDelete(parseInt(interaction.options.get("messages").value) + 1, true);
        //     console.warn(`${message.author.username} deleted ${interaction.options.get("messages").value} messages in ${message.guild.name}.`);
        // } catch (error) {
        //     console.error(error);
        // };
        interaction.reply({
            // content: `${interaction.options.get("messages").value}` + ' ' + 'messages have been deleted.',
            content: '\`This command has not yet been implemented. Please check with the developer on it\'s status!\`',
            ephemeral: true
        });
    }
};