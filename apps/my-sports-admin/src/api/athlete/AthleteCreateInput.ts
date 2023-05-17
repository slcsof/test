import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CompetitionCreateNestedManyWithoutAthletesInput } from "./CompetitionCreateNestedManyWithoutAthletesInput";
import { SponsorCreateNestedManyWithoutAthletesInput } from "./SponsorCreateNestedManyWithoutAthletesInput";
import { InputJsonValue } from "../../types";
import { TeamCreateNestedManyWithoutAthletesInput } from "./TeamCreateNestedManyWithoutAthletesInput";
import { UserCreateNestedManyWithoutAthletesInput } from "./UserCreateNestedManyWithoutAthletesInput";

export type AthleteCreateInput = {
  accounts: AccountWhereUniqueInput;
  competitions?: CompetitionCreateNestedManyWithoutAthletesInput;
  sponsors?: SponsorCreateNestedManyWithoutAthletesInput;
  starts?: InputJsonValue;
  teams?: TeamCreateNestedManyWithoutAthletesInput;
  users?: UserCreateNestedManyWithoutAthletesInput;
  votes?: InputJsonValue;
};
