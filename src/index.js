import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import reducers from "./ducks";
import repositories from "./repositories";
import Router from "./router";
import * as serviceWorker from "./serviceWorker";

import "./index.css";

const createAppStore = (getDependencies, reducers) => {
  const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware.withExtraArgument(getDependencies)
  )(createStore);

  return createStoreWithMiddleware(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};

const store = createAppStore(repositories, reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
