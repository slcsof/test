import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SponsorWhereInput = {
  athlete?: AthleteWhereUniqueInput;
  competition?: CompetitionWhereUniqueInput;
  id?: StringFilter;
  team?: TeamWhereUniqueInput;
  user?: UserListRelationFilter;
};
