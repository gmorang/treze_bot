import { ClanMember } from "./clan-member";

export interface Clan {
  tag: string;
  name: string;
  clanLevel: Number;
  attacks: Number;
  stars: Number;
  expEarned: Number;
  memberList: Array<ClanMember>;
  type: string;
  description: string;
  badgeUrls: {
    small: string;
    large: string;
    medium: string
  };
  clanPoints: Number;
  clanVersusPoints: Number;
  requiredTrophies: Number;
  warFrequency: string;
  warWinStreak: Number;
  warWins: Number;
  warTies: Number;
  warLosses: Number;
  isWarLogPublic: boolean;
  warLeague: { id: Number; name: string };
  members: Number;
  requiredVersusTrophies: Number;
  requiredTownhallLevel: Number
  destructionPercentage?: Number
}