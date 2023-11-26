import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext.jsx";
import { WalletProvider } from "./context/WalletContext.jsx";
import "./index.css";
import App from "./App";
import "alertifyjs/build/css/alertify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <WalletProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </WalletProvider>
    </BrowserRouter>
  </React.StrictMode>
);
