import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import MainPageHoc from "../../hocs/mainPageHoc";
import { users as allUsers } from "../../ducks/user/selectors";

import "./userDetail.css";

class UserDetail extends Component {
  getUser = () => {
    const {
      allUsers,
      match: {
        params: { userId },
      },
    } = this.props;

    return allUsers.find((user) => user._id === userId);
  };

  render() {
    const user = this.getUser();

    // TODO: should load the user separately if this user does not exist in redux.
    if (!user) return null;

    const { name, picture, age, email, company, gender, address, about } = user;
    return (
      <div className="user-detail-container">
        <h2>
          {/* eslint-disable-next-line  */}
          {name} <img src={picture} alt="profile picture" />
        </h2>

        <div className="user-detail-info">
          <p>Age: {age}</p>
          <p>Email: {email}</p>
          <p>Company: {company}</p>
          <p>Gender: {gender}</p>
          <p>Address: {address}</p>
        </div>
        <p className="user-detail-about">{about}</p>
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  allUsers: allUsers(users),
});

const mapDispatchToProps = (dispatch) => ({});

export default compose(
  MainPageHoc,
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(UserDetail);
