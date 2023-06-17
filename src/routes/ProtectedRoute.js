import React, { useEffect, useState } from "react";
import Unauthorized from "../comps/Unauthorized";
import { useSigner } from "../hooks/useSigner";
import { useDispatch } from "react-redux";
import { setAddress } from "../store/slicers/data";
import { useAddress } from "../hooks/useAddress";

function ProtectedRoute({ children }) {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const signer = useSigner();
  const address = useAddress();
  const operator = process.env.REACT_APP_OPERATOR;

  const connect = async () => {
    if (!signer) {
      return;
    }
    try {
      const address = await signer.getAddress();
      dispatch(setAddress(address));
    } catch (error) {
      console.error("Error connecting:", error);
    }
  };

  connect();
  useEffect(() => {
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
