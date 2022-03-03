import { Clan } from "./clan";

export interface War {
  result: String;
  endTime: Date;
  teamSize: number;
  attacksPerMember: number;
  clan: Clan;
  opponent: Clan
}