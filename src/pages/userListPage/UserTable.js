import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MainPageHoc from "../../hocs/mainPageHoc";
import { loadUsers } from "../../ducks/user/thunks";
import {
  isFetching,
  hasFetched,
  users as allUsers,
} from "../../ducks/user/selectors";

import "bootstrap/dist/css/bootstrap.min.css";
import "./UserTable.css";

class UserTable extends Component {
  state = {
    users: undefined,
  };

  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  getTable() {
    return (
      <Table className="user-table-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>{this.getRow()}</tbody>
      </Table>
    );
  }

  getRow() {
    const { isFetchingUsers, hasFetchedUsers, allUsers } = this.props;
    // TODO: show a spinner or loader.
    if (isFetchingUsers) return null;

    if (hasFetchedUsers) {
      return allUsers.map(({ _id, name, email, phone }) => (
        <tr
          className="user-table-row"
          key={_id}
          onClick={() => this.navigateToDetailPage(_id)}
        >
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
        </tr>
      ));
    }

    // TODO: handle error.
    return null;
  }

  navigateToDetailPage = (id) => {
    const { history } = this.props;
    history.push(`/users/detail/${id}`);
  };

  render() {
    return (
      <main className="user-table-content">
        <Container>
          <Row>
            <Col>{this.getTable()}</Col>
          </Row>
        </Container>
      </main>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  isFetchingUsers: isFetching(users),
  hasFetchedUsers: hasFetched(users),
  allUsers: allUsers(users),
});

const mapDispatchToProps = (dispatch) => ({
  loadUsers: () => dispatch(loadUsers()),
});

export default compose(
  MainPageHoc,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserTable);
