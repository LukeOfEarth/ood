require('dotenv').config();
const Discord = require('discord.js');
const { processReceiveMessage } = require('./src/messages/receive');

const bot = new Discord.Client({ intents: ['GUILD_MESSAGES', 'GUILDS'] });

// bot.on('ready', async () => {
//     try {
//         const id = bot.guilds.cache.at(0).systemChannelId;
//         const channel = await bot.channels.fetch(id);
//         channel.send('Open for business!');
//     } catch (err) {
//         console.error(`ERROR FETCHING CHANNEL:`, err);
//     }
// });

bot.on('messageCreate', msg => processReceiveMessage(msg));

bot.login(process.env.CLIENT_TOKEN);