import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { CompetitionUpdateManyWithoutAccountsInput } from "./CompetitionUpdateManyWithoutAccountsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  athlete?: AthleteWhereUniqueInput | null;
  competition?: CompetitionUpdateManyWithoutAccountsInput;
  team?: TeamWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};
