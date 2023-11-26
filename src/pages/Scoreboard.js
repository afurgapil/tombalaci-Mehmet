import { useState, useEffect } from "react";
import point from "../assets/score.png";
import "animate.css";
import { Helmet } from "react-helmet";
import { USER_API } from "../urls";

const Scoreboard = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(USER_API.GET_SCOREBOARD, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const sortedUsers = data.results.sort((a, b) => b.score - a.score);
        setUsers(sortedUsers);
      }
    } catch (error) {
      console.error();
    }
  };
  useEffect(() => {
    fetchData();
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
              {index + 1}. {user.name.toUpperCase()}
            </div>
            <div>{user.score}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scoreboard;
