import { Player } from "../player/Player";
import { Competition } from "../competition/Competition";
import { Team } from "../team/Team";
import { User } from "../user/User";

export type Sponsor = {
  athlete?: Player | null;
  competition?: Competition | null;
  createdAt: Date;
  id: string;
  team?: Team | null;
  updatedAt: Date;
  user?: Array<User>;
};
