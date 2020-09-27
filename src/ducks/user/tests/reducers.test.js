import { users as reduce, initialState, Status } from "../index";
import { setLoadingStatus, setUsers } from "../actions";
import { UserMockBuilder } from "../../../__mocks__/users/UserMockBuilder";

describe("Users reducer tests", () => {
  let userState;

  beforeEach(() => {
    userState = {
      status: Status.None,
      users: {},
    };
  });

  it("should be able to set status", () => {
    // Act
    const nextState = reduce(initialState, setLoadingStatus(Status.Fetching));

    // Assert
    expect(nextState.status).toBe(Status.Fetching);
  });

  it("should be able to set users", () => {
    // Arrange
    const pageNumber = 0;
    const users = [new UserMockBuilder().build()];

    // Act
    const nextState = reduce(initialState, setUsers({ pageNumber, users }));

    // Assert
    expect(nextState.users).toEqual({ 0: users });
  });
});
