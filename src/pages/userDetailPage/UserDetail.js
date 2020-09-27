import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { users as allUsers } from "../../ducks/user/selectors";

class UserDetail extends Component {
  state = {
    users: undefined,
  };

  render() {
    const { match } = this.props;

    console.log("s");
    console.log(match);
    return <div className="App">s</div>;
  }
}

const mapStateToProps = ({ users }) => ({
  allUsers: allUsers(users),
});

const mapDispatchToProps = (dispatch) => ({});

export default withRouter(
  compose(connect(mapStateToProps, mapDispatchToProps))(UserDetail)
);
