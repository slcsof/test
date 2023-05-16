import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PlayerCreateNestedManyWithoutTeamsInput } from "./PlayerCreateNestedManyWithoutTeamsInput";
import { CompetitionCreateNestedManyWithoutTeamsInput } from "./CompetitionCreateNestedManyWithoutTeamsInput";
import { SponsorCreateNestedManyWithoutTeamsInput } from "./SponsorCreateNestedManyWithoutTeamsInput";
import { UserCreateNestedManyWithoutTeamsInput } from "./UserCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  accounts: AccountWhereUniqueInput;
  athlete?: PlayerCreateNestedManyWithoutTeamsInput;
  competitions?: CompetitionCreateNestedManyWithoutTeamsInput;
  sponsors?: SponsorCreateNestedManyWithoutTeamsInput;
  users?: UserCreateNestedManyWithoutTeamsInput;
};
