import React, { Component } from "react";
import { Container, Row, Col, Table } from "reactstrap";
import { compose } from "redux";
import { connect } from "react-redux";

import { loadUsers } from "./ducks/user/thunks";
import {
  isFetching,
  hasFetched,
  users as allUsers,
} from "./ducks/user/selectors";

import logo from "./archipro_dev.webp";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  state = {
    users: undefined,
  };

  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  getTable() {
    return (
      <Table className="App-table">
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
        <tr key={_id}>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
        </tr>
      ));
    }

    // TODO: handle error.
    return null;
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main className="App-content">
          <Container>
            <Row>
              <Col>{this.getTable()}</Col>
            </Row>
          </Container>
        </main>
      </div>
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(App);
