const {Client, GatewayIntentBits, Partials, Collection} = require("discord.js");
const {Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const {User, Message, GuildMember, ThreadMember} = Partials;

class client extends Client {
    constructor(){
        super({
            disableMentions: "everyone",
            sharedCount: 'auto',
            intents: [Guilds, GuildMembers, GuildMessages],
            partials: [User, Message, GuildMember, ThreadMember]
        });
        this.commands = new Collection();
        this.events = new Collection();
    };
};

module.exports = client;