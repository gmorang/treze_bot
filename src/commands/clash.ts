import axios from "axios";
import { Clan } from "../interfaces/clan";
import { ClanMember } from "../interfaces/clan-member";
import { War } from "../interfaces/war";
import { formatDate } from "../utils/date";

const env = process.env || {};

const apiUrl = env.CLASH_BASE_URL;
const apiToken = env.CLASH_TOKEN;
const headers = {
  Authorization: `Bearer ${apiToken}`
}

export const clan = async () => {
  const response = await axios.get(`${apiUrl}/clans/%232Q2JL0RYQ`, {
    headers: headers
  });

  const memberList: Array<ClanMember> = response.data.memberList;
  const users: Array<String> = memberList.map(member => member.name); 2
  const { name, clanPoints, description, isWarLogPublic } = response.data;

  return `
    >>> **O CLAN MAIS BRABO DO CLASH: ${name}**
\n> *${description}*
\n${isWarLogPublic && 'ESTAMOS EM GUERRA 🏹'}
\nMembros 👯‍♂️ \n- *${users.join('\n- ')}*
\n🏆 ${clanPoints} 
  `;
}

export const war = async () => {
  const response = await axios.get(`${apiUrl}/clans/%232Q2JL0RYQ/warlog`, {
    headers: headers,
  });

  if (response.data.items === []) return `Ainda não temos informações de guerra! 🤯`;

  const data: Array<War> = response.data.items;
  const clan: Clan = data[0].clan;

  const { endTime } = data[0];
  const parsedDate = formatDate(endTime);
  const { name, destructionPercentage } = clan;
  const opponent = data[0].opponent.name;
  const result = data[0].result !== 'lose' ? 'Win!! 🍾 🍻' : 'Lose 🤕';

  return `
  >>> **Last War - ${parsedDate}**
\n*${name} x ${opponent}*
\n*Result*: ${result}
\n🔫 %${destructionPercentage}
  `;
}