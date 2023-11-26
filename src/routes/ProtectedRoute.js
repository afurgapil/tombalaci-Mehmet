import React, { useEffect, useState, useContext } from "react";
import Unauthorized from "../comps/Unauthorized";
import { useAddress } from "../hooks/useAddress";
import { WalletContext } from "../context/WalletContext";
function ProtectedRoute({ children }) {
  const { initializeWallet } = useContext(WalletContext);
  const [isLoading, setLoading] = useState(true);
  const address = useAddress();
  const operator = process.env.REACT_APP_OPERATOR;
  useEffect(() => {
    initializeWallet();
  }, [initializeWallet]);

  useEffect(() => {
    if (address) {
      let checkAuthorization;
      if (address === null || operator === null) {
        checkAuthorization = setInterval(() => {
          if (address !== null && operator !== null) {
            setLoading(false);
            clearInterval(checkAuthorization);
          }
        }, 1000);
      } else {
        setLoading(false);
      }
      return () => {
        clearInterval(checkAuthorization);
      };
    }
  }, [address, operator]);

  if (isLoading) {
    return (
      <div
        style={{
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
          fontSize: "4rem",
          marginTop: "2rem",
        }}
      >
        Loading...
      </div>
    );
  }

  if (address === operator) {
    return <div>{children}</div>;
  } else {
    return <Unauthorized />;
  }
}

export default ProtectedRoute;
