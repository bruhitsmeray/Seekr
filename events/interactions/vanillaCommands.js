const client = require("../../index.js");
const prefix = process.env.PREFIX;

module.exports = {
    name: "VanillaCommands",
};

client.on('messageCreate', async(message) => {
    if (message.author.bot || !message.guild) return;
    if (!message.content.startsWith(prefix)) return;
     
    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase(); 

    let command = client.commands.get(cmd);

    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
        await command.run(client, message, args);
    };
});