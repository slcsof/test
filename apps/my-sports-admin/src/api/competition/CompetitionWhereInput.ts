import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PlayerListRelationFilter } from "../player/PlayerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { SponsorListRelationFilter } from "../sponsor/SponsorListRelationFilter";
import { TeamListRelationFilter } from "../team/TeamListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompetitionWhereInput = {
  accounts?: AccountWhereUniqueInput;
  athlete?: PlayerListRelationFilter;
  id?: StringFilter;
  sponsors?: SponsorListRelationFilter;
  team?: TeamListRelationFilter;
  user?: UserListRelationFilter;
};
