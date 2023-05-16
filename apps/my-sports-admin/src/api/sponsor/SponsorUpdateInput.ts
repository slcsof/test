import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserUpdateManyWithoutSponsorsInput } from "./UserUpdateManyWithoutSponsorsInput";

export type SponsorUpdateInput = {
  athlete?: PlayerWhereUniqueInput | null;
  competition?: CompetitionWhereUniqueInput | null;
  team?: TeamWhereUniqueInput | null;
  user?: UserUpdateManyWithoutSponsorsInput;
};
