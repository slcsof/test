import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CompetitionCreateNestedManyWithoutPlayersInput } from "./CompetitionCreateNestedManyWithoutPlayersInput";
import { SponsorCreateNestedManyWithoutPlayersInput } from "./SponsorCreateNestedManyWithoutPlayersInput";
import { InputJsonValue } from "../../types";
import { TeamCreateNestedManyWithoutPlayersInput } from "./TeamCreateNestedManyWithoutPlayersInput";
import { UserCreateNestedManyWithoutPlayersInput } from "./UserCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  accounts: AccountWhereUniqueInput;
  competitions?: CompetitionCreateNestedManyWithoutPlayersInput;
  sponsors?: SponsorCreateNestedManyWithoutPlayersInput;
  starts?: InputJsonValue;
  teams?: TeamCreateNestedManyWithoutPlayersInput;
  users?: UserCreateNestedManyWithoutPlayersInput;
  votes?: InputJsonValue;
};
