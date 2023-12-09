import React, { useEffect, useState, useContext } from "react";
import Unauthorized from "../comps/Unauthorized";
import { useAddress } from "../hooks/useAddress";
import { WalletContext } from "../context/WalletContext";

function ProtectedRoute({ children }) {
  const { initializeWallet } = useContext(WalletContext);
  const [isLoading, setLoading] = useState(true);
  const address = useAddress();
  const operator = process.env.REACT_APP_OPERATOR;
  const [dots, setDots] = useState(0);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevDots) => (prevDots + 1) % 4);
    }, 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-7xl bg-bg">
        Loading{".".repeat(dots)}
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
