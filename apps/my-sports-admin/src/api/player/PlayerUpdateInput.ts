import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { CompetitionUpdateManyWithoutPlayersInput } from "./CompetitionUpdateManyWithoutPlayersInput";
import { SponsorUpdateManyWithoutPlayersInput } from "./SponsorUpdateManyWithoutPlayersInput";
import { InputJsonValue } from "../../types";
import { TeamUpdateManyWithoutPlayersInput } from "./TeamUpdateManyWithoutPlayersInput";
import { UserUpdateManyWithoutPlayersInput } from "./UserUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  accounts?: AccountWhereUniqueInput;
  competitions?: CompetitionUpdateManyWithoutPlayersInput;
  sponsors?: SponsorUpdateManyWithoutPlayersInput;
  starts?: InputJsonValue;
  teams?: TeamUpdateManyWithoutPlayersInput;
  users?: UserUpdateManyWithoutPlayersInput;
  votes?: InputJsonValue;
};
