import { Client, Intents, InteractionReplyOptions } from 'discord.js';
import { commands } from './commands';

const env = process.env || {};

const client = new Client({
  shards: 'auto',
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
  presence: {
    status: 'online',
  },
});

const token = env.BOT_TOKEN;
const prefix = '!';

const interactionReply: InteractionReplyOptions = { fetchReply: true };

client.on('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});


client.on('message', async message => {
  if (message.author.bot) return null;
  const isPrefix = message.content.startsWith(prefix);

  if (!isPrefix) return null;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  const reply = await commands[command] || (() => 'Não sei nada sobre esse idiota');

  message.channel.send(await reply(message));
});

client.login(token);
