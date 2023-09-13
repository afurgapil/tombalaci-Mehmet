// import { useScore } from "../hooks/user/useScore";
import { useState, useEffect } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";
function Score() {
  const [score, setScore] = useState(null);
  const [error, setError] = useState("");
  const auth = getAuth();
  const user = auth.currentUser;
  const db = getFirestore();
  // const score = useScore();
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
    <div className="flex justify-center items-center mx-2">
      {score !== null ? (
        <div className="flex justify-center items-center bg-yellow-500 border-4 border-yellow-600 border-solid">
          <div className="text-center bg-yellow-500">
            <h3 className="m-0 p-0">Your Score</h3>
            <h3 className="m-0 p-0">{score}</h3>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center bg-yellow-500 border border-600">
          <div className="text-center bg-yellow-500">
            <h3 className="m-0 p-0">Your Score</h3>
            <h3 className="m-0 p-0">Loading...</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default Score;
