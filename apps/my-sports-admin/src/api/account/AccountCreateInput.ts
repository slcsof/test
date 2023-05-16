import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { CompetitionCreateNestedManyWithoutAccountsInput } from "./CompetitionCreateNestedManyWithoutAccountsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  athlete: PlayerWhereUniqueInput | null;
  competition?: CompetitionCreateNestedManyWithoutAccountsInput;
  team: TeamWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
