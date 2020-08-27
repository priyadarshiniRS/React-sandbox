import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./App";
import { initialState } from "./store/reducer";
import rootReducer from "./store/reducer";
import { Provider } from "react-redux";

const store = createStore(rootReducer, initialState);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
