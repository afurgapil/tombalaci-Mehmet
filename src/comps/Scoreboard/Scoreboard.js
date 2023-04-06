import { useState, useEffect } from "react";
import "./scoreboard.scss";
import point from "../../assets/score.png";
//firebase
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import "animate.css";

const Scoreboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const usersRef = collection(db, "users");
    const usersQuery = query(usersRef, orderBy("score", "desc"));

    const unsubscribe = onSnapshot(usersQuery, (snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => {
        usersData.push({ ...doc.data(), id: doc.id });
      });
      setUsers(usersData);
    });

    return () => unsubscribe();
  }, []);
  return (
    <div id="scoreboard-container">
      <div className="score-title animate__animated animate__backInDown">
        <img src={point} className="point rotate" alt="score-img"></img>
        <h2 className="score-h">LEADERBOARD</h2>
        <img src={point} className="point reverse" alt="score-img"></img>
      </div>
      <ul className="leader-container">
        {users.map((user, index) => (
          <li
            key={user.id}
            className="user-score animate__animated animate__backInUp"
          >
            <div>
              {index + 1}. {user.displayName}
            </div>
            <div>{user.score}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
