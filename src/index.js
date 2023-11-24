import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";
import App from "./App";
import "alertifyjs/build/css/alertify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
