import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "./hooks.scss";
function ProfilePicture() {
  const [displayName, setDisplayName] = useState(null);
  const [error, setError] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      try {
        const userDisplayName = user.displayName;
        setDisplayName(userDisplayName);
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
  }, [user]);

  return (
    <div>
      {displayName ? (
        <div id="profile-picture">
          <h3>{displayName}</h3>
          {error && <p>{error}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProfilePicture;
