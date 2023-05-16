import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PlayerCreateNestedManyWithoutCompetitionsInput } from "./PlayerCreateNestedManyWithoutCompetitionsInput";
import { SponsorCreateNestedManyWithoutCompetitionsInput } from "./SponsorCreateNestedManyWithoutCompetitionsInput";
import { TeamCreateNestedManyWithoutCompetitionsInput } from "./TeamCreateNestedManyWithoutCompetitionsInput";
import { UserCreateNestedManyWithoutCompetitionsInput } from "./UserCreateNestedManyWithoutCompetitionsInput";

export type CompetitionCreateInput = {
  accounts: AccountWhereUniqueInput;
  athlete?: PlayerCreateNestedManyWithoutCompetitionsInput;
  sponsors?: SponsorCreateNestedManyWithoutCompetitionsInput;
  team?: TeamCreateNestedManyWithoutCompetitionsInput;
  user?: UserCreateNestedManyWithoutCompetitionsInput;
};
