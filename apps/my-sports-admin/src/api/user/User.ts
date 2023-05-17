import { Account } from "../account/Account";
import { Athlete } from "../athlete/Athlete";
import { Competition } from "../competition/Competition";
import { JsonValue } from "type-fest";
import { Sponsor } from "../sponsor/Sponsor";
import { Team } from "../team/Team";

export type User = {
  accounts?: Array<Account>;
  athlete?: Athlete | null;
  competitions?: Array<Competition>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  sponsors?: Array<Sponsor>;
  starts: JsonValue;
  team?: Team | null;
  updatedAt: Date;
  username: string;
  vote: JsonValue;
};
