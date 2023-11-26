import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function PrivateRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const user = useUser();

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (Object.keys(user).length > 0) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
