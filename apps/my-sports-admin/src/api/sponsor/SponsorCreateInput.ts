import { AthleteWhereUniqueInput } from "../athlete/AthleteWhereUniqueInput";
import { CompetitionWhereUniqueInput } from "../competition/CompetitionWhereUniqueInput";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserCreateNestedManyWithoutSponsorsInput } from "./UserCreateNestedManyWithoutSponsorsInput";

export type SponsorCreateInput = {
  athlete?: AthleteWhereUniqueInput | null;
  competition?: CompetitionWhereUniqueInput | null;
  team?: TeamWhereUniqueInput | null;
  user?: UserCreateNestedManyWithoutSponsorsInput;
};
