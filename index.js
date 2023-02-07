const discord = require('./client.js');
const client = new discord();
const { loadEvents } = require("./systems/eventHandler.js");

module.exports = client;
require("dotenv").config();
loadEvents(client);

client.login(process.env.DISCORD_TOKEN);