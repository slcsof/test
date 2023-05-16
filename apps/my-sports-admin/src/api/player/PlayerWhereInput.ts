import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CompetitionListRelationFilter } from "../competition/CompetitionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SponsorListRelationFilter } from "../sponsor/SponsorListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type PlayerWhereInput = {
  accounts?: AccountWhereUniqueInput;
  competitions?: CompetitionListRelationFilter;
  id?: StringFilter;
  sponsors?: SponsorListRelationFilter;
  starts?: JsonFilter;
  teams?: TeamListRelationFilter;
  users?: UserListRelationFilter;
  votes?: JsonFilter;
};
