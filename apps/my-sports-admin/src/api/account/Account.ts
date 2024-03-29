import { Athlete } from "../athlete/Athlete";
import { Competition } from "../competition/Competition";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Account = {
  athlete?: Athlete | null;
  competition?: Array<Competition>;
  createdAt: Date;
  id: string;
  team?: Team | null;
  updatedAt: Date;
  user?: User;
};
