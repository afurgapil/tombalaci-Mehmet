import { useState, useEffect } from "react";
import point from "../assets/score.png";
//firebase
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
import "animate.css";
import { Helmet } from "react-helmet";
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
    <div className="flex flex-col justify-start items-center min-h-screen bg-bg">
      <Helmet>
        <title>Leaderboard | Tombalaci Mehmet</title>
        <meta name="description" content="leaderboard,scoreboard" />
      </Helmet>
      <div className="flex flex-row justify-around items-center my-4 border-b-4 border-black border-solid animate__animated animate__backInDown">
        <img src={point} className="w-36  animate-rotate" alt="score-img"></img>
        <h2 className="font-[Bebas Neue] text-7xl px-2">LEADERBOARD</h2>
        <img
          src={point}
          className="w-36 animate-reverseRotate"
          alt="score-img"
        ></img>
      </div>
      <ul className="flex flex-col justify-center items-center w-1/2 no-underline">
        {users.map((user, index) => (
          <li
            key={user.id}
            className="flex flex-row items-center justify-between bg-[#ffa000] w-full m-2 p-1  list-none first:rounded-t-xl last:rounded-b-xl  animate__animated animate__backInUp"
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
