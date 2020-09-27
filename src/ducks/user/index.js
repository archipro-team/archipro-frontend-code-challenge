import { createReducer } from "redux-act";

import { setLoadingStatus } from "./actions";

const Status = Object.freeze({
  None: "NONE",
  Fetching: "FETCHING",
  Fetched: "FETCHED",
  Error: "ERROR",
});

const initialState = {
  users: {},
  status: Status.None,
};

const users = createReducer(
  {
    [setLoadingStatus.getType()]: (state, status) => ({
      ...state,
      status,
    }),
  },
  initialState
);

export { initialState, users };
