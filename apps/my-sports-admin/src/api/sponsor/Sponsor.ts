import { Athlete } from "../athlete/Athlete";
import { Competition } from "../competition/Competition";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Sponsor = {
  athlete?: Athlete | null;
  competition?: Competition | null;
  createdAt: Date;
  id: string;
  team?: Team | null;
  updatedAt: Date;
  user?: Array<User>;
};
