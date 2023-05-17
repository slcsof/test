import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserUpdateManyWithoutSponsorsInput } from "./UserUpdateManyWithoutSponsorsInput";

export type SponsorUpdateInput = {
  athlete?: AthleteWhereUniqueInput | null;
  competition?: CompetitionWhereUniqueInput | null;
  team?: TeamWhereUniqueInput | null;
  user?: UserUpdateManyWithoutSponsorsInput;
};
