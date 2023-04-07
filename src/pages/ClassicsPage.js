import React, { useState, useEffect } from "react";
import Welcome from "../comps/Welcome/Welcome";
import Classics from "../comps/Classics/Classics";
// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Homepage() {
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
      {user ? <Classics></Classics> : null}
      {!user ? <Welcome></Welcome> : null}
    </div>
  );
}

export default Homepage;
