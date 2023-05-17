import { Account } from "../account/Account";
import { Athlete } from "../athlete/Athlete";
import { Sponsor } from "../sponsor/Sponsor";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Competition = {
  accounts?: Account;
  athlete?: Array<Athlete>;
  createdAt: Date;
  id: string;
  sponsors?: Array<Sponsor>;
  team?: Array<Team>;
  updatedAt: Date;
  user?: Array<User>;
};
