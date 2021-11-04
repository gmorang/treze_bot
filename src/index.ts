import { Client, Intents } from 'discord.js';

const env = process.env || {};

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const token = env.BOT_TOKEN;
const prefix = '!';

client.on('message', (message) => {
  console.log(message);
  console.log('test');
  if (message.author.bot) return null;
  const isPrefix = message.content.startsWith(prefix);

  if (!isPrefix) return null;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'rodrigo') {
    message.reply('Drigoro');
  }
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.login(token);
