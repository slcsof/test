import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserCreateNestedManyWithoutSponsorsInput } from "./UserCreateNestedManyWithoutSponsorsInput";

export type SponsorCreateInput = {
  athlete?: PlayerWhereUniqueInput | null;
  competition?: CompetitionWhereUniqueInput | null;
  team?: TeamWhereUniqueInput | null;
  user?: UserCreateNestedManyWithoutSponsorsInput;
};
