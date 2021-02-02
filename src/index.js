import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import App from "./App";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import thunk from "redux-thunk";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
