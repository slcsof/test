import { Account } from "../account/Account";
import { Competition } from "../competition/Competition";
import { Sponsor } from "../sponsor/Sponsor";
import { JsonValue } from "type-fest";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Athlete = {
  accounts?: Account;
  competitions?: Array<Competition>;
  createdAt: Date;
  id: string;
  sponsors?: Array<Sponsor>;
  starts: JsonValue;
  teams?: Array<Team>;
  updatedAt: Date;
  users?: Array<User>;
  votes: JsonValue;
};
