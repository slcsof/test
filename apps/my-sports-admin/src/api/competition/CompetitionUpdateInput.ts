import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { AthleteUpdateManyWithoutCompetitionsInput } from "./AthleteUpdateManyWithoutCompetitionsInput";
import { SponsorUpdateManyWithoutCompetitionsInput } from "./SponsorUpdateManyWithoutCompetitionsInput";
import { TeamUpdateManyWithoutCompetitionsInput } from "./TeamUpdateManyWithoutCompetitionsInput";
import { UserUpdateManyWithoutCompetitionsInput } from "./UserUpdateManyWithoutCompetitionsInput";

export type CompetitionUpdateInput = {
  accounts?: AccountWhereUniqueInput;
  athlete?: AthleteUpdateManyWithoutCompetitionsInput;
  sponsors?: SponsorUpdateManyWithoutCompetitionsInput;
  team?: TeamUpdateManyWithoutCompetitionsInput;
  user?: UserUpdateManyWithoutCompetitionsInput;
};
