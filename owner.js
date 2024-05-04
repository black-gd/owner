const { Client } = require('discord.js-selfbot-v13');

const client = new Client({ checkUpdate: false });

const channelId = '1233525611063017563';
const allowedUserIds = ['947639351305699339', '465860950965092374', '736123987813204059', '746031303480311889'];

client.on('ready', () => {
  console.log('Ready and working');
});

client.on('messageCreate', async (message) => {
  if (message.channel.type === 'DM' && allowedUserIds.includes(message.author.id)) {
    const channel = await client.channels.fetch(channelId).catch((error) => {
      console.error(`Error fetching channel: ${error}`);
    });

    if (channel && message.content.trim() !== '') {
      try {
        await channel.send(`${message.content}`);
      } catch (error) {
        console.error(`Failed to send message: ${error}`);
      }
    }
  }
});

client.login(process.env.token).catch((error) => {
  console.error(`Failed to login: ${error}`);
});
