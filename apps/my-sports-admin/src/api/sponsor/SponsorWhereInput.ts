import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type SponsorWhereInput = {
  athlete?: PlayerWhereUniqueInput;
  competition?: CompetitionWhereUniqueInput;
  id?: StringFilter;
  team?: TeamWhereUniqueInput;
  user?: UserListRelationFilter;
};
