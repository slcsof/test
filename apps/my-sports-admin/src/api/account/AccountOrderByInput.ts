import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  athleteId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
