import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AthleteCreateNestedManyWithoutTeamsInput } from "./AthleteCreateNestedManyWithoutTeamsInput";
import { CompetitionCreateNestedManyWithoutTeamsInput } from "./CompetitionCreateNestedManyWithoutTeamsInput";
import { SponsorCreateNestedManyWithoutTeamsInput } from "./SponsorCreateNestedManyWithoutTeamsInput";
import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  accounts: AccountWhereUniqueInput;
  athlete?: AthleteCreateNestedManyWithoutTeamsInput;
  competitions?: CompetitionCreateNestedManyWithoutTeamsInput;
  sponsors?: SponsorCreateNestedManyWithoutTeamsInput;
  users?: UserCreateNestedManyWithoutTeamsInput;
};
