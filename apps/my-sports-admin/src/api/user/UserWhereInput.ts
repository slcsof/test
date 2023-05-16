import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { CompetitionListRelationFilter } from "../competition/CompetitionListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SponsorListRelationFilter } from "../sponsor/SponsorListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  athlete?: PlayerWhereUniqueInput;
  competitions?: CompetitionListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  sponsors?: SponsorListRelationFilter;
  starts?: JsonFilter;
  team?: TeamWhereUniqueInput;
  username?: StringFilter;
  vote?: JsonFilter;
};
