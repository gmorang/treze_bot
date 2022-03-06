import { Clan } from "./clan";

export interface War {
  result: string;
  endTime: string;
  teamSize: number;
  attacksPerMember: number;
  clan: Clan;
  opponent: Clan
}