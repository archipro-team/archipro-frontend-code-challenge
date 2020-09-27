const loadUsers = () => async (dispatch, getState, getDependencies) => {
  const { userRepository } = getDependencies();
  return await userRepository.getUsers();
};

export { loadUsers };
