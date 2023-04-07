import React, { useState, useEffect } from "react";
import Welcome from "../comps/Welcome/Welcome";
// Firebase
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Profile from "../comps/Profile/Profile";

function ProfilePage() {
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
      {user ? <Profile></Profile> : null}
      {!user ? <Welcome></Welcome> : null}
    </div>
  );
}

export default ProfilePage;
