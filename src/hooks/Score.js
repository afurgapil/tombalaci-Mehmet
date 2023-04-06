import { useState, useEffect } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "./hooks.scss";

const db = getFirestore();

function Score() {
  const [score, setScore] = useState(null);
  const [error, setError] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      try {
        const userId = user.uid;
        const userRef = doc(db, "users", userId);

        const unsubscribe = onSnapshot(
          userRef,
          (doc) => {
            if (doc.exists()) {
              const userData = doc.data();
              const score = userData.score;
              setScore(score);
            } else {
              setError("Not Found!");
            }
          },
          (error) => {
            setError(error);
            console.log(error);
          }
        );

        return () => unsubscribe();
      } catch (error) {
        setError(error);
        console.log(error);
      }
    }
  }, [user]);

  return (
    <div id="score-container">
      {score !== null ? (
        <div id="border-out">
          <div id="border-in">
            <h3 className="border-in-item">Your Score</h3>
            <h3 className="border-in-item">{score}</h3>
            {error && <p>{error}</p>}
          </div>
        </div>
      ) : (
        <div id="border-out">
          <div id="border-in">
            <h3 className="border-in-item">Your Score</h3>
            <h3 className="border-in-item">Loading...</h3>
            {error && <p>{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Score;
