import { Message } from 'discord.js';
import { war } from './clash';
import { help } from './help';
import { vote } from './vote';

export const commands = {
  rodrigo: (message: Message) => `A irmã do Rodrigo ta mamando o ${message.author}`,
  nicholas: () => 'AAAAAAAAH QUEBROU VELHO, FRATURA EXPOSTAAAAA!!!!!',
  lucio: () => 'Lucio não pode responder porque a Nhatalya não deixa',
  maurin: () => 'Chumba chumba chumba \u{1F449}\u{1F44C}',
  gustavin: () => 'Vou ter que sair aqui, tenho muita coisa pra fazer ',
  gabriel: () => 'Ah, eu acho barato, porque uma caixa de cerveja é 35 reais',
  vote: (message: Message) => vote(message),
  help: () => help(),
  war: () => war(),
};
