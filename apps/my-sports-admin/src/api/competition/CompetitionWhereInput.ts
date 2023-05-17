import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AthleteListRelationFilter } from "../athlete/AthleteListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SponsorListRelationFilter } from "../sponsor/SponsorListRelationFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompetitionWhereInput = {
  accounts?: AccountWhereUniqueInput;
  athlete?: AthleteListRelationFilter;
  id?: StringFilter;
  sponsors?: SponsorListRelationFilter;
  team?: TeamListRelationFilter;
  user?: UserListRelationFilter;
};
