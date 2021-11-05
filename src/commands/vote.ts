import { Message } from 'discord.js';

export const vote = (message: Message) => {
  const content = message.content.substr(6);
  const arr = content.split(',');
  const item = arr[Math.floor(Math.random() * arr.length)];

  return item;
};
