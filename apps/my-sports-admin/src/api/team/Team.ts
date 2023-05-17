import { Account } from "../account/Account";
import { Athlete } from "../athlete/Athlete";
import { Competition } from "../competition/Competition";
import { Sponsor } from "../sponsor/Sponsor";
import { User } from "../user/User";

export type Team = {
  accounts?: Account;
  athlete?: Array<Athlete>;
  competitions?: Array<Competition>;
  createdAt: Date;
  id: string;
  sponsors?: Array<Sponsor>;
  updatedAt: Date;
  users?: Array<User>;
};
