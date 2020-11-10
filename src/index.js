import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux";
import "font-awesome/css/font-awesome.min.css";
import "normalize.css";
import "./styles.css";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/:id?">
          <App />
        </Route>
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
