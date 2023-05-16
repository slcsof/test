import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PlayerUpdateManyWithoutTeamsInput } from "./PlayerUpdateManyWithoutTeamsInput";
import { CompetitionUpdateManyWithoutTeamsInput } from "./CompetitionUpdateManyWithoutTeamsInput";
import { SponsorUpdateManyWithoutTeamsInput } from "./SponsorUpdateManyWithoutTeamsInput";
import { UserUpdateManyWithoutTeamsInput } from "./UserUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  accounts?: AccountWhereUniqueInput;
  athlete?: PlayerUpdateManyWithoutTeamsInput;
  competitions?: CompetitionUpdateManyWithoutTeamsInput;
  sponsors?: SponsorUpdateManyWithoutTeamsInput;
  users?: UserUpdateManyWithoutTeamsInput;
};
