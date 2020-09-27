import { Status } from "../index";
import { setLoadingStatus, setUsers } from "../actions";
import { UserMockBuilder } from "../../../__mocks__/users/UserMockBuilder";
import { loadUsers } from "../thunks";

describe("Users thunks tests", () => {
  let dispatch, getState, getDependencies, getUsers;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    getDependencies = jest.fn();
    getUsers = jest.fn();

    getDependencies.mockReturnValue({
      userRepository: {
        getUsers,
      },
    });
  });

  it("should be able to load users successfully", async () => {
    // Arrange
    const users = [new UserMockBuilder().build()];
    getUsers.mockReturnValue(users);

    // Act
    await loadUsers()(dispatch, getState, getDependencies);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(setLoadingStatus(Status.Fetching));
    expect(dispatch).toHaveBeenCalledWith(setUsers({ pageNumber: 0, users }));
    expect(dispatch).toHaveBeenCalledWith(setLoadingStatus(Status.Fetched));
  });

  it("should be able to set to error state if getUsers API fails to load", async () => {
    // Arrange
    const error = new Error("Failed to load users");
    getUsers.mockImplementation(() => {
      throw error;
    });

    // Act
    expect(loadUsers()(dispatch, getState, getDependencies)).rejects.toEqual(
      error
    );

    // Assert
    expect(dispatch).toHaveBeenCalledWith(setLoadingStatus(Status.Fetching));
    expect(dispatch).not.toHaveBeenCalledWith(setLoadingStatus(Status.Fetched));
    expect(dispatch).toHaveBeenCalledWith(setLoadingStatus(Status.Error));
  });
});
