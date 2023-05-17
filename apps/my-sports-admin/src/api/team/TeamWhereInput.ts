import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AthleteListRelationFilter } from "../athlete/AthleteListRelationFilter";
import { CompetitionListRelationFilter } from "../competition/CompetitionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SponsorListRelationFilter } from "../sponsor/SponsorListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TeamWhereInput = {
  accounts?: AccountWhereUniqueInput;
  athlete?: AthleteListRelationFilter;
  competitions?: CompetitionListRelationFilter;
  id?: StringFilter;
  sponsors?: SponsorListRelationFilter;
  users?: UserListRelationFilter;
};
