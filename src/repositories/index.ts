import UserRepository from "./userRepository";

export type Repositories = {
  userRepository: UserRepository;
};

export default () => ({
  userRepository: new UserRepository(),
});
