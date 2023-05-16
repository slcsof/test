import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { CompetitionUpdateManyWithoutAccountsInput } from "./CompetitionUpdateManyWithoutAccountsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  athlete?: PlayerWhereUniqueInput | null;
  competition?: CompetitionUpdateManyWithoutAccountsInput;
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
