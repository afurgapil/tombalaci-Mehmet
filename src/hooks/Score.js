import { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "./hooks.scss";

function Score() {
  const [score, setScore] = useState(null);
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
              const score = userData.score;
              setScore(score);
            } else {
              setError("Not Found!");
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
    <div id="score-container">
      {score ? (
        <div id="border-out">
          <div id="border-in">
            <h3 className="border-in-item">Your Score</h3>
            <h3 className="border-in-item">{score}</h3>
            {error && <p>{error}</p>}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Score;
