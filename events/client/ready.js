const client = require("../../index.js");
const { loadSlashCommands } = require("../../systems/slashHandler.js");

module.exports = {
    name: 'Ready',
};

client.on('ready', () => {
    loadSlashCommands(client);
    console.log(`${client.user.username}` + ' ' + 'successfully logged in.');
    client.user.setActivity(`on ${client.guilds.cache.size} server(s).`);
});