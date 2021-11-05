// import { Message } from 'discord.js';
import { commands } from '.';

export const help = () => {
  const arr = Object.keys(commands);
  const commandsString = arr.toString().replace(/,/g, ', ');

  return `Commands: ${commandsString}`;
};
