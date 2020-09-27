import { createAction } from "redux-act";

const setLoadingStatus = createAction("USER/SET_LOADING_STATUS");
const setUsers = createAction("USER/SET_USERS");

export { setLoadingStatus, setUsers };
