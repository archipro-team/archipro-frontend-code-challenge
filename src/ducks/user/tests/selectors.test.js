import { isFetching, hasFetched, users } from "../selectors";
import { Status } from "../index";
import { UserMockBuilder } from "../../../__mocks__/users/UserMockBuilder";

describe("Users selector tests", () => {
  let userState;

  beforeEach(() => {
    userState = {
      status: Status.None,
      users: {},
    };
  });

  it("should be fetching if status is set to fetching.", () => {
    // Arrange
    userState.status = Status.Fetching;

    // Act
    const result = isFetching(userState);

    // Assert
    expect(result).toBe(true);
  });

  it("should no be fetching if status is not set to fetching", () => {
    // Arrange
    userState.status = Status.None;

    // Act
    const result = isFetching(userState);

    // Assert
    expect(result).toBe(false);
  });

  it("should return true if the status is set to fetched", () => {
    // Arrange
    userState.status = Status.Fetched;

    // Act
    const result = hasFetched(userState);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false if the status is no set to fetched", () => {
    // Arrange
    userState.status = Status.Fetching;

    // Act
    const result = hasFetched(userState);

    // Assert
    expect(result).toBe(false);
  });

  it("should return an empty list of users if there are no users in the associative array", () => {
    // Arrange
    userState.users = {};

    // Act
    const result = users(userState);

    // Assert
    expect(result).toEqual([]);
  });

  it("should combine all users in the associative array and return as one array", () => {
    // Arrange
    const user1 = new UserMockBuilder().build();
    const user2 = new UserMockBuilder()
      .withId("5bbc096ef9ede8be23e9067d")
      .withName("Lang Harvey")
      .withEmail("langharvey@solaren.com")
      .withPhone("+1 (980) 517-2506")
      .build();
    userState.users = {
      0: [user1],
      1: [user2],
    };

    // Act
    const result = users(userState);

    // Assert
    expect(result).toEqual([user1, user2]);
  });
});
