import { Status } from "./index";

const isFetching = (state) => state.status === Status.Fetching;

const hasFetched = (state) => state.status === Status.Fetched;

const users = (state) => {
  const users = state.users;

  return Object.values(users).reduce((acc, item) => {
    return [...acc, ...item];
  }, []);
};

export { isFetching, hasFetched, users };
