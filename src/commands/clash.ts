import axios from "axios";
import { Clan } from "../interfaces/clan";
import { ClanMember } from "../interfaces/clan-member";

const env = process.env || {};

const apiUrl = env.CLASH_BASE_URL;
const apiToken = env.CLASH_TOKEN;
const headers = {
  Authorization: `Bearer ${apiToken}`
}


export const clan = async () => {
  // TODO: CREATE RESPONSE INTERFACE
  const response = await axios.get(`${apiUrl}/clans/%232Q2JL0RYQ`, {
    headers: headers
  });

  const memberList: Array<ClanMember> = response.data.memberList;
  const users: Array<String> = memberList.map(member => member.name); 2
  const { name, clanPoints, description, isWarLogPublic } = response.data;
  console.log(response.data);

  return `
    O CLAN MAIS BRABO DO CLASH: ${name}
\n\n ${isWarLogPublic && 'GUERRA ATIVA!!!'}
\n\nMembros 👯‍♂️ : ${users.join(', ')} 
\n\nTotal Points 🏆 : ${clanPoints} 
  `;
}

export const war = async () => {
  const response = await axios.get(`${apiUrl}/clans/%232Q2JL0RYQ/warlog`, {
    headers: headers,
  });

  console.log('DATA -----');
  console.log(response.data.items);

  if (response.data.items === []) return `Ainda não temos informações de guerra! 🤯`;

  // const clan: Clan = response.data.clan;
  // const opponent = response.data.opponent.name

  return `
  GUERRA MONSTRA:
  `;
}