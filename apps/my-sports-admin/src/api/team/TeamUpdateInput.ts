import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AthleteUpdateManyWithoutTeamsInput } from "./AthleteUpdateManyWithoutTeamsInput";
import { CompetitionUpdateManyWithoutTeamsInput } from "./CompetitionUpdateManyWithoutTeamsInput";
import { SponsorUpdateManyWithoutTeamsInput } from "./SponsorUpdateManyWithoutTeamsInput";
import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  accounts?: AccountWhereUniqueInput;
  athlete?: AthleteUpdateManyWithoutTeamsInput;
  competitions?: CompetitionUpdateManyWithoutTeamsInput;
  sponsors?: SponsorUpdateManyWithoutTeamsInput;
  users?: UserUpdateManyWithoutTeamsInput;
};
