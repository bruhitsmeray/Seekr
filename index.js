const discord = require('./client.js');
const client = new discord();
const { loadEvents } = require("./systems/eventHandler.js");
const { SpotifyPlugin } = require("@distube/spotify");

new SpotifyPlugin({
    parallel: true,
    emitEventsAfterFetching: true,
    api: {
      clientId: "",
      clientSecret: "",
    },
});

module.exports = client;
require("dotenv").config();
require("./systems/commandsHandler.js")(client);
loadEvents(client);

client.login(process.env.DISCORD_TOKEN);