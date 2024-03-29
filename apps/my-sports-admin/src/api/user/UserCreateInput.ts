import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { CompetitionCreateNestedManyWithoutUsersInput } from "./CompetitionCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SponsorCreateNestedManyWithoutUsersInput } from "./SponsorCreateNestedManyWithoutUsersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  athlete?: AthleteWhereUniqueInput | null;
  competitions?: CompetitionCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  sponsors?: SponsorCreateNestedManyWithoutUsersInput;
  starts?: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  username: string;
  vote?: InputJsonValue;
};
