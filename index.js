import { Client, GatewayIntentBits } from 'discord.js';
import 'dotenv/config';
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on('messageCreate', (msg) => {
    if(msg.content === '!ping') msg.reply('Pong!');
});

client.login(process.env.DISCORD_TOKEN);