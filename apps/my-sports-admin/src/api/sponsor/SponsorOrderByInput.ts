import { SortOrder } from "../../util/SortOrder";

export type SponsorOrderByInput = {
  athleteId?: SortOrder;
  competitionId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
};
