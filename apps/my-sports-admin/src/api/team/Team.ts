import { Account } from "../account/Account";
import { Player } from "../player/Player";
import { Competition } from "../competition/Competition";
import { Sponsor } from "../sponsor/Sponsor";
import { User } from "../user/User";

export type Team = {
  accounts?: Account;
  athlete?: Array<Player>;
  competitions?: Array<Competition>;
  createdAt: Date;
  id: string;
  sponsors?: Array<Sponsor>;
  updatedAt: Date;
  users?: Array<User>;
};
