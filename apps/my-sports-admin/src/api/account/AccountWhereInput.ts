import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { CompetitionListRelationFilter } from "../competition/CompetitionListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  athlete?: PlayerWhereUniqueInput;
  competition?: CompetitionListRelationFilter;
  id?: StringFilter;
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
