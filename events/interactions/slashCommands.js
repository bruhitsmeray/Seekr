const client = require("../../index.js");

module.exports = {
    name: "SlashCommand",
};

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if(!command) return interaction.reply({
        content: 'This command is outdated.',
        ephemeral: true
    });

    if(command.developer && interaction.user.id !== "1069417939066949632"){
        return interaction.reply({
            content: 'This command is only available to the developer.',
            ephemeral: true
        })
    };

    command.execute(interaction, client);
});