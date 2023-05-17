import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AthleteCreateNestedManyWithoutCompetitionsInput } from "./AthleteCreateNestedManyWithoutCompetitionsInput";
import { SponsorCreateNestedManyWithoutCompetitionsInput } from "./SponsorCreateNestedManyWithoutCompetitionsInput";
import { TeamCreateNestedManyWithoutCompetitionsInput } from "./TeamCreateNestedManyWithoutCompetitionsInput";
import { UserCreateNestedManyWithoutCompetitionsInput } from "./UserCreateNestedManyWithoutCompetitionsInput";

export type CompetitionCreateInput = {
  accounts: AccountWhereUniqueInput;
  athlete?: AthleteCreateNestedManyWithoutCompetitionsInput;
  sponsors?: SponsorCreateNestedManyWithoutCompetitionsInput;
  team?: TeamCreateNestedManyWithoutCompetitionsInput;
  user?: UserCreateNestedManyWithoutCompetitionsInput;
};
