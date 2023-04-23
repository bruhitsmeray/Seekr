const client = require("../index");
const { ChatInputCommandInteraction, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription("Will respond with the ping of the bot."),
        /**
        * @param {ChatInputCommandInteraction} interaction
        */
    async execute(interaction){
        interaction.reply({
            content: `\`The average ping is: ${Math.round(client.ws.ping)} ms.\``,
            ephemeral: true
        });
    }
};