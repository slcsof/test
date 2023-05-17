import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { CompetitionCreateNestedManyWithoutAccountsInput } from "./CompetitionCreateNestedManyWithoutAccountsInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  athlete: AthleteWhereUniqueInput | null;
  competition?: CompetitionCreateNestedManyWithoutAccountsInput;
  team: TeamWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};
