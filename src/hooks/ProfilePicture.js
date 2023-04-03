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
        const userId = user.uid;
        const firestore = getFirestore();
        const userRef = doc(firestore, "users", userId);
        getDoc(userRef)
          .then((doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              const upperName = userData.displayName.toUpperCase();
              setDisplayName(upperName);
            } else {
              setError("No such document!");
            }
          })
          .catch((error) => {
            setError(error);
            console.log(error);
          });
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
  }, [user]);

  return (
    <div>
      {displayName ? (
        <div id="profile">
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
