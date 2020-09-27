import { UserDto } from "./contracts/user";

import data from "../api/data.json";

// TODO: should get data from the backend server. Data is mocked for now.
export default class UserRepository {
  getUsers = (): Promise<Array<UserDto>> => {
    return new Promise((resolve, reject) => {
      resolve(
        data.map(({ _id, name, email, phone }: any) => {
          return {
            id: _id,
            name: name,
            email: email,
            phone: phone,
          };
        })
      );
    });
  };
}
