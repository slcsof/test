import { Account } from "../account/Account";
import { Player } from "../player/Player";
import { Sponsor } from "../sponsor/Sponsor";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Competition = {
  accounts?: Account;
  athlete?: Array<Player>;
  createdAt: Date;
  id: string;
  sponsors?: Array<Sponsor>;
  team?: Array<Team>;
  updatedAt: Date;
  user?: Array<User>;
};
