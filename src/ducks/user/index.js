import { createReducer } from "redux-act";

import { setLoadingStatus, setUsers } from "./actions";

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
    [setUsers.getType()]: (state, { pageNumber, users }) => ({
      ...state,
      users: {
        ...state.users,
        [pageNumber]: users,
      },
    }),
  },
  initialState
);

export { initialState, users, Status };
