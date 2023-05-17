import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CompetitionUpdateManyWithoutAthletesInput } from "./CompetitionUpdateManyWithoutAthletesInput";
import { SponsorUpdateManyWithoutAthletesInput } from "./SponsorUpdateManyWithoutAthletesInput";
import { InputJsonValue } from "../../types";
import { TeamUpdateManyWithoutAthletesInput } from "./TeamUpdateManyWithoutAthletesInput";
import { UserUpdateManyWithoutAthletesInput } from "./UserUpdateManyWithoutAthletesInput";

export type AthleteUpdateInput = {
  accounts?: AccountWhereUniqueInput;
  competitions?: CompetitionUpdateManyWithoutAthletesInput;
  sponsors?: SponsorUpdateManyWithoutAthletesInput;
  starts?: InputJsonValue;
  teams?: TeamUpdateManyWithoutAthletesInput;
  users?: UserUpdateManyWithoutAthletesInput;
  votes?: InputJsonValue;
};
