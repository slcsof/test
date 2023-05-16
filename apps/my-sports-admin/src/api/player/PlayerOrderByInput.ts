import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  accountsId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  starts?: SortOrder;
  updatedAt?: SortOrder;
  votes?: SortOrder;
};
