import React, { useEffect, useState } from "react";
//firestore
import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Helmet } from "react-helmet";
function Stats() {
  const [userStats, setUserStats] = useState({});
  const [name, setName] = useState(null);
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
              setUserStats(userData);
              const displayName = userData.displayName;
              setName(displayName);
            } else {
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);
  return (
    <div className="min-h-screen bg-bg p-4 rounded">
      <Helmet>
        <title>Stats | Tombalaci Mehmet</title>
        <meta name="description" content="user stats page " />
      </Helmet>
      <ul className="p-0 list-none">
        <li className="my-2">
          <h2 className="uppercase text-2xl text-gray-800">{name}</h2>
        </li>
        <li className="my-2">
          <p className="text-xl text-gray-700">
            CoinFlip Wins: {userStats.correctCoinflip || 0}
          </p>
        </li>
        <li className="my-2">
          <p>ToDice Wins: {userStats.correctDice || 0}</p>
        </li>
        <li className="my-2">
          <p>Rock Paper Scissors Wins: {userStats.correctRps || 0}</p>
        </li>
        <li className="my-2">
          <p>Roulette Wins: {userStats.correctRoulette || 0}</p>
        </li>
        <li className="my-2">
          <p>Slot Wins: {userStats.correctSlot || 0}</p>
        </li>
        <li className="my-2">
          <p>Jackpots: {userStats.correctJackpot || 0}</p>
        </li>
      </ul>
    </div>
  );
}

export default Stats;
