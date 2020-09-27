import { createReducer } from "redux-act";
import { UserDto } from "../../repositories/contracts/user";

import { setLoadingStatus } from "./actions";

enum Status  {
  None = "NONE",
  Fetching = "FETCHING",
  Fetched = "FETCHED",
  Error = "ERROR"
};

type UserState = {
  users: { [key: string]: UserDto[] };
  status: Status;
};

const initialState: UserState = {
  users: {},
  status: Status.None,
};

const users = createReducer(
  {
    [setLoadingStatus.getType()]: (state, status: Status) => ({
      ...state,
      status,
    }),
  },
  initialState
);

export type { UserState };
export { initialState, users, Status };
