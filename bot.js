require('dotenv').config();
const Discord = require('discord.js');
const { processReceiveMessage } = require('./src/messages/receive');

const client = new Discord.Client({ intents: ['GUILD_MESSAGES', 'GUILDS'] });

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    try {
        console.log(`TEST:`, client.channels)
        const channel = await client.channels.fetch(process.env.APP_ID);
        channel.send('Open for business!');
    } catch (err) {
        console.error(`ERROR FETCHING CHANNEL:`, err);
    }
});

client.on('message', msg => processReceiveMessage(msg));

client.login(process.env.CLIENT_TOKEN);