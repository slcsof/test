import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  athleteId?: SortOrder;
  createdAt?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  starts?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  vote?: SortOrder;
};
