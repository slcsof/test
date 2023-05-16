import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { CompetitionUpdateManyWithoutUsersInput } from "./CompetitionUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { SponsorUpdateManyWithoutUsersInput } from "./SponsorUpdateManyWithoutUsersInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  athlete?: PlayerWhereUniqueInput | null;
  competitions?: CompetitionUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  sponsors?: SponsorUpdateManyWithoutUsersInput;
  starts?: InputJsonValue;
  team?: TeamWhereUniqueInput | null;
  username?: string;
  vote?: InputJsonValue;
};
