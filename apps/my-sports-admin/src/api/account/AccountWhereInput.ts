import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { CompetitionListRelationFilter } from "../competition/CompetitionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  athlete?: AthleteWhereUniqueInput;
  competition?: CompetitionListRelationFilter;
  id?: StringFilter;
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
