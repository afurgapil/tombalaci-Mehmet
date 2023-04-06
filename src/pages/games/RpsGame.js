import React, { useState, useEffect } from "react";
import Welcome from "../../comps/Welcome/Welcome";

import Rps from "../../comps/Rps/Rps";
// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";

function RpsGame() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    });
    return unsubscribe;
  }, [auth]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user ? <Rps></Rps> : null}
      {!user ? <Welcome></Welcome> : null}
    </div>
  );
}

export default RpsGame;
