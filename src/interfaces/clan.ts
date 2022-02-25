import { ClanMember } from "./clan-member";

export interface Clan {
  tag: String;
  name: String;
  clanLevel: Number;
  attacks: Number;
  stars: Number;
  expEarned: Number;
  memberList: Array<ClanMember>
}