import UserRepository from "./userRepository";

export default () => ({
  userRepository: new UserRepository(),
});
