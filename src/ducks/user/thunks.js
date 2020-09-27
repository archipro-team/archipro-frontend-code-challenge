import { setLoadingStatus, setUsers } from "./actions";
import { Status } from "./index";

const loadUsers = () => async (dispatch, getState, getDependencies) => {
  const { userRepository } = getDependencies();

  try {
    dispatch(setLoadingStatus(Status.Fetching));

    const users = await userRepository.getUsers();

    // TODO: if we want to support pagination, we can extend from there.
    dispatch(setUsers({ pageNumber: 0, users }));
    dispatch(setLoadingStatus(Status.Fetched));
  } catch (error) {
    // TODO: log this error somewhere, e.g., App Insights, Raygun, etc.
    dispatch(setLoadingStatus(Status.Error));
    throw error;
  }
};

export { loadUsers };
