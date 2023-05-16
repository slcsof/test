import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { PlayerUpdateManyWithoutCompetitionsInput } from "./PlayerUpdateManyWithoutCompetitionsInput";
import { SponsorUpdateManyWithoutCompetitionsInput } from "./SponsorUpdateManyWithoutCompetitionsInput";
import { TeamUpdateManyWithoutCompetitionsInput } from "./TeamUpdateManyWithoutCompetitionsInput";
import { UserUpdateManyWithoutCompetitionsInput } from "./UserUpdateManyWithoutCompetitionsInput";

export type CompetitionUpdateInput = {
  accounts?: AccountWhereUniqueInput;
  athlete?: PlayerUpdateManyWithoutCompetitionsInput;
  sponsors?: SponsorUpdateManyWithoutCompetitionsInput;
  team?: TeamUpdateManyWithoutCompetitionsInput;
  user?: UserUpdateManyWithoutCompetitionsInput;
};
