import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./store";
import App from "./components/app/App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
