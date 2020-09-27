import React, { Component } from "react";

import logo from "../archipro_dev.webp";
import "./mainPageHoc.css";

export default (WrappedComponent) => {
  return class MainPageHoc extends Component {
    render() {
      return (
        <div className="main">
          <header className="main-header">
            <img src={logo} className="main-logo" alt="logo" />
          </header>
          <WrappedComponent />
        </div>
      );
    }
  };
};
