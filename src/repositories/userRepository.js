import data from "../api/data.json";

// TODO: should get data from the backend server. Data is mocked for now.
export default class UserRepository {
  getUsers = () => {
    return new Promise((resolve, reject) => {
      resolve(
        data.map(({ _id, name, email, phone }) => {
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
